import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetLimintDataQuery,
  useDeletePostMutation,
} from "./service/post";

function App() {
  // const { data } = useGetAllPostQuery();
  // console.log(responceInfo); // console.log me values ko dekh sare values ko display kara sakte hai

  // const responceInfo = useGetPostByIdQuery(5); //get singal data
  // console.log(responceInfo);

  // ek range data find karne ke liye
  // const responceInfo = useGetLimintDataQuery(10);
  // console.log(responceInfo);

  // delete ke liye
  const [deletePost, responceInfo] = useDeletePostMutation(5);
  console.log(responceInfo.data);
  // console.log(responceInfo);

  console.log(deletePost);
  return (
    <>
      {/* <h1>hii monu </h1>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
          </div>
        ))} */}
      {/* <h1>hii monu </h1>
     <h1>{responceInfo.data.title}</h1>
      <h4></h4> */}

      {/* {responceInfo.data &&
        responceInfo.data.map((post) => (
          <div key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
          </div>
        ))} */}
      <button onClick={deletePost()}>delete post</button>
    </>
  );
}

export default App;
