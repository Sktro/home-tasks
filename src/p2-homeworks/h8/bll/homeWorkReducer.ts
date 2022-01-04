import {UserType} from "../HW8";

type CheckType = {
    type: 'check'
    payload: number
}

type SortUpType = {
    type: 'sortUp'
    payload: string
}

type SortDownType = {
    type: 'sortDown'
    payload: string
}


type ActionType = CheckType | SortUpType | SortDownType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sortUp': {
            return state.map(u=> u).sort((a, b)=> a.name < b.name ? -1 : 0)
        }
        case 'sortDown': {
            return state.map(u=> u).sort((a, b)=> a.name > b.name ? -1 : 0)
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}