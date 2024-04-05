"use client";
import React, { useEffect } from "react";

export default function Test() {
  async function kek(url: string) {
    return await fetch(url).then((res) => res.json());
  }

  useEffect(() => {
    (async () => {
      //   const todo1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      //     .then((response) => response.json())
      //     .then((data) => console.log("todo1", data));
      //   const todo2 = await fetch("https://jsonplaceholder.typicode.com/todos/2")
      //     .then((response) => response.json())
      //     .then((data) => console.log("todo2", data));

      Promise.allSettled(
        [1, 2, 3, "aaaaaaaaaaaaaaaaaaaaaaaaaaa", 5].map((el) => {
          return kek(`https://jsonplaceholder.typicode.com/todos/${el}`);
        })
      ).then((res) => {
        console.log(res);
        return res;
      });
    })();
  }, []);
  return <div>Test</div>;
}
