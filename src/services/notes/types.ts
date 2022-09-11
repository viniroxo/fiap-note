export interface Note {
    id: number;
    text: string;
    date: Date;
    urgent?: boolean;
}

export interface CreateNote {
    text: string;
    urgent: boolean;
}

export interface UpdateNote {
    id: number
    text: string;
    urgent?: boolean;
}
