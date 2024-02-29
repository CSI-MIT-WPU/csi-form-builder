/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function PublishedFormsBtn({ title, description, timestamp }) {
  return (
    <Card className="h-fit w-full">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge>Published</Badge>
        </div>
        <CardDescription>{timestamp.toLocaleString()}</CardDescription>
        <br />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full">
          View Submissions
        </Button>
      </CardContent>
    </Card>
  );
}

export default PublishedFormsBtn;
