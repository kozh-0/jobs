export async function GET() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  );
  console.log(data);

  return Response.json(data);
}

export async function POST(req: Request) {
  const body: { kek: string } = await req.json();
  console.log(body);

  return Response.json({ message: "Hello from Next.js!", yourMsg: body.kek });
}
