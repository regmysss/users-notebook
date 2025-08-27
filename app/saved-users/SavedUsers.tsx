'use client';
import Loader from "@/components/ui/Loader";
import UserCard from "@/components/ui/UserCard";
import { useUsers } from "@/hooks/useUsers";
import { useEffect } from "react";

export default function SavedUsers() {
    const { users, fetchUsers } = useUsers("/api/users?type=saved");

    useEffect(() => {
        fetchUsers();
    }, []);

    if (!users)
        return (<Loader />);

    return (
        <>
            {
                users.map((user, index) => (
                    <UserCard
                        key={index}
                        {...user}
                    />
                ))
            }
        </>
    )
}
