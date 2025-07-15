import { OAUTH_PROVIDER } from "@/constants/auth.constant";

export type OAuthProvider = typeof OAUTH_PROVIDER[keyof typeof OAUTH_PROVIDER];
export type Token = {
  accessToken: string;
  refreshToken: string;
};