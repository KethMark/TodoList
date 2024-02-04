type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    role: Role;
} | null;

type Message = {
    id: string;
    name: string;
    message: string;
    userId: string | null;
    isCompleted: boolean;
    user: User;
};



