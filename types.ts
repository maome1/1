export interface Profile {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
}

export interface AppStyle {
  backgroundColor: string;
  backgroundImageUrl?: string;
  fontColor: string;
  buttonRadius: string;
}

export interface SocialLinkStyle {
  background: string;
  textColor: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string;
  style: SocialLinkStyle;
}

export interface AppData {
  profile: Profile;
  style: AppStyle;
  socialLinks: SocialLink[];
}