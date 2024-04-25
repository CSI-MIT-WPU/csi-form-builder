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
  const [formData, setFormData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  // Function to fetch form data
  const fetchFormData = async () => {
    const url = `http://127.0.0.1:3000/forms/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("An error occurred while fetching form data");
      }
      const data = await response.json();
      setFormData(data.form);
      console.log("Form", data) // Set the form data in state
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
      setResponseData(data.responses); // Set the response data in state
    } catch (error) {
      console.log(error);
    }
  };

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
        {formData && responseData && <DataTable columns={formData.input_fields} data={responseData} />}
      </div>
    </main>
  );
};

export default FormRes;