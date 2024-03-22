import type { Course } from "./Course";

export interface Payment {
  course: Course;
  course_id: number;
  created_at: Date;
  payment: PaymentDetail;
  status: string;
  total_discount: number;
  total_price: number;
  updated_at: Date;
  user_id: number;
  xendit_id: string;
}

export interface PaymentDetail {
  expiry_date: Date;
  id: string;
  invoice_url: string;
  status: string;
}
