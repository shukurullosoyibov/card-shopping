import React from 'react'
import GoodItem from './GoodItem'
import '../App.css'


export default function GoodList(props) {
    const { goods=[], addToBasket} = props;
    if (!goods.length){
        return <h1>Hozircha bo'sh : </h1>
    }
    
  return (
    <div className='goods'>
        {goods.map( (item)=> (
            <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
        ))}
      
    </div>
  )
}
