import React,{useState} from 'react'
import {buyCake} from '../redux'
import {useSelector,useDispatch} from 'react-redux'

const NewCakeContainer = () => {
const [number, setNumber] = useState(1)
    const numberOfCakes=useSelector(state=>state.cake.numberOfCakes)
    const dispatch =useDispatch()
    return (
        <div>
        <h1>number of cakes * {numberOfCakes}</h1>
        <input type="text" value={number} onChange={e=>setNumber(e.target.value)}></input>
        <button onClick={()=>dispatch(buyCake(number)) }>Buy {number} cake</button>
            
        </div>
    )
}

export default NewCakeContainer
