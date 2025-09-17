import { VideoMeta, ImageMeta } from "./types";

export function getVideoData(version: string, response: VideoMeta) {
  switch (version) {
    case "v1":
      return {
        username: response.author.username,
        title: response.desc ?? "",
        videoUrl: response.video.playAddr[0] ?? "",
        thumbnail: response.video.originCover[0] ?? "",
        statistics: response.statistics,
        music: response.music?.playUrl[0],
        isImage: false,
      };
      break;
    case "v2":
      return {
        username: response.author.username,
        title: response.desc ?? "",
        videoUrl: response.video.playAddr[0] ?? "",
        thumbnail: response.author.avatar ?? "",
        statistics: response.statistics,
        music: response.music?.playUrl[0],
        isImage: false,
      };
      break;

    default:
      return {
        username: response.author?.nickname ?? "",
        title: response.desc ?? "",
        videoUrl: response.videoSD ?? "",
        thumbnail: response.author.avatar ?? "",
        isImage: false,
      };
      break;
  }
}

export function getImageData(version: string, response: ImageMeta) {
  switch (version) {
    case "v1":
      return {
        title: response.desc ?? "",
        images: response.images ?? "",
        music: response.music.playUrl[0],
        statistics: response.statistics,
        isImage: true,
      };
      break;

    case "v2":
      return {
        title: response.desc ?? "",
        images: response.images ?? "",
        music: response.music.playUrl[0] || undefined,
        statistics: response.statistics,
        isImage: true,
      };
      break;

    default:
      return {
        images: response.images,
      };
      break;
  }
}
