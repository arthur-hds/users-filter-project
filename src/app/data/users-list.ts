import { IUser } from "../interfaces/user/user.interface";

export const UserList: IUser[] = [

    {
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "password":  "safepass",
        "age" : 38,
        "address": {
            "street": "don carlos",
            "houseNumber": 42,
            "state": "São Paulo",
            "country": "Brazil"
        },
        "phone": 1234,
        "active": true,
        "role": "Developer",
        "signupDate": "2023-08-01T09:00:00.000Z",
        "status": {
            "online": true,
            "verified": true,
            "activeSubscription": true,
            "lastAccess": "2023-08-02T09:00:00.000Z"
        }

    }

]