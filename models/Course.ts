export interface Course {
  id?: number;
  name?: string;
  slug?: string;
  description?: string;
  price?: number;
  is_free?: boolean;
  is_certified?: boolean;
  grade_level?: string;
  start_date?: Date;
  end_date?: Date;
  max_students?: number;
  thumbnail?: string;
  department_id?: number;
  user_id?: number;
  is_active?: boolean;
  is_completed?: boolean;
  completed_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  discount?: string;
  user?: UserCourse;
  is_enrolled?: boolean;
  ratings?: number;
  total_user_ratings?: number;
}

export interface UserCourse {
  id: number;
  name: string;
  avatar: null;
}
