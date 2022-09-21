import { ADD_TO_COINS, SET_COIN_LIST } from '../constant';

export const coinsData = (data=[],action)=>{
    switch(action.type){
    case ADD_TO_COINS:
        console.warn('ADD_TO_COINS reducer called',action);
        return [action.data,...data]
    case SET_COIN_LIST:
        console.warn('SET_COIN_LIST reducer called',action);
        console.log('data is->',[...action.data.data]);
        return [...action.data.data];
    default:
        return data;
    }
}