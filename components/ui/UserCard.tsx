import { User } from '@/types/user';
import Image from 'next/image';
import React, { useState } from 'react'
import DetailBox from './DetailBox';
import ModalWeather from './ModalWeather';

export default function UserCard(props: User) {
    const { name, gender, email, picture, location } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const hangleOpen = () => {
        setIsOpenModal(!isOpenModal);
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
                />
                <h2 className="text-xl font-bold text-center mt-1">{name.first}</h2>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <DetailBox title="City" value={location.city} />
                <DetailBox title="Email" value={email} />
                <DetailBox title="Gender" value={gender} />
            </div>
            <div className="flex gap-4">
                <button className="w-24 py-1 rounded-lg border border-white/30 bg-white/10">
                    Save
                </button>
                <button
                    onClick={hangleOpen}
                    className="w-24 py-1 rounded-lg border border-white/30 bg-white/10"
                >
                    Weather
                </button>
            </div>
            {
                isOpenModal &&
                <ModalWeather latitude={location.coordinates.latitude} longitude={location.coordinates.longitude} hangleOpen={hangleOpen} />
            }
        </div>
    )
}
