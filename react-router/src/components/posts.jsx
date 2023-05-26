import Post from "./post";
import PostsList from "./postsList";
import qs from "query-string";
import _ from "lodash";

const Posts = ({ match, location, history }) => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  const postId = match.params.postId;
  const parsed = qs.parse(location.search);
  console.log(parsed);
  const cropPosts = parsed.count
    ? _(posts).slice(0).take(parsed.count).value()
    : posts;
  return (
    <>
      {postId ? (
        <Post id={postId} posts={posts} history={history} />
      ) : (
        <PostsList posts={cropPosts} />
      )}
    </>
  );
};

export default Posts;
