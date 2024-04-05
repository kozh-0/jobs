import { JSDOM } from "jsdom";

export async function GET() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  );
  console.log(data);

  return Response.json(data);
}

// avito 403, парсито только под личными креденшалами
// const document = await JSDOM.fromURL(`https://www.avito.ru/ufa/vakansii?q=${body.vacancy}`)
//   .then((dom) => dom.window.document)
//   .catch((err) => {
//     console.log("ERRRRRRRRRRRR", err.message);
//     return err.message;
//   });
export async function POST(req: Request) {
  const body: { vacancy: string } = await req.json();
  console.log(body);

  const document = await JSDOM.fromURL(
    `https://career.habr.com/vacancies?q=react${body.vacancy}`
  ).then((dom) => dom.window.document);

  console.log(document.querySelector(".vacancy-card")?.textContent);

  // let arr = [...document.querySelectorAll(".vacancy-card__inner")].map((el) => {
  //   console.log(el);

  //   return {
  //     title: el.querySelector(`div.vacancy-card__title`).textContent,
  //   };
  // });
  // console.log(arr);

  return Response.json({ yourMsg: body.vacancy, data: "arr" });
}
