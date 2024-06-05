export interface Certificate {
  id: number;
  uuid: string;
  no_cert: string;
  user_id: number;
  course_id: number;
  type: string;
  certificate_url: string;
  certificate_thumbnail: string;
  total_duration: number;
  created_at: string;
  updated_at: string;
  course: Course;
}
