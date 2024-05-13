import { IUser } from "../interfaces/user/user.interface";

export const UserList: IUser[] = [

    {
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "password":  "safepass",
        "age" : 38,
        "address": {
            "street": "don carlos",
            "houseNumber": 24,
            "state": "São Paulo",
            "country": "Brazil"
        },
        "phone": "4799991234",
        "active": true,
        "role": "Developer",
        "signupDate": "2023-08-01T09:00:00.000Z",
        "status": {
            "online": true,
            "verified": true,
            "activeSubscription": true,
            "lastAccess": "2023-08-02T09:00:00.000Z"
        }

    },

    {
        "name": "Maria Silva",
        "email": "maria.silva@example.com",
        "password":  "safepass",
        "age" : 24,
        "address": {
            "street": "don carlos",
            "houseNumber": 42,
            "state": "São Paulo",
            "country": "Brazil"
        },
        "phone": "47999991234",
        "active": true,
        "role": "Junior Developer",
        "signupDate": "2023-08-01T09:00:00.000Z",
        "status": {
            "online": true,
            "verified": true,
            "activeSubscription": true,
            "lastAccess": "2023-08-02T09:00:00.000Z"
        }
    }
    

    

]