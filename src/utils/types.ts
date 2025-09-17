export interface VideoMeta {
  desc: string;
  video: {
    playAddr: string[];
    originCover: string[];
    videoSD?: string;
    videoWatermark?: string;
  };
  statistics: {
    commentCount: number;
    likeCount: number;
    shareCount: number;
  };
  music?: {
    playUrl: string[];
  };
  author: {
    avatar: string;
    dec: string;
    username: string;
    nickname: string;
  };
  videoSD?: string;
  videoWatermark?: string;
}

export interface ImageMeta {
  statistics: {
    commentCount: number;
    likeCount: number;
    shareCount: number;
  };
  music: {
    playUrl: string[];
  };
  desc: string;
  images: Array<string>;
}
