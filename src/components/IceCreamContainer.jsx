import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {buyIceCream} from '../redux'


export const IceCreamContainer = () => {
    const numberOfIceCreams=useSelector(state=>state.iceCream.numberOfIceCreams)
    const dispatch=useDispatch()

    return (
        <div>
        <h2>Number of IceCreams -{numberOfIceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
            
        </div>
    )
}
