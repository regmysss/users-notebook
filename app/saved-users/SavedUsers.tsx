'use client';
import Loader from "@/components/ui/Loader";
import UserList from "@/components/ui/UserList";
import { useUsers } from "@/hooks/useUsers";

export default function SavedUsers() {
    const { users, setUsers } = useUsers("/api/users?type=saved");

    if (!users)
        return (<Loader />);

    return (
        <UserList users={users} type="saved" setUsers={setUsers} />
    )
}
