export interface SearchResultTableRow {
  imageUrl: string;
  published: Date;
  videoInfo: {
    title: string;
    url: string;
  };
  description: string;
  checked?: boolean;
}
