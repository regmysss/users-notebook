export interface User {
    _id?: string;
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    picture: {
        large: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    }
}

