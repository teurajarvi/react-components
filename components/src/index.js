import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />
      <CommentDetail
        author='Sam'
        timeAgo='Today at 12:05PM'
        authorComment='Well done!'
        authorImage={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 09:10AM'
        authorComment='Great work!'
        authorImage={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 10:22AM'
        authorComment='Keep going!'
        authorImage={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
