export enum status {
    Active = "Active",
    Inactive = "Inactive",
    Any = "Any"
}

export function getStatusValue(value: status): boolean | undefined {

    switch (value) {
        case status.Active:
            return true;
        case status.Inactive:
            return false;
        default:
            return undefined;
    }

}
