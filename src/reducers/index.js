import {indexType} from '../types';

const initialState = {
    newsList: []
};

export const indexReducer=(state=initialState, action)=>{
    const {type, data} = action;

    switch (type) {
        case indexType.GET_NEWS:
            return {
                ...state,
                newList:data
            }
        default:
            return state;
    }
}