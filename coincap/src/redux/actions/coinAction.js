import { ADD_TO_COINS } from "../constant";

export const addToCoins = (data) =>{
    console.log("action is called",data);
    return{
        type:ADD_TO_COINS,
      
    }
}