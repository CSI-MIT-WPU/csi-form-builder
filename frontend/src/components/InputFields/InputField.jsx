/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDrag } from 'react-dnd';

export default function InputField({type, label, inputType}) {
  const [{isDragging}, dragRef] = useDrag({
    type:"input",
    item: {type, label, inputType},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {inputType === 'text' && (
        <>
          <div>{label}</div>
          <input type="text"  placeholder='sample text' className='border-2 rounded border-zinc-400'/>
        </>
      )}
      {inputType === 'checkbox' && (
        <input type="checkbox" />
      )}
      {inputType === 'radio' && (
        <>
          <div>{label}</div>
          <input type="radio" name="radioGroup" />
        </>
      )}
    </div>
  );
}
