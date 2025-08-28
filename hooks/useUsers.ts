import { User } from "@/types/user";
import { useCallback, useEffect, useState } from "react"
import { useToash } from "./useToash";

export const useUsers = (url: string) => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toash = useToash();

    const fetchUsers = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok)
                throw new Error(data.message || "Failed to fetch users!");

            setUsers(data.results);
        } catch (error: unknown) {
            console.error("Error fetching users:", error);
            if (error instanceof Error)
                toash?.open(error.message, "error");
            else
                toash?.open("An unknown error occurred while fetching users.", "error");
        }
        finally {
            setIsLoading(false);
        }
    }, [url, toash]);

    useEffect(() => {
        fetchUsers();
    }, [url, fetchUsers]);


    return { users, setUsers, isLoading, fetchUsers };
}