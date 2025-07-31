"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function downloadTikTokVideo(url: string) {
  try {
    const req = await fetch(`${BASE_URL}/api/downloader`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const response = await req.json();

    if (response.version === "v1") {
      return {
        videoUrl: response.result.result.video.playAddr[0],
        thumbnail: response.result.result.video.originCover[0],
        title: "tiktoktodown - " + response.result.result.desc,
      };
    }

    if (response.version === "v2") {
      return {
        videoUrl: response.result.result.video.playAddr[0],
        thumbnail: response.result.result.author.avatar,
        title: "tiktoktodown - " + response.result.result.desc,
      };
    }

    return {
      videoUrl: response.video.downloadAddr,
      thumbnail: response.video.originCover[0],
      title: "tiktoktodown - " + response.author.dec,
    };
  } catch (error) {
    console.log("Error fetching TikTok video:", error);
  }
}
