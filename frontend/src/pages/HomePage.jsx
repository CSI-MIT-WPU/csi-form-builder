import React, { ReactNode, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="pt-1 text-xs text-muted-foreground">{helperText}</p>
      </CardContent>
    </Card>
  );
}

const HomePage = () => {
  const [temp, setTemp] = useState([
    { form_title: "titleone", timestamp: new Date() },
    2,
    3,
  ]);
  return (
    <div className="grid w-full grid-cols-2 gap-4 p-3 pt-8 md:grid-cols-2 lg:grid-cols-4">
      {temp.map((da, index) => {
        return (
          <StatsCard
            key={index}
            title="Total visits"
            helperText="All time form visits"
            value={da.form_title}
            className="hidden shadow-md shadow-gray-300 md:block"
          />
        );
      })}

      <StatsCard
        title="Total submissions"
        helperText="All time form submissions"
        value="50,000"
        className="shadow-md shadow-gray-300"
      />

      <StatsCard
        title="Submission rate"
        helperText="Visits that result in form submission"
        value="60%"
        className="shadow-md shadow-gray-300"
      />

      <StatsCard
        title="Bounce rate"
        helperText="Visits that leaves without interacting"
        value="40%"
        className="hidden shadow-md shadow-gray-300 md:block"
      />
    </div>
  );
};

export default HomePage;
