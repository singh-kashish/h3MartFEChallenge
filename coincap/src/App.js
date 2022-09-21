import './App.css';
import Header from './components/Header';
import CoinList from './components/CoinList';
import LoadNext from './components/LoadNext';
import React, { useEffect } from 'react';
import coinsReducer from './redux/reducers/coins';
import getCoins from './redux/saga/apiSaga';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_COINS } from './redux/constant';
import { addToCoins } from './redux/actions/coinAction';

 const App = ({props}) =>{
  const dispatch = useDispatch();
  let pageNumber = useSelector((state)=>state.pageData);
  console.log('page data is->',pageNumber);
  let data = useSelector((state)=>state.coinsData);
  console.warn("Data at App level is->",data);
  useEffect(()=>{
    dispatch(addToCoins('temp'));
  },[]);
  return (
    <div className="App">
      <div className='navigation'>
        <Header/>
        <CoinList data={data} pageNumber={pageNumber} />
        <LoadNext pageNumber={pageNumber} />
      </div>
    </div>
  );
}

export default App;
