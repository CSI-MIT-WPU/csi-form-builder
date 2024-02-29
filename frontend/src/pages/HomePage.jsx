/* eslint-disable react/prop-types */
import { useState } from "react";
import CreateFormBtn from "@/components/HomePage/CreateFormBtn";
import PublishedFormsBtn from "@/components/HomePage/PublishedFormsBtn";
import Toolbar from "@/components/HomePage/Toolbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/common/StatsCard";

export function PublishedCards({ title, timestamp, description }) {
  return (
    <div className="ml-10 mr-10">
      <Card className="w-[400px]">
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
    </div>
  );
}

const HomePage = () => {
  const [publishedForms, setPublishedForms] = useState([
    {
      id: 1,
      title: "titleone",
      description: "description for form 1",
      timestamp: new Date(),
    },
    {
      id: 2,
      title: "titletwo",
      description: "description fro form 2",
      timestamp: new Date(),
    },
  ]);

  const [search, setSearch] = useState("");
  console.log(search);

  const [statsData, setStatsData] = useState([
    {
      title: "Total visits",
      // icon: <LuView className="text-blue-600" />,
      helperText: "All time form visits",
      value: "500",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
    {
      title: "Total submissions",
      //icon: <FaWpforms className="text-yellow-600" />,
      helperText: "All time form submissions",
      value: "500",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
    {
      title: "Submission rate",
      //icon: <HiCursorClick className="text-green-600" />,
      helperText: "Visits that result in form submission",
      value: "50%",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
    {
      title: "Bounce rate",
      //icon: <TbArrowBounce className="text-red-600" />,
      helperText: "Visits that leave without interacting",
      value: "20%",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
  ]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 pl-10 pr-10 pt-3 md:grid-cols-2 lg:grid-cols-4">
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
      <h2 className="mt-4 pb-2 pl-10 pr-10 text-xl font-semibold">
        Your Forms
      </h2>
      <hr className="mx-10 my-2 border border-muted" />

      <Toolbar setSearch={setSearch} />

      <div className="mx-10 grid grid-cols-3 gap-8">
        <CreateFormBtn />

        {publishedForms
          .filter((form) => {
            return search.toLowerCase() === ""
              ? form
              : form.title.toLowerCase().includes(search);
          })
          .map((form) => (
            <PublishedFormsBtn
              key={form.id}
              title={form.title}
              description={form.description}
              timestamp={form.timestamp}
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;
