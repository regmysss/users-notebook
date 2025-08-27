export const getIconByWeatherCode = (code: number): string => {
    const weatherCodeMap: { [key: number]: string } = {
        0: '/Sunny.svg',
        1: '/PartlyCloudy.svg',
        2: '/PartlyCloudy.svg',
        3: '/PartlyCloudy.svg',
        45: '/Fog.svg',
        48: '/Fog.svg',
        51: '/DrizzleSun.svg',
        53: '/DrizzleSun.svg',
        55: '/DrizzleSun.svg',
        56: '/Drizzle.svg',
        57: '/Drizzle.svg',
        61: '/RainSun.svg',
        63: '/RainSun.svg',
        65: '/RainSun.svg',
        66: '/Rain.svg',
        67: '/Rain.svg',
        71: '/Blizzard.svg',
        73: '/Blizzard.svg',
        75: '/Blizzard.svg',
        77: '/Show.svg',
        80: '/Sleet.svg',
        81: '/Sleet.svg',
        82: '/Sleet.svg',
        85: '/Hail.svg',
        86: '/Hail.svg',
        95: '/SeverThund.svg',
        96: '/SeverThund.svg',
        99: '/SeverThund.svg',
    };    

    return weatherCodeMap[code] || '/Sunny.svg';
}