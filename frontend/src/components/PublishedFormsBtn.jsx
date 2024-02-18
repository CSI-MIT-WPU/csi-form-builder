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
    <div className="ml-10 mr-10">
      <Card className="w-[400px]">
        <CardHeader>
          <div className='flex justify-between'>
            <CardTitle>titleone</CardTitle>
            <Badge>Published</Badge>
          </div>
          <CardDescription>2 mins ago</CardDescription>
          <br />
          <CardDescription>Form description lorem, ipsum dolor sit amet elit lorem ipsum consectetur adipisicing elit.</CardDescription>
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
