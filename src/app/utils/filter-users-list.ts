import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterListByName = (UserName: string | undefined, userList: IUser[]): IUser[] => {

    const NAME_INVALID = UserName === undefined;

    if (NAME_INVALID) {
        return userList;
    }

    const filteredList = userList.filter((user) => user.name.toLowerCase().includes(UserName.toLowerCase()))

    return filteredList;

}

const filterListByStatus = (UserStatus: boolean | undefined, userList: IUser[]): IUser[] => {
    const STATUS_INVALID = UserStatus === undefined;

    if (STATUS_INVALID) {
        return userList;
    }

    const filteredList = userList.filter((user) => user.active === UserStatus);

    return filteredList;

}


const filterListByDate = (UserStartDate: Date | undefined, UserEndDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATE_INVALID = UserStartDate === undefined || UserEndDate === undefined;

    if (DATE_INVALID) {
        return userList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.signupDate), {
        start: UserStartDate,
        end: UserEndDate
    })

    const filteredList = userList.filter(checkDateInterval)

    return filteredList

}


const filterList = (user: IFilterOptions, usersList: IUser[]): IUser[] => {

    let listFiltered = [];

    listFiltered = filterListByName(user.name, usersList)

    listFiltered = filterListByStatus(user.status, listFiltered)

    listFiltered = filterListByDate(user.startDate, user.endDate, listFiltered)

    return listFiltered;

}

export { filterList }