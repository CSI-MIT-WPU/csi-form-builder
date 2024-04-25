/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function getValue(obj) {
  // Get the dynamically changing key
  const dynamicKey = Object.keys(obj).find(key => key !== 'type');
  
  // Retrieve and return the value associated with the dynamic key
  return obj[dynamicKey];
}

const renderTableHeaders = (column, index) => {
  return (
    <TableHead key={index}>
      {column.label}
    </TableHead>
  );
}

const renderTableData = (row, index) => {
  console.log(row.content)
  return (
    <TableRow key={index}>
      {
        row.content.map((cell, index) => {
          return (
            <TableCell key={index} className="max-w-[500px] overflow-ellipsis">
              {getValue(cell)}
            </TableCell>
          )
        })
      }
    </TableRow>
  )
}

export default function DataTable({ columns, data }) {

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });


  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {
              <TableRow>
                {
                  columns.map((column, index) => {
                    return (
                      renderTableHeaders(column, index)
                    )
                  })
                }
              </TableRow>
            }
          </TableHeader>
          <TableBody>
            {
              data.map((row, index) => {
                return (
                  renderTableData(row, index)
                )
              })
            }
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
