"use client";
import { Input, Card, Tag, Pagination } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
import { dateTransform } from "@/Helper/dateTransform";
import { useRouter, useSearchParams } from "next/navigation";

export default function Jobs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState({ data: [], loading: false });

  const fetchData = async (prompt: string, page: string) => {
    return await fetch(
      `https://api.hh.ru/vacancies?page=${page}&per_page=50&text="${prompt}"`
    ).then(async (res: any) => {
      const data = await res.json();
      console.log(data);
      setData({ data: data.items, loading: false });
      return data;
    });
  };

  useEffect(() => {
    const param = searchParams.get("q");
    const page = searchParams.get("page");
    if (param && page) {
      fetchData(param, page);
    }
  }, [router, searchParams]);

  const onEnter = (e: any) => {
    const input = e.target.value;

    if (e.key === "Enter" && input.trim()) {
      const page = searchParams.get("page") ?? "0";
      router.push(`?q=${input}&page=${page}`, { scroll: false });
      setData((p) => ({ ...p, loading: true }));
      fetchData(input, page);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Vacancy name"
        autoFocus
        style={{ marginBottom: "20px" }}
        onKeyDown={onEnter}
      />
      {data.loading ? (
        "Loading..."
      ) : data.data.length ? (
        <>
          <JobsList data={data.data} />
          <Pagination
            defaultCurrent={0}
            total={50}
            onChange={(page) => router.push(`&page=${page}`, { scroll: false })}
          />
        </>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}

function JobsList({ data }: { data: any }) {
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
