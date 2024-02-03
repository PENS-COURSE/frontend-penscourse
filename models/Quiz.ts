export interface Quiz {
  id:            string;
  title:         string;
  description:   string;
  duration:      number;
  start_date:    Date;
  end_date:      Date;
  is_ended:      boolean;
  is_active:     boolean;
  pass_grade:    number;
  curriculum_id: string;
  created_at:    Date;
  updated_at:    Date;
  is_taken:      boolean;
}

export interface QuizResponse {
  message:    string;
  statusCode: number;
  data:       Data;
}

export interface Data {
  quiz:      QuizClass;
  questions: QuestionElement[];
  detail:    Detail;

}

// export interface TaskModel {
//   quiz: Quiz;
//   questions: QuestionElement[];
//   detail: Detail;
// }

export interface Detail {
  end_quiz: Date;
  session_id: string;
}

export interface QuestionElement {
  answer: any[];
  question: QuestionQuestion;
}

export interface QuestionQuestion {
  id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  question_type: string;
}

export interface QuizClass {
  id:            string;
  title:         string;
  description:   string;
  duration:      number;
  start_date:    Date;
  end_date:      Date;
  is_ended:      boolean;
  is_active:     boolean;
  show_result:   boolean;
  pass_grade:    number;
  curriculum_id: string;
  created_at:    Date;
  updated_at:    Date;
}

// export interface Quiz {
//   id: string;
//   title: string;
//   description: string;
//   duration: number;
//   start_date: Date;
//   end_date: Date;
//   is_ended: boolean;
//   is_active: boolean;
//   show_result: boolean;
//   pass_grade: number;
//   curriculum_id: string;
//   created_at: Date;
//   updated_at: Date;
// }
