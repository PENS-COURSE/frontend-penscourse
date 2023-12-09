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
