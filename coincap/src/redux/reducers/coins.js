import { createSlice } from '@reduxjs/toolkit'

const coinsSlice = createSlice({
  name: 'coins',
  initialState: [],
  reducers: {
    coinsAdded(state, action) {
      state.push({
                id:action.payload.id,
                rank:action.payload.rank,
                symbol:action.payload.symbol,
                name:action.payload.name,
                supply:action.payload.supply,
                maxSupply:action.payload.maxSupply,
                marketCapUsd:action.payload.marketCapUsd,
                volumeUsd24Hr:action.payload.volumeUsd24Hr,
                priceUsd:action.payload.priceUsd,
                changePercent24Hr:action.payload.changePercent24Hr,
                vwap34Hr:action.payload.vwap34Hr,
                explorer:action.payload.explorer,
      })
    },
  }
})
export const { coinsAdded } = coinsSlice.actions
export default coinsSlice.reducer