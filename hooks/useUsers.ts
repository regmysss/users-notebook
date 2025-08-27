import { User } from "@/types/user";
import { useState } from "react"

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

    return { users, fetchUsers };
}