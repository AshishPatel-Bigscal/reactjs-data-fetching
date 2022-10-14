import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosLib = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
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
      <h1>API Posts using AXIOS Library</h1>
      {loading && <div>A moment please ...</div>}
      {error && <div>There is a problem fetching the post data</div>}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h2>{id}</h2>
              <h4>{title}</h4>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AxiosLib;
