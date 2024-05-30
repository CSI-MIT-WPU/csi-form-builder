/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Toolbar from "@/components/HomePage/Toolbar";
import CreateFormBtn from "@/components/HomePage/CreateFormBtn";
import PublishedFormsBtn from "@/components/HomePage/PublishedFormsBtn";

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
  const fetchData = async () => {
    const url = "http://127.0.0.1:3000/forms/all";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("An error occured");
      }
      const data = await response.json();
      setPublishedForms(data.forms);
      setStatsData((prevState) => {
        return prevState.map((stat) => {
          if (stat.title === "Total Forms") {
            return { ...stat, value: data.forms.length };
          } else if (stat.title === "Total submissions") {
            return { ...stat, value: data.responses };
          }
          return stat;
        })
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const [publishedForms, setPublishedForms] = useState([]);

  const [statsData, setStatsData] = useState([
    {
      title: "Total Forms",
      // icon: <LuView className="text-blue-600" />,
      helperText: "Total number of forms created",
      value: "0",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
    {
      title: "Total submissions",
      //icon: <FaWpforms className="text-yellow-600" />,
      helperText: "All time form submissions",
      value: "0",
      loading: false,
      className: "hidden md:block",
      timestamp: new Date(),
    },
  ]);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() { }
    getUser();
  }, []);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 pl-10 pr-10 pt-3 md:grid-cols-2 lg:grid-cols-2">
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
              key={form.form_id}
              id={form.form_id}
              title={form.form_title}
              description={`${form.team}`}
              timestamp={new Date(form.createdAt)}
              status={form.status}
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;
