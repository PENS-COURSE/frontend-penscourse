export interface Profile {
  message: string;
  statusCode: number;
  data: ProfileData;
}

export interface ProfileData {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  google_id: null;
  avatar: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}
