import { Downloader } from "@tobyg74/tiktok-api-dl";
import axios from "axios";

async function tryDownloader(url: string, versions: string[]) {
  for (const version of versions) {
    try {
      const response = await Downloader(url, {
        version: version as "v1" | "v2",
      });

      if (response.status === "success") {
        return { result: response, version };
      }
    } catch (error) {
      console.warn(`Downloader failed with version ${version}:`, error);
    }
  }
  return undefined;
}

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url || !url.includes("tiktok.com")) {
    return new Response(
      JSON.stringify({ error: "Invalid or missing TikTok URL" }),
      {
        status: 400,
      }
    );
  }

  try {
    const downloader = await tryDownloader(url, ["v2", "v1"]);

    return new Response(
      JSON.stringify({
        version: downloader?.version,
        result: downloader?.result,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing TikTok video:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process TikTok video" }),
      {
        status: 500,
      }
    );
  }
}
