export interface Quiz {
    id:          string;
    slug:        string;
    title:       string;
    description: string;
    course_id:   number;
    week:        number;
    created_at:  Date;
    updated_at:  Date;
    subjects:    Subjects;
}

export interface Subjects {
    quizzes:        QuizElement[];
    file_contents:  any[];
    live_classes:   any[];
    video_contents: any[];
}

export interface QuizElement {
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
