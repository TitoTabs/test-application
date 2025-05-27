interface Props {
  limit?: number;
}

//separte the api call for clarity and easy to debug
export async function fetchPost({ limit = 5 }: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, limit);
}
