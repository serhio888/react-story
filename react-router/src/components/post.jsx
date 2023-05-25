import React from "react";

const Post = ({ posts, id }) => {
  return (
    <>
      {posts.find((post) => post.id.toString() === id) ? (
        <h3>{`Пост номер ${id}`}</h3>
      ) : (
        `нет такого поста`
      )}
    </>
  );
};

export default Post;
