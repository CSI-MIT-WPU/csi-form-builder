// FormRes.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "@/components/common/DataTable";
import StatsCard from "@/components/common/StatsCard";

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
  const [formData, setFormData] = useState(null); // State to hold form data
  const [responseData, setResponseData] = useState([]); // State to hold response data

 // Function to fetch form data
const fetchFormData = async () => {
  const url = `http://127.0.0.1:3000/forms/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("An error occurred while fetching form data");
    }
    const data = await response.json();
    setFormData(data);
    console.log("#####",data) // Set the form data in state
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
    console.log("****",data); // Log the data received from the server
    setResponseData(data); // Set the response data in state
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchFormData();
    fetchResponseData();
  }, [id]); // Fetch data when the id changes

  // Render the table with dynamic headings and response data
  const renderTable = () => {
    if (!formData || !formData.input_fields) {
      console.log("1111", formData);
      return <div>Loading...</div>;
    }
  
    if (!responseData) {
      console.log("2222", responseData);
      return <div>No responses available.</div>;
    }
  
    const formHeadings = formData.input_fields.map((field) => field.label);
  
    const tableRows = responseData.map((response) => {
      return (
        <tr key={response._id}>
          {formData.input_fields.map((field) => (
            <td key={field.name}>{response.content[field.name]}</td>
          ))}
        </tr>
      );
    });
  
    return (
      <DataTable>
        <thead>
          <tr>
            {formHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </DataTable>
    );
  };
  
  return (
    <main>
      {/* ... */}
      <div className="mx-10">
        {renderTable()}
      </div>
    </main>
  );
}
export default FormRes  