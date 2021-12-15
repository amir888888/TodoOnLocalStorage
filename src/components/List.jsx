import React from 'react'

const List = ({items, removeItem, editItem}) => {
    return (
        <div>
           {items.map((item)=>{
               const {id, title} = item;
               return(
                   <ul key={id}>
                       <li>{title} 
                       <button onClick={() => removeItem(id)}>Delete</button>
                       <button onClick={() => editItem(id)}>Edit</button>
                       </li>
                   </ul>
               )
           })} 
        </div>
    )
}

export default List
