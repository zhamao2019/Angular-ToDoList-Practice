export class ToDo {
    id: number;
    content: string;
    completed: boolean=false;
    userId: number;
}

export class User {
    id: number;
    username: string;
    password: string;
}