import React from 'react';
import { Button } from './ui/button';
import { Input } from "@/components/ui/input";
import { TbArrowsSort } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";

function Toolbar({ setSearch }) {
    return (
      <div className="flex items-center space-x-2 ml-10 mb-4">
        <Input onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Type what you want to search" className='w-80'/>
        <Button type="submit">Search</Button>
        <Button>
        <TbArrowsSort className="mr-2 h-4 w-4" /> Sort
        </Button>
        <Button>
        <FaFilter className="mr-2 h-4 w-4" /> Filter
        </Button>
        <Button>
        <CiViewList className="mr-2 h-4 w-4" /> View
        </Button>
      </div>
    );
}

export default Toolbar;
