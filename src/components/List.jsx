import React from 'react'
import '../styles/list.css'
const List = ({items, removeItem, editItem}) => {
    return (
        <div>
           {items.map((item)=>{
               const {id, title} = item;
               return(
                   <ul key={id}>
                       <li className='lists'>
                       <p>{title}</p>
                       <div className="btns">
                       <button className='btn btn-outline-danger' onClick={() => removeItem(id)}>Delete</button>
                       <button className='btn btn-outline-warning' onClick={() => editItem(id)}>Edit</button>
                       </div>
                       </li>
                   </ul>
               )
           })} 
        </div>
    )
}

export default List
