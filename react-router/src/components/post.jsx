import React from "react";

const Post = ({ match, posts }) => {
  const postId = match.params.postId;
  return (
    <>
      {posts.find((post) => post.id.toString() === postId) ? (
        <h3>{`Пост номер ${postId}`}</h3>
      ) : (
        `нет такого поста`
      )}
    </>
  );
};

export default Post;
