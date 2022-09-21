import React from "react";
 const changeZeroes =  (labelValue)=> {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(labelValue));
}
const Coin = ({data})=>{
    if(data===undefined)return;
    console.warn('data at coin comp level->',data);
    let url ="https://assets.coincap.io/assets/icons/"+data.symbol.toLowerCase()+"@2x.png";
    //console.log(url);
    return(
    <div className="bg-white hover:bg-gray-100 flex border-solid border-gray-300 border-b-2">
        <div className="mx-2 pl-4 pr-6">{data.rank}</div>
        <div className="mx-2 mr-15 px-2 flex">
            <div  className="px-1 py-3 h-[75px] w-[75px]">
                <img src={url} alt="" className="inline-flex object-cover "/>
            </div>    
            <div className="py-4 my-4">
                <div className="text-xl">
                    {data.name}
                </div>
                <div className="text-lg">
                    {data.symbol}
                </div>
            </div>
            </div>
        <div className="ml-6 px-10 border-l border-dashed border-gray-500">${changeZeroes(data.priceUsd)}</div>
        <div className="ml-6 px-10 border-l border-dashed border-gray-500">${changeZeroes(data.marketCapUsd)}</div>
        <div className="ml-9 px-10 border-l border-dashed border-gray-500" >${changeZeroes(data.vwap24Hr)}</div>
        <div className="ml-9 px-7 border-l border-dashed border-gray-500">${changeZeroes(data.supply)}</div>
        <div className="ml-9 px-7 border-l border-dashed border-gray-500">${changeZeroes(data.volumeUsd24Hr)}</div>
        <div className="ml-9 px-7 border-l border-dashed border-gray-500">${changeZeroes(data.changePercent24Hr)}</div>
    </div>
    );
}
export default Coin;