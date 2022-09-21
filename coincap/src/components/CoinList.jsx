import React from "react";
import Coin from './Coin';

const CoinList = ({data,pageNumber})=>{
    const indexOfLastRecord = pageNumber>=3?50:pageNumber * 50;
    const indexOfFirstRecord = indexOfLastRecord-50;
    data= data.slice(indexOfFirstRecord,indexOfLastRecord);
    console.log(data);
    return (
        <div className="mx-3 mt-3">
        <div className="bg-blue-500 flex mx-4 my-4 py-8 px-1">
            <div className="mx-2 mr-8">
                Rank
            </div>
            <div className="mx-4 mr-20">
                Name
            </div>
            <div className="mx-4 ml-9 px-7 ">
                Price
            </div>
            <div className="mx-4 ml-9 px-7">
                MarketCap
            </div>
            <div className="mx-4 ml-9 px-7">
                VWAP(24Hr)
            </div>
            <div className="mx-4 ml-9 px-4">
                Supply
            </div>
            <div className="mx-4 ml-9 px-7">
                Volume(24Hr)
            </div>
            <div className="mx-4 ml-9 px-7">
                Change(24Hr)
            </div>
        </div>
        <div>
            {data.map((element) => {
                        console.warn(element);
                       return (<Coin data={element}/>)}
            )
                }
        </div></div>
    )
}
export default CoinList;