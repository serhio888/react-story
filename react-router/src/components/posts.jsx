import Post from "./post";
import PostsList from "./postsList";
import { useParams } from "react-router-dom";

const Posts = () => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  const { postId } = useParams();
  return (
    <>
      {postId ? (
        <Post id={postId} posts={posts} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
