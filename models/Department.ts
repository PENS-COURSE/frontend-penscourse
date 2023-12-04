export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  participant_note: string;
  participant_thumbnail: null;
  benefits_note: string;
  benefits_thumbnail: null;
  opportunities_note: string;
  opportunities_thumbnail: null;
  icon: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
