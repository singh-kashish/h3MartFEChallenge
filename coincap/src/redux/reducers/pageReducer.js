import { SET_PAGE_NUMBER } from '../constant';

export const pageData = (data=1,action)=>{
    switch(action.type){
    case SET_PAGE_NUMBER:
        console.warn('SET_PAGE_NUMBER reducer called',action.data);
        console.log('data is->',data);
        return data+1;
    default:
        return data;
    }
}