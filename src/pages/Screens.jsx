import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";
import { TabView, TabPanel } from "primereact/tabview";

export default function Screens() {
  const [postData, setPostData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPostData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setCompanyData(res.data);
    });
  }, []);

  const tableOne = [
    { field: `id`, header: "ID" },
    { field: "userId", header: "User ID" },
    { field: "title", header: "Title" },
    { field: "body", header: "Body" },
  ];

  const tableTwo = [
    { field: `id`, header: "ID" },
    { field: "company.name", header: "Company" },
    { field: "website", header: "Website" },
    { field: "company.bs", header: "Service" },
    { field: "address.city", header: "City" },
    { field: "address.zipcode", header: "ZIP Code" },
  ];

  return (
    <div>
      <TabView>
        <TabPanel header="Posts">
          <Table
            tableData={tableOne}
            pagination={true}
            posts={postData}
            filter={true}
          />
        </TabPanel>
        <TabPanel header="Company">
          <Table
            tableData={tableTwo}
            pagination={true}
            posts={companyData}
            sortable={true}
          />
        </TabPanel>
      </TabView>
    </div>
  );
}
