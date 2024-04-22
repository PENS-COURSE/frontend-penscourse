export interface Curriculum {
  id: string;
  slug: string;
  title: string;
  description: string;
  course_id: number;
  week: number;
  created_at: Date;
  updated_at: Date;
  subjects: Subjects;
}

export interface Subjects {
  quizzes: Quiz[];
  file_contents: Content[];
  live_classes: LiveClass[];
  video_contents: Content[];
}

export interface Content {
  id: string;
  title: string;
  description: string;
  url: string;
  file_type?: string;
  curriculum_id: string;
  created_at: Date;
  updated_at: Date;
  is_completed: boolean;
  duration?: string;
}

export interface LiveClass {
  id: string;
  title: string;
  description: string;
  slug: string;
  is_open: boolean;
  curriculum_id: string;
  created_at: Date;
  updated_at: Date;
  room_moderator_id: null;
  is_completed: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number;
  start_date: Date;
  end_date: Date;
  is_ended: boolean;
  is_active: boolean;
  show_result: boolean;
  pass_grade: number;
  curriculum_id: string;
  created_at: Date;
  updated_at: Date;
  is_taken: boolean;
}
