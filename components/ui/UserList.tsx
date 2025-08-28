import { User } from "@/types/user";
import UserCard from "./UserCard";

type UserListProps = {
    users: User[];
    type?: "random" | "saved";
    setUsers?: React.Dispatch<React.SetStateAction<User[] | null>>;
}

export default function UserList({ users, type = "random", setUsers }: UserListProps) {
    return (
        <div className="w-full grid items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                users.map((user, index) => (
                    <UserCard
                        key={index}
                        user={user}
                        type={type}
                        setUsers={setUsers}
                    />
                ))
            }
        </div>
    )
}
