import React, { useState } from 'react';

function List(){
    const [currentList, setCurrentList] = useState("");
    const [lists, setLists] = useState([
      {
        list: "bake a cake",
        isCompleted: true
      },
      {
        list: "go for a walk",
        isCompleted: false
      },
      {
        list: "contribution",
        isCompleted: false
      }
    ]);
  
    return (
      
        <div>
         {lists.map((list, index) => (
        <p>{list.list}</p>
      ))}
     
        </div>
      
        
      
    );
};

export default List;