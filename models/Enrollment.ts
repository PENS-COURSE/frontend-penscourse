import type { Course } from "./Course";

export interface Enrollment {
  user_id: number;
  course_id: number;
  course: Course;
  total_subjects_count: number;
  marked_as_completed_count: number;
  progress_completed: number;
}
