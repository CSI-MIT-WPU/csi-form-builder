
// THIS FILE CONTAINS ALL THE COMPONENTS FROM THE LIST ON THE RIGHT HAND SIDE OF THE BUILD PAGE. 

/* eslint-disable react/prop-types */

import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { MdOutlineTextFields } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Bs123 } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsTextareaResize } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgPlayListSearch } from "react-icons/cg";
import { RiListRadio } from "react-icons/ri";
import { IoIosCheckbox } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { BsTypeH1 } from "react-icons/bs";
import { BsTypeH2 } from "react-icons/bs";
import { ImParagraphLeft } from "react-icons/im";
import { RiSeparator } from "react-icons/ri";


function TextField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `textfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <MdOutlineTextFields className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Textfield</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function TextAreaField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `textareafield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <BsTextareaResize className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Textarea</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function TelField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `telfield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <BsFillTelephoneFill className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Telephone</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}


function SelectField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `selectfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <IoIosArrowDropdown className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Select</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function RadioField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `radiofield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <RiListRadio className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Radio</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function NumberField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `numberfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <Bs123 className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Number</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function FileField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `filefield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <FaFile className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>File</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function EmailField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `emailfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <MdEmail className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Email</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function DataListField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `datalistfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <CgPlayListSearch className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Datalist</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function CheckBoxField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `checkboxfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <IoIosCheckbox className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Checkbox</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function H1Field(props){
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: `h1field-${uuidv4()}`,
  });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <BsTypeH1 className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Header</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function H2Field(props){
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: `h2field-${uuidv4()}`,
  });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <BsTypeH2 className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Header</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function ParagraphField(props){
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: `pfield-${uuidv4()}`,
  });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <ImParagraphLeft className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Paragraph</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

function SeparatorField(props){
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: `separatorfield-${uuidv4()}`,
  });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }} className='flex justify-center w-[90%]'>
          <Card className="w-[100%] md:w-[80%] lg:w-[60%]">
            <CardContent className="p-2">
              <div className="flex flex-col h-[100%] justify-center items-center">
                <RiSeparator className='w-[80%] h-[40%]'/>
                <Label className='text-center text-sm'>Separator</Label>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

export { TextField, TextAreaField, TelField, SelectField, RadioField, NumberField, FileField, EmailField, DataListField, CheckBoxField, H1Field, H2Field, ParagraphField, SeparatorField};