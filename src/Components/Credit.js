import React from 'react'

export default function Credit(props) {
  
    const Change = (event)=>{
        const value = event.target.value;
        props.onSelectValue(value);
        // console.log(`OnChange Occure ${value}`);
    };

  return (
    <h1>s</h1>
  )
}
