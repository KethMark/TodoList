// import { $Enums } from "@prisma/client";

// type Message = {
//     id: string;
//     message: string;
//     name: string;
//     isCompleted: boolean;
//     // user: {
//     //     id: string;
//     //     name: string | null;
//     //     email: string | null;
//     //     emailVerified: Date | null;
//     //     image: string | null;
//     //     role: $Enums.Role;
//     // } | null
// }

// type Props = {
//     id: string;
//     name: string | null;
//     email: string | null;
//     emailVerified: Date | null;
//     image: string | null;
//     role: $Enums.Role;
//     message: Message
// }

// type User = {
//     id: string;
//     name: string | null;
//     email: string | null;
//     emailVerified: Date | null;
//     image: string | null;
//     role: Role;
// }

// type Message = {
//     id: string;
//     name: string;
//     message: string;
//     userId: string | null;
//     isCompleted: boolean;
//     user: User | null;
// }

// type Props = Message[];
type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    role: Role; // Replace 'Role' with the actual type of your 'role'
} | null;

type Message = {
    id: string;
    name: string;
    message: string;
    userId: string | null;
    isCompleted: boolean;
    user: User;
};



