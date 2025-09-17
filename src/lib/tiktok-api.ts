"use server";

import { getImageData, getVideoData } from "@/utils/responseData";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface VideoMeta {
  username?: string;
  title?: string;
  videoUrl?: string;
  thumbnail?: string;
  statistics?: {
    commentCount: number;
    likeCount: number;
    shareCount: number;
  };
  music?: string | undefined;
  images?: string[];
  isImage?: boolean;
}

export async function downloadTikTokVideo(
  url: string
): Promise<VideoMeta | undefined> {
  try {
    const req = await fetch(`${BASE_URL}/api/downloader`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const response = await req.json();

    if (response.result.result.type === "video") {
      return getVideoData(response.version, response.result.result);
    } else if (response.result.result.type === "image") {
      return getImageData(response.version, response.result.result);
    }

    return undefined;
  } catch (error) {
    console.log("Error fetching TikTok video:", error);
    return undefined;
  }
}
