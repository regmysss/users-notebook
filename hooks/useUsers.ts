import { User } from "@/types/user";
import { useEffect, useState } from "react"

export const useUsers = (url: string) => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data.results);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [url])


    return { users, setUsers, isLoading, fetchUsers };
}