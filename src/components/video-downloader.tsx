"use client";

import type React from "react";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { downloadTikTokVideo } from "@/lib/tiktok-api";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

export default function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<
    | {
        videoUrl: string;
        thumbnail: string;
        title: string;
      }
    | undefined
  >(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a TikTok video URL",
        variant: "destructive",
      });
      return;
    }

    if (!url.includes("tiktok.com")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid TikTok video URL",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const data = await downloadTikTokVideo(url);
      setVideoData(data);
      console.log("Video data:", data);

      toast({
        title: "Success!",
        description: "Video found and ready to download",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to process the TikTok video. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="p-6 border-gray-300">
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="text"
              placeholder="Paste TikTok video URL here"
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              className="py-5 border-gray-400"
            />
            <Button type="submit" disabled={loading} className="py-5">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </>
              )}
            </Button>
          </div>
        </form>

        {videoData && (
          <div className="rounded-lg border p-4">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Image
                  src={videoData.thumbnail || "/placeholder.svg"}
                  alt="Video thumbnail"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                    {videoData.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  <a download href={videoData.videoUrl || "#"}>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Video
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 text-center text-sm text-muted-foreground">
          By using our service, you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </div>
      </Card>
    </div>
  );
}
