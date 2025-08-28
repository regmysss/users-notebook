'use client'
import CustomButton from '@/components/ui/CustomButton';
import Loader from '@/components/ui/Loader';
import UserList from '@/components/ui/UserList';
import { useUsers } from '@/hooks/useUsers';

export default function LookForUsers() {
    const { users, isLoading, fetchUsers } = useUsers("/api/users");

    if (isLoading || !users)
        return (<Loader />);


    return (
        <>
            <UserList users={users!} />
            <CustomButton callback={fetchUsers} className="w-40 h-10 mt-10">
                Refresh users
            </CustomButton>
        </>
    )
}
