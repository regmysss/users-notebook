'use client'
import Loader from '@/components/ui/Loader';
import UserCard from '@/components/ui/UserCard';
import { useUsers } from '@/hooks/useUsers';
import React, { useEffect } from 'react'

export default function LookForUsers() {
    const { users, fetchUsers } = useUsers("/api/users");

    useEffect(() => {
        fetchUsers();
    }, []);

    if (!users)
        return (<Loader />);

    console.log(users);

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
