export interface IPublicationsData {
  content: string;
  image?: string;
  video?: string;
  createdAt: string;
  likes: number;
  comments: string[];
  userId: string;
  id: string
}

export interface IPublications {
  data: IPublicationsData
}