export interface Progress {
  message: string;
  statusCode: number;
  data: ProgressData;
}

export interface ProgressData {
  total_subjects_count: number;
  marked_as_completed_count: number;
  progress_completed: number;
}
