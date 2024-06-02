export interface Review {
  id: number;
  user_id: number;
  course_id: number;
  rating: number;
  review: string;
  created_at: string;
  updated_at: string;
  course: Course;
  user: User;
}
