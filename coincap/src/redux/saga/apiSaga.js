import {takeEvery,put} from 'redux-saga/effects';
import { ADD_TO_COINS, SET_COIN_LIST } from '../constant';

function* getAllCoins(){
    let data = yield fetch('https://api.coincap.io/v2/assets');
    data = yield data.json();
    yield put({type:SET_COIN_LIST,data});
}
function* coinsSaga(){
    console.log("get product saga is called");
    yield takeEvery(ADD_TO_COINS,getAllCoins)
}

export default coinsSaga;