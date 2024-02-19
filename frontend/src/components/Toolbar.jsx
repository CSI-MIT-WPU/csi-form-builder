import React from 'react'
import { Button } from './ui/button';
import { Input } from "@/components/ui/input"

function Toolbar() {
    return (
      <div className="flex w-full max-w-sm items-center space-x-2 ml-10 mb-4">
        <Input type="search" placeholder="Type what you want to search" />
        <Button type="submit">Search</Button>
      </div>
    )
  }

  export default Toolbar;