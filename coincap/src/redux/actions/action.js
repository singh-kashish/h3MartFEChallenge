export const addToCoins = (data)=>{
    console.warn("action called",data);
    return{
        type:'ADD_TO_COINS',
        data:data
    }
}