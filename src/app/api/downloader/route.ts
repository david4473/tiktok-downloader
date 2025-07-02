import { Downloader } from "@tobyg74/tiktok-api-dl";

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
    });
  }

  if (!url.includes("tiktok.com")) {
    return new Response(JSON.stringify({ error: "Invalid TikTok URL" }), {
      status: 400,
    });
  }

  try {
    const response = await Downloader(url, { version: "v1" });

    if (!response.status || response.status !== "success") {
      throw new Error("Failed to fetch video data");
    }

    return new Response(JSON.stringify(response.result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching TikTok video:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process the video" }),
      {
        status: 500,
      }
    );
  }
}
