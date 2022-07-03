import React from 'react';

function Post(props) {
    return (
        <div>
            <h1>{props.posts.title}</h1>
        </div>
    );
}

export default Post;

export const getServerSideProps = async (context) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+context.params.id+"");
     const data = await res.json();
    return {
      props :{
        posts:data
      }
    }
  }