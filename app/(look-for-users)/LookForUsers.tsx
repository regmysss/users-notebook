'use client'
import Loader from '@/components/ui/Loader';
import UserCard from '@/components/ui/UserCard';
import { useUsers } from '@/hooks/useUsers';

export default function LookForUsers() {
    const { users, fetchUsers } = useUsers("/api/users");

    if (!users)
        return (<Loader />);

    return (
        <>
            <div className="w-full grid items-start grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    users.map((user, index) => (
                        <UserCard
                            key={index}
                            user={user}
                        />
                    ))
                }
            </div>
            <button
                onClick={fetchUsers}
                className="mt-10 w-96 py-2 rounded-lg border border-white/30 bg-white/10 cursor-pointer hover:bg-white/20 transition"
            >
                Load new users
            </button>
        </>
    )
}
