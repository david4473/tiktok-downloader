// This is a simplified example. In a real application, you would need to implement
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function downloadTikTokVideo(url: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/downloader`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    console.log(data.result, "data result");
    console.log(data.version, "data version");

    return {
      videoUrl: data.video.downloadAddr,
      thumbnail: data.video.originCover[0],
      title: "tiktoktodown - " + data.author.dec,
    };
  } catch (error) {
    console.log("Error fetching TikTok video:", error);
  }
}
