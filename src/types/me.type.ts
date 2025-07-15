import { OAuthProvider } from "./auth.type";

type OAuth = {
    provider: OAuthProvider;
};
  
export type Me = {
    uuid: string;
    name: string;
    profilePhoto: string;
    email: string;
    oauthList: OAuth[];
};
