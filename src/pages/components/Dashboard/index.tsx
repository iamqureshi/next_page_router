export default function DashboardPage(props: { posts: any }) {
  console.log("from Dashboard Page", props.posts);

  return <h2>hello dashboard</h2>;
}

export async function getStaticProps() {
  console.log("from getStaticProps from dashboard page");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
