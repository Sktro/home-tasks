type loadingReducerType = {
    isLoading: boolean
}

const CHANGE_LOADING = 'CHANGE_LOADING'

const initState: loadingReducerType  = {
isLoading: false
}

export const loadingReducer = (state:loadingReducerType = initState, action: LoadingACType): loadingReducerType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
            ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

type LoadingACType = {
    type: typeof CHANGE_LOADING
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {type: 'CHANGE_LOADING', isLoading}
}