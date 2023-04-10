export type Links = {
  title: string;
  link: string;
};

export type UserData = {
  userID: string;
  email: string;
  name: string;
  username: string;
  description: string;
  color: string;
  links: Links[];
  photoURL: string;
  publicEmail: string;
  status: string;
};
