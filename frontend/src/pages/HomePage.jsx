import React, { ReactNode, useState } from "react";
import CreateFormBtn from "@/components/CreateFormBtn";;
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
  const [statsData, setStatsData] = useState([
    {
      title: "Total visits",
      //icon: <LuView className="text-blue-600" />,
      helperText: "All time form visits",
      value: "1000", 
      loading: false,
      className: "hidden md:block",
      timestamp: new Date() 
    },
    {
      title: "Total submissions",
      //icon: <FaWpforms className="text-yellow-600" />,
      helperText: "All time form submissions",
      value: "500", 
      loading: false,
      className: "hidden md:block",
      timestamp: new Date() 
    },
    {
      title: "Submission rate",
      //icon: <HiCursorClick className="text-green-600" />,
      helperText: "Visits that result in form submission",
      value: "50%", 
      loading: false,
      className: "hidden md:block",
      timestamp: new Date() 
    },
    {
      title: "Bounce rate",
      //icon: <TbArrowBounce className="text-red-600" />,
      helperText: "Visits that leave without interacting",
      value: "20%", 
      loading: false,
      className: "hidden md:block",
      timestamp: new Date() 
    }
  ]);

  return (
    <>
    <div className="w-full pr-10 pl-10 pt-3 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          icon={stat.icon}
          helperText={stat.helperText}
          value={stat.value}
          loading={stat.loading}
          className={stat.className}
          timestamp={stat.timestamp} 
        />
      ))}
    </div>
    <div className="my-4 mr-10 ml-10 border-t-2 border-gray-200"></div>
    <h2 className="text-xl font-semibold pr-10 pl-10 pb-2">Your Forms</h2>
    <div className="my-4 mr-10 ml-10 border-t-2 border-gray-200"></div>
    
    <CreateFormBtn/>
    </>
  );
}

export default HomePage;
