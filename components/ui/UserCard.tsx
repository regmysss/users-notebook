import { User } from '@/types/user';
import Image from 'next/image';
import React, { useState } from 'react'
import DetailBox from './DetailBox';
import ModalWeather from './ModalWeather';
import Loader from './Loader';
import CustomButton from './CustomButton';

type Props = {
    user: User;
    type?: "random" | "saved";
    setUsers?: React.Dispatch<React.SetStateAction<User[] | null>>;
}

export default function UserCard({ user, type, setUsers }: Props) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { name, gender, email, picture, location, _id } = user;

    const hangleOpen = () => {
        setIsOpenModal(!isOpenModal);
    }

    const saveUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("/api/users/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log("User saved:", data);
        } catch (error) {
            console.error("Error saving user:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const deleteUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/users/user?id=${_id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log("User deleted:", data);
            if (response.ok) {
                setUsers!(prev => prev ? prev.filter(u => u._id !== _id) : null);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 w-full p-5 border border-white/30 rounded-lg bg-white/10">
            <div>
                <Image
                    src={picture.large}
                    alt={name.first}
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-cover"
                    unoptimized
                />
                <h2 className="text-xl font-bold text-center mt-1">{name.first}</h2>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <DetailBox title="City" value={location.city} />
                <DetailBox title="Email" value={email} />
                <DetailBox title="Gender" value={gender} />
            </div>
            <div className={`flex gap-4 ${type === "saved" ? "flex-row-reverse" : ""}`}>
                {
                    type !== "saved" ?
                        (
                            <CustomButton
                                callback={saveUser}
                            >
                                {isLoading ? <Loader size={18} /> : "Save"}
                            </CustomButton>
                        ) :
                        (
                            <CustomButton
                                callback={deleteUser}
                            >
                                {isLoading ? <Loader size={18} /> : "Delete"}
                            </CustomButton>
                        )
                }
                <CustomButton callback={hangleOpen}>
                    Weather
                </CustomButton>
            </div>
            {
                isOpenModal &&
                <ModalWeather latitude={location.coordinates.latitude} longitude={location.coordinates.longitude} hangleOpen={hangleOpen} />
            }
        </div>
    )
}
