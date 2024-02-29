import React from 'react'
import { useDrag } from 'react-dnd';

export default function InputField({type, label, inputType, _name}) {
  const [{isDragging}, dragRef] = useDrag({
    type:"input",
    item: {type, label, inputType, _name},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {inputType === 'text' && (
        <>
          <div>{label}</div>
          <input type="text"  placeholder='sample text' className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name={_name}/>
        </>
      )}
      {inputType === 'checkbox' && (
        <input type="checkbox" name={_name}/>
      )}
      {inputType === 'radio' && (
        <>
          <div>{label}</div>
          <div>   
            <input type="radio" name={_name} />
            <label>Option 1</label>
          </div>
        </>
      )}
    </div>
  );
}
