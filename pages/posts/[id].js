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
    const res = await fetch("api/posts/"+context.params.id+"",{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer api-token',
      },
     });
     const data = await res.json();
    return {
      props :{
        posts:data
      }
    }
  }
