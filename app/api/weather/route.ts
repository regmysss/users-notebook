import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { latitude, longitude } = await req.json();

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code&timezone=auto`);
        const data = await response.json();

        const responseData = {
            weatherCode: data.current.weather_code,
            currentTemperature: data.current.temperature_2m,
            maxTemperature: data.daily.temperature_2m_max[0],
            minTemperature: data.daily.temperature_2m_min[0],
        };

        return NextResponse.json(responseData);
    }
    catch (error) {
        return NextResponse.json({ message: "Error fetching weather data", error }, { status: 500 });
    }
}