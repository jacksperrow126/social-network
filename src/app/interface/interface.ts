// User Interface
export interface UserForSignIn {
  email: string;
  password: string;
}

export interface UserForRegister {
  username: string;
  email: string;
  password: string;
}

export interface User {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: any;
  };
}

export interface Profile {
  profile: {
    username: string;
    bio: string;
    image: any;
    following: boolean;
  };
}
export interface Tags {
  tags: string[];
}
// Artcile Interface
export interface ArticleList {
  articles: ArticleDetail[];
  articlesCount: number;
}

export interface ArticleDetail {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
  favorited: boolean;
  favoritesCount: number;
}

export interface ArticleToCreate {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
export interface ArticleToEdit {
  title: string;
  description: string;
  body: string;
}
export interface GetDetail {
  article: ArticleDetail;
}

export interface Comments {
  comments: CommentDetail[];
}
export interface Comment {
  comment: CommentDetail;
}

export interface CommentDetail {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
