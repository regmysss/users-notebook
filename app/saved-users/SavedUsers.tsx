'use client';
import Loader from "@/components/ui/Loader";
import UserCard from "@/components/ui/UserCard";
import { useUsers } from "@/hooks/useUsers";

export default function SavedUsers() {
    const { users } = useUsers("/api/users?type=saved");

    if (!users)
        return (<Loader />);

    return (
        <div className="w-full grid items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                users.map((user, index) => (
                    <UserCard
                        key={index}
                        user={user}
                        type="saved"
                    />
                ))
            }
        </div>
    )
}
