export interface Enrollment {
  user_id: number;
  course_id: number;
  course: Course;
  total_subjects_count: number;
  marked_as_completed_count: number;
  progress_completed: number;
}

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
  user: User;
}

export interface User {
  id: number;
  name: string;
  avatar: null;
}
