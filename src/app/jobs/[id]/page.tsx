"use client";
import { Button, Tag } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SingleJobI } from "./interface";
import { useRouter } from "next/navigation";

export default function Page(props: { params: { id: string } }) {
  const { back } = useRouter();
  const [data, setData] = useState<SingleJobI>();

  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies/${props.params.id}`).then(async (res) => {
      const data = await res.json();
      setData(data);
      return data;
    });
  }, []);

  if (!data) return "Loading...";
  console.log(data);

  return (
    <div>
      <Button type="primary" onClick={back}>
        Back
      </Button>
      <h2>{data.name}</h2>

      <div className="center">
        <div>{data.employer.name}</div>
        <div style={{ width: "150px", height: "60px", position: "relative" }}>
          {data.employer.logo_urls && (
            <Image
              src={data.employer.logo_urls[240]}
              alt={data.employer.logo_urls[240]}
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </div>
      <p>{data.address?.raw}</p>
      <div>
        Скилы:{" "}
        {data.key_skills?.map((el: any) => (
          <Tag color="blue" key={el.name}>
            {el.name}
          </Tag>
        ))}
      </div>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: data.branded_description ? data.branded_description : data.description,
        }}
      />

      <br />
    </div>
  );
}
