/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "@/components/common/DataTable";
import StatsCard from "@/components/common/StatsCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const FormRes = () => {
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

  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const navigate  = useNavigate();

  //function to convert received data into a format that can be used by the tanstack table for table headers.
  function processHeaderData(inputFields) {
    if (inputFields) {
      const newFormData = [];
      //makes a new array that has the user_email as the first element to allow searching by email
      newFormData.push({
        accessorKey: "user_email",
        header: "user_email",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("user_email")}</div>
        ),
      });
      inputFields.forEach(field => {
        newFormData.push({
          accessorKey: field.name,
          header: field.name,
          cell: ({ row }) => (
            <div className="capitalize">{row.original[field.name]}</div>
          ),
        });
      });
      console.log(newFormData);
      setFormData(newFormData);
    }
  }

  //function to convert received data into a fomat that can be used by the tanstack table for table data.
  const processTableData = (_responseData) => {
    const newResponseData = _responseData.map(item => {
      const contentObj = {};
      item.content.forEach(field => {
        const key = Object.keys(field)[0];
        const value = field[key];
        contentObj[key] = value;
      });

      return {
        user_email: item.user_email,
        ...contentObj
      };
    });
    console.log(newResponseData);
    setResponseData(newResponseData);
  }

  // Function to fetch form data
  const fetchFormData = async () => {
    const url = `http://127.0.0.1:3000/forms/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("An error occurred while fetching form data");
      }
      const data = await response.json();

      processHeaderData(data.form.input_fields);

      console.log("Form", data)
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch response data
  const fetchResponseData = async () => {
    const url = `http://127.0.0.1:3000/responses/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("An error occurred while fetching response data");
      }
      const data = await response.json();
      console.log("Response :", data); // Log the data received from the server
      processTableData(data.responses);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteForm = async () => {
    const url = `http://127.0.0.1:3000/forms/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("An error occurred while deleting form");
      }
      const data = await response.json();
      console.log("Deleted form", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFormData();
    fetchResponseData();
  }, []);
  return (
    <main>
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
      <h2 className="mt-4 pb-2 pl-10 pr-10 text-xl font-semibold">Responses</h2>
      <hr className="mx-10 my-2 border border-muted" />
      <div className="mx-10">
        {formData && responseData && <DataTable columns={formData} data={responseData} />}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Form</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the form and all its responses.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={()=>deleteForm()}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
};

export default FormRes;