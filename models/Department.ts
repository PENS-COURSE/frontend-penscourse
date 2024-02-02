export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  participant_note: string;
  participant_thumbnail: string | null;
  benefits_note: string;
  benefits_thumbnail: string | null;
  opportunities_note: string;
  opportunities_thumbnail: string | null;
  icon: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
