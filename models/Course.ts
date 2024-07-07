export interface Course {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  is_free: boolean;
  is_certified: boolean;
  grade_level: string;
  start_date: any;
  end_date: any;
  max_students: number;
  thumbnail: string;
  department_id: number;
  user_id: number;
  is_active: boolean;
  is_completed: boolean;
  completed_at: string;
  created_at: string;
  updated_at: string;
  curriculums: Curriculum[];
  department: Department;
  discount: any;
  is_enrolled: boolean;
  ratings: number;
  total_user_rating: number;
  user: User;
}
