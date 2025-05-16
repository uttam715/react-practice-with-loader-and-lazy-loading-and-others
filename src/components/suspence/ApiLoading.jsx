import { useEffect, useState } from "react";

export default function ApiLoading() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((result) => setData(result));

  }, []);
  return <div>{data.title}</div>;
}
