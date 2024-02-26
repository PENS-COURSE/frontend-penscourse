export interface Notif {
  id: number;
  type: string;
  title: string;
  description: string;
  action_id: number;
  read_at: Date;
  created_at: Date;
  updated_at: Date;
}
