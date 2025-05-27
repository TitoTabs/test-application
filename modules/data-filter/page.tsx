"use client";
import React, { useState } from "react";
import { USERS, USER_COLUMNS } from "@/constants/data";
import { CardContainer, SelectNavigation, Table } from "@/components";

const FilterData = () => {
  // Initialize state for query and filtered data
  // Using a constant USERS array to simulate fetched data
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(USERS);

  //instead of using useEffect, we can handle the search directly in the input's onKeyUp event
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    setQuery(value);

    const result = USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <CardContainer>
      <h1 className="text-2xl font-bold mb-4">Filter Data</h1>
      <div className="justify-between flex items-center mb-6">
        <div className="flex justify-start ">
          <input
            type="text"
            placeholder="Search by name or email"
            value={query}
            onKeyUp={handleSearch}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="">
          <div className="flex justify-end">
            <SelectNavigation />
          </div>
        </div>
      </div>
      <Table
        columns={USER_COLUMNS}
        data={filtered}
        emptyState="No users found."
      />
    </CardContainer>
  );
};

export default FilterData;
