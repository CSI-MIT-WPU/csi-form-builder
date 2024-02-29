/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { TbArrowsSort } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { MdGridView } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Toolbar({ setSearch }) {
  return (
    <div className="mb-4 ml-10 flex items-center space-x-2">
      <Input
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        placeholder="Search forms"
        className="w-80"
      />
      <Button>
        <TbArrowsSort className="mr-2 h-4 w-4" /> Sort
      </Button>
      <Button>
        <FiFilter className="mr-2 h-4 w-4" /> Filter
      </Button>
      <Button>
        <MdGridView className="mr-2 h-4 w-4" /> View
      </Button>
    </div>
  );
}

export default Toolbar;
