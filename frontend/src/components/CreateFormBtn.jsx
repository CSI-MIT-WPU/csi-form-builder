//CreateFormBtn.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { BsFileEarmarkPlus } from 'react-icons/bs'; 

function CreateFormBtn() {
  // Define the styles object
  const styles = {
    group: true,
    border: true,
    'border-primary/20': true,
    'h-[217px]': true,
    'w-[400px]': true,
    'items-center': true,
    'justify-center': true,
    flex: true,
    'flex-col': true,
    'hover:border-primary': true,
    'hover:cursor-pointer': true,
    'border-dashed': true,
    'gap-4' : true,
    'ml-10': true,
    'py-14' : true
  };

  return (
    <div className="">
      <Button variant="outline" className={Object.keys(styles).filter(key => styles[key]).join(' ')}>
        <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
        <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create New Form</p>
      </Button>
    </div>
  );    
}

export default CreateFormBtn;
