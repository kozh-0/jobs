"use client";

import { Input } from "antd";
import { useState } from "react";
import JobsList from "./JobsList";

export default function Jobs() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Input
        type="text"
        placeholder="Vacancy name"
        autoFocus
        style={{ marginBottom: "20px" }}
        onKeyDown={(e) => {
          const input = e.target.value;

          if (e.key === "Enter" && input.trim()) {
            setIsLoading(true);
            console.log(input);
            fetch(`https://api.hh.ru/vacancies?text="${input}"`).then(async (res: any) => {
              const data = await res.json();
              console.log(data);
              setData(data.items);
              setIsLoading(false);
              return data;
            });
          }
        }}
      />
      {isLoading ? "Loading..." : data.length ? <JobsList data={data} /> : <h2>No Data</h2>}
    </div>
  );
}
