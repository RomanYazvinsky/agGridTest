export interface SearchResult {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: { totalResults: number, resultsPerPage: number };
  items: SearchItem[];
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: ResultId;
  snippet: Snippet;
}

export interface ResultId {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { default: Thumbnail, medium: Thumbnail, high: Thumbnail };
  channelTitle: string;
  liveBroadcastContent: BroadcastType;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export type BroadcastType = 'none' | string;


