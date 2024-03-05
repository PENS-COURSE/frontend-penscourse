export interface Progress {
  message: string;
  statusCode: number;
  data: Data;
}

export interface Data {
  total_subjects_count: number;
  marked_as_completed_count: number;
  progress_completed: number;
}
