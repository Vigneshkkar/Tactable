export interface BlogsData {
  info: Info;
  results: Blogs[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Blogs {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  authors: Author[];
  comments: Comment[];
}

export interface Author {
  createdAt: Date;
  name: string;
  avatar: string;
  updatedAt: Date;
  id: string;
  postId: string;
}

export interface Comment {
  createdAt: Date;
  title: string;
  description: string;
  updatedAt: Date;
  id: string;
  postId: string;
}
