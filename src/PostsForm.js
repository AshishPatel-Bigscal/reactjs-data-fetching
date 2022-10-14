import { useState, useEffect } from "react";
import "./App.css";
import Posts from "./Posts";

const PostsForm = () => {
  let data1 = JSON.parse(localStorage.getItem("PostsData"));
  console.log(data1);
  const [data, setData] = useState(Posts);
  const [id, setId] = useState();

  useEffect(() => {
    let filterData = data.filter((props) => {
      return props.hidden === false;
    });
    setData(filterData);
    localStorage.setItem("PostsData" ,JSON.stringify(Posts))
  }, [id]);

  const updateVisibility = (id) => {
    setId(id);
    Posts[id].hidden = true;
  };

  const deletePost = (id) => {
    // delete Posts[id]
  };

  return (
    <div className="App">
      {data.map((props) => {
        return (
          <div className="postContainer" key={props.id}>
            <div className="postUserName">{props.userName}</div>
            <div className="postPhone">{props.userPhone}</div>
            <div className="postContent">{props.content}</div>
            <div className="postOption">
              <button
                className="postDeleteBtn btn"
                onClick={deletePost(props.id)}
              >
                Delete
              </button>
              <button
                className="postHideBtn btn"
                onClick={() => updateVisibility(props.id)}
              >
                Hide
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsForm;
