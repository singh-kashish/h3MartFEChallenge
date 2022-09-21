import { SET_PAGE_NUMBER } from "../constant";

export const set_page_number = (data) =>{
    console.log("page action is called",data);
    return{
        type:SET_PAGE_NUMBER,
    }
}