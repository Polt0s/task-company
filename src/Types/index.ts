export interface IAboutMe {
  avatar_url: string,
  html_url: string,
  followers: number,
};

export interface ICompany {
  nameCompany: string;
  address: string;
  email: string;
  phone: string;
  id?: number;
  selected?: boolean | undefined;
};

export interface IUser {
  username: string;
  password: string;
};

export interface IUserInfo {
  name: string,
  company: string,
  avatar_url: string | "Gravatar",
  followers: number,
};
