export default function DashboardPage({ posts }: any) {
  console.log("hell", posts)
  return <h2>hello dashboard</h2>;
}


export async function getStaticProps() {
  console.log("hell-1")

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const posts = await res.json();
  
  return {
    props: {
      posts,
    },
  };
}
