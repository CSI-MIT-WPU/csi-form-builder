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
import { useNavigate } from "react-router-dom";

function PublishedFormsBtn({ id, title, description, timestamp, status }) {
  const navigate = useNavigate();
  return (
    <Card className="h-fit w-full">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge>{status}</Badge>
        </div>
        <CardDescription>{timestamp.toLocaleString()}</CardDescription>
        <br />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" onClick={()=>navigate(`/form-res/${id}`)}>
          View Submissions
        </Button>
      </CardContent>
    </Card>
  );
}

export default PublishedFormsBtn;
