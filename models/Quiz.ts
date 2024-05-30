export interface QuizResponse {
  quiz?: Quiz;
  questions?: QuestionElement[];
  detail?: Detail;
}

export interface Detail {
  end_quiz?: Date;
  session_id?: string;
}

export interface QuestionElement {
  answer?: string[];
  question?: QuestionQuestion;
}

export interface QuestionQuestion {
  id?: string;
  question?: string;
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  option_e?: string;
  question_type?: string;
}

export interface Quiz {
  id?: string;
  title?: string;
  description?: string;
  duration?: number;
  start_date?: Date;
  end_date?: Date;
  is_ended?: boolean;
  is_active?: boolean;
  show_result?: boolean;
  pass_grade?: number;
  curriculum_id?: string;
  created_at?: Date;
  updated_at?: Date;
  is_taken: boolean;
}

export interface QuizScoreResponse {
  score?: number;
  is_passed?: boolean;
}

export interface QuizPilihan {
  question_type?: string;
  pilihan?: [];
}

export interface QuizQuestion {
  id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  question_type: string;
  quiz_id: string;
  level: string;
  curriculum_id: string;
  created_at: string;
  updated_at: string;
  answer: Answer[];
}

export interface Answer {
  id: string;
  question_id: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

export interface EnrolledQuiz {
  id: string;
  user_id: number;
  quiz_id: string;
  score: number;
  is_ended: boolean;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface QuizHistory {
  id: string;
  title: string;
  description: string;
  duration: number;
  start_date: string;
  end_date: string;
  is_ended: boolean;
  is_active: boolean;
  show_result: boolean;
  pass_grade: number;
  curriculum_id: string;
  created_at: string;
  updated_at: string;
  curriculum: Curriculum;
  detail_score: DetailScore;
  is_taken: boolean;
  status: "ongoing" | "late" | "finished";
  course: Course;
}

export interface DetailScore {
  score: any;
  is_passed: boolean;
}

export interface ResetQuiz {
  id: string;
  user_id: number;
  quiz_id: string;
  score: number;
  is_ended: boolean;
  created_at: string;
  updated_at: string;
}
