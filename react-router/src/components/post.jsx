import React from "react";

const Post = ({ posts, id, history }) => {
  const necessaryPost = posts.find((post) => post.id.toString() === id);
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
