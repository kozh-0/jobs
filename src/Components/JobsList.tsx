"use client";
import { dateTransform } from "@/Helper/dateTransform";
import { Card, Tag } from "antd";
import Link from "next/link";

//   const { data, isSuccess, error, isRefetching } = useQuery({
//     queryKey: ["Jobs", input],
//     queryFn: () => fetch(`https://api.hh.ru/vacancies?text="${input}"`).then((res) => res.json()),
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     enabled: !!input,
//   });

//   if (!isSuccess) return <Spin tip="Договор..." size="large" />;

//   if (error || data.error) {
//     console.error("Contract", error, data.error);
//     return (
//       <Spin spinning={isRefetching} tip="Договор..." size="large">
//         <Result status="warning" title="Что-то пошло не так..." />
//       </Spin>
//     );
//   }

export default function JobsList({ data }: { data: any }) {
  return (
    <Card>
      {data.map((el: any) => (
        <Card.Grid key={el.created_at + el.title} style={{ width: "100%" }}>
          <a href={el.alternate_url} target="_blank" rel="noreferrer">
            <Tag color="red">hh</Tag>
          </a>
          <Link href={`/jobs/${el.id}`}>{el.name}</Link> <br />
          <p>
            Опубликовано: {dateTransform(el.published_at).date} в{" "}
            {dateTransform(el.published_at).time}
          </p>
          <p>
            from: {el.salary?.from ? el.salary?.from : "N/D"} | to:{" "}
            {el.salary?.to ? el.salary?.to : "N/D"} <b>{el.salary?.currency}</b>
          </p>
          <details>
            <summary>Описание</summary>
            <p style={{ marginLeft: "15px" }}>{el.snippet?.responsibility}</p>
          </details>
        </Card.Grid>
      ))}
    </Card>
  );
}
