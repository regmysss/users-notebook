import { User } from "@/types/user";
import { useEffect, useState } from "react"

export const useUsers = (url: string) => {
    const [users, setUsers] = useState<User[] | null>(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data.results);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [url])


    return { users, fetchUsers };
}