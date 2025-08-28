"use client"
import { useEffect, useLayoutEffect, useState } from 'react'
import DetailBox from './DetailBox';
import Image from 'next/image';
import { getIconByWeatherCode } from '@/utils/getIconByWeatherCode';
import Loader from './Loader';

type ModalWeatherProps = {
    name: string
    latitude: string;
    longitude: string;
    hangleOpen: () => void;
}

type WeatherData = {
    weatherCode: number;
    currentTemperature: number;
    maxTemperature: number;
    minTemperature: number;
}

export default function ModalWeather(props: ModalWeatherProps) {
    const { latitude, longitude, hangleOpen, name } = props;
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>("");

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('/api/weather', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ latitude, longitude }),
                });
                const data = await response.json();

                if (!response.ok)
                    throw new Error(data.message || "Failed to fetch weather data!");

                setWeatherData(data);
            }
            catch (error) {
                console.error("Error fetching weather data:", error);
                setError("Error fetching weather data! Please try again later.");
            }
        }

        fetchWeather();
    }, [latitude, longitude]);

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={hangleOpen}>
            <div className="fixed flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] w-full p-5">
                {
                    error ? (
                        <div className="flex-1 bg-[#010409] border border-white/30 rounded-xl p-5">
                            <p className="text-red-500">{error}</p>
                        </div>
                    ) :
                        weatherData ? (
                            <div className="flex-1 bg-[#010409] border border-white/30 rounded-xl p-5">
                                <div className="flex justify-between mb-4">
                                    <h2 className="text-xl font-bold mb-2">Weather by {name}</h2>
                                    <button
                                        onClick={hangleOpen}
                                        className="flex items-center justify-center cursor-pointer hover:bg-white/10 size-8 rounded-lg"
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt="Close"
                                            width={22}
                                            height={22}
                                            priority
                                        />
                                    </button>
                                </div>
                                <div className="w-full flex items-center justify-between gap-4">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <DetailBox title="Current Temperature" value={`${weatherData.currentTemperature} °C`} />
                                        <DetailBox title="Max Temperature" value={`${weatherData.maxTemperature} °C`} />
                                        <DetailBox title="Min Temperature" value={`${weatherData.minTemperature} °C`} />
                                    </div>
                                    <div className="size-32">
                                        <Image
                                            src={getIconByWeatherCode(weatherData.weatherCode)}
                                            alt="Weather Icon"
                                            width={128}
                                            height={128}
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Loader />
                        )}
            </div>
        </div>
    )
}
