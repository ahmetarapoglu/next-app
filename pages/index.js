import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home(props) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="#"><a></a></Link>
    <h1>Posts</h1>
    {
      props.posts.map(item=>(
        <div key={item.id}>
           <Link  href={`posts/${item.id}`}>
              <p>{item.title}</p>
           </Link>
        </div>
      ))
    }
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts",{
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
