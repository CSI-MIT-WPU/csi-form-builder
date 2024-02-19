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

function PublishedFormsBtn({ title, description, timestamp }) {
    return (
        <div className=" published-form-container ml-10 mr-10">
            <Card className="w-[400px]">
                <CardHeader>
                    <div className='flex justify-between'>
                        <CardTitle>{title}</CardTitle>
                        <Badge>Published</Badge>
                    </div>
                    <CardDescription>{timestamp.toLocaleString()}</CardDescription>
                    <br />
                    <CardDescription>{description}</CardDescription>
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
