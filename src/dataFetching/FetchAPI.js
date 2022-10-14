import React, { useState, useEffect } from "react";

const FetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setloading(false);
      }
    }
    getData();
  }, []);
  return (
    <>
      <h1>API Posts</h1>
      {loading && <div>A moment please ...</div>}
      {error && <div>There is a problem fetching the post data</div>}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h2>{id}</h2>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchAPI;
