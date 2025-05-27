"use client";
import React, { useEffect, useState } from "react";
import { fetchPost } from "@/api";
import { CardContainer } from "@/components/card";
import { Table } from "@/components/table";
import { SelectNavigation } from "@/components";

const Lists = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // instead of declaring the function inside useEffect, I created a separate function for clarity and easy of testing.
    const getData = async () => {
      const posts = await fetchPost({ limit: 5 });
      setData(posts);
    };

    getData();
  }, []);

  return (
    <CardContainer>
      <div className="justify-between flex items-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Lists</h1>
        <div className="flex justify-end">
          <SelectNavigation />
        </div>
      </div>
      <Table
        columns={[
          { key: "id", header: "ID" },
          { key: "title", header: "Title" },
          { key: "body", header: "Body" },
        ]}
        data={data}
      />
    </CardContainer>
  );
};

export default Lists;
