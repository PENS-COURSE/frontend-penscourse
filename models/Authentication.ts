export interface Authentication {
  user: User;
  token: Token;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  google_id: null;
  avatar: null;
  role: string;
  created_at: Date;
  updated_at: Date;
}
