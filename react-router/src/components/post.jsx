import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ posts, id }) => {
  const necessaryPost = posts.find((post) => post.id.toString() === id);
  const history = useHistory();
  const handleRedirect = () => {
    if (necessaryPost) {
      history.push("/posts");
    } else {
      history.replace("/posts");
    }
  };

  return (
    <>
      {posts.find((post) => post.id.toString() === id) ? (
        <h3>{`Пост номер ${id}`}</h3>
      ) : (
        `нет такого поста`
      )}
      <button onClick={() => handleRedirect()}>to posts</button>
    </>
  );
};

export default Post;
