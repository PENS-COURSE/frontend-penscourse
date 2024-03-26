import type { User } from "./Authentication";
import type { Course } from "./Course";

export interface Order {
  id: string;
  user_id: number;
  course_id: number;
  total_price: number;
  total_discount: number;
  xendit_id: string;
  status: "pending" | "expired" | "paid";
  created_at: Date;
  updated_at: Date;
  user: User;
  course: Course;
}
