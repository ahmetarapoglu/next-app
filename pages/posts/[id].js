import React from 'react';

function Post(props) {
    return (
        <div>
            <h1>{props.posts.title}</h1>
        </div>
    );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id:"1"}},
      { params: { id:"2"}},
      { params: { id:"3"}},
      { params: { id:"4"}},
      { params: { id:"5"}}
    ],
    fallback: true // false or 'blocking'
  };
}

export const getStaticProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/posts/"+context.params.id+"",{
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
     });
     const data = await res.json();
    return {
      props :{
        posts:data
      }
    }
  }
