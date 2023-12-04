export interface Course {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: null;
  is_free: boolean;
  is_certified: boolean;
  grade_level: string;
  start_date: Date;
  end_date: Date;
  max_students: number;
  thumbnail: null;
  department_id: number;
  user_id: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  discount: null;
  user: UserCourse;
}

export interface UserCourse {
  id: number;
  name: string;
  avatar: null;
}
