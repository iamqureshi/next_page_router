export default function DashboardPage({ posts }: any) {
  console.log(posts, "---");
  return <h2>hello dashboard</h2>;
}

export async function getServerSideProps() {
  console.log("---, FROM");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
