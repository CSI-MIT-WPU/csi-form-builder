import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from './ui/button';
import { Badge } from './ui/badge';

function PublishedFormsBtn(){
  return(
    <div className="ml-10 mr-10 mt-5">
      <Card className="w-[350px]">
        <CardHeader>
          <div className='flex justify-between'>
            <CardTitle>titleone</CardTitle>
            <Badge>Published</Badge>
          </div>
          <CardDescription>2 mins ago</CardDescription>
          <br />
          <CardDescription>form description Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant='outline' className='w-full'>
            View Submissions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default PublishedFormsBtn;
