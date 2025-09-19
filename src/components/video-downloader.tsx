"use client";

import type React from "react";

import fileDownload from "js-file-download";
import axios from "axios";

import { useState } from "react";
import {
  Download,
  ExternalLink,
  Loader2,
  MessageCircle,
  Music,
  ThumbsUp,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { downloadTikTokVideo } from "@/lib/tiktok-api";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

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
}

export default function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoMeta | undefined>(undefined);

  async function handleDownloadVideo() {
    try {
      const videoName = videoData?.title || "tiktoktodown-video.mp4";

      axios
        .get(videoData?.videoUrl as string, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, `tiktoktodown - ${videoName}.mp4`);
        });
    } catch (error) {
      console.log("Error processing video with axios:", error);
    }
  }

  const handleDownloadMusic = async () => {
    try {
      const musicUrl = videoData?.music;
      if (!musicUrl) {
        toast({
          title: "Error",
          description: "No music URL available for this video.",
          variant: "destructive",
        });
        return;
      }

      const musicName = videoData?.title || "tiktoktodown-music.mp3";

      axios
        .get(musicUrl, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, `${musicName}.mp3`);
        });
    } catch (error) {
      console.log("Error processing music with axios:", error);
    }
  };

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
              <div className="flex flex-col">
                <div className="mb-4 text-left">
                  <h3 className="mb-2 line-clamp-2 text-lg ">
                    <span className="font-semibold">Username:</span> @
                    {videoData?.username}
                  </h3>
                  <h3 className="mb-2 line-clamp-2 text-lg ">
                    <span className="font-semibold">Desc:</span>{" "}
                    {videoData.title}.
                  </h3>
                </div>
                <div className="flex gap-4 justify-between mt-5">
                  <p className="inline-flex items-center">
                    <ThumbsUp size={"16px"} strokeWidth={"1px"} />{" "}
                    <span className="text-sm font-medium">
                      {videoData.statistics?.likeCount}
                    </span>
                  </p>
                  <p className="inline-flex items-center">
                    <MessageCircle size={"16px"} strokeWidth={"1px"} />{" "}
                    <span className="text-sm font-medium">
                      {videoData.statistics?.commentCount}
                    </span>
                  </p>
                  <p className="inline-flex items-center">
                    <ExternalLink size={"16px"} strokeWidth={"1px"} />{" "}
                    <span className="text-sm font-medium">
                      {videoData.statistics?.shareCount}
                    </span>
                  </p>
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-end mt-4">
                  <Button className="w-full" onClick={handleDownloadVideo}>
                    <Video className="mr-2 h-4 w-4" />
                    Download Video
                  </Button>
                  <Button className="w-full" onClick={handleDownloadMusic}>
                    <Music className="mr-2 h-4 w-4" />
                    Download Sound
                  </Button>
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
