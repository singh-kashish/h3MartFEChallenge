import React from 'react';
import { set_page_number } from '../redux/actions/pageAction';
import { useDispatch } from 'react-redux';
const LoadNext = ({pageNumber})=>{
    console.warn('page number at loadnext->',pageNumber);
    const dispatch = useDispatch();
    return(
        <button className='bg-blue-500 text-2xl hover:scale-[1.2] mx-2 rounded-full px-4 py-1' onClick={()=>dispatch(set_page_number(pageNumber))}>Load the next 50 coins</button>
    )
    //console.log({buttonPress});
}
export default LoadNext;