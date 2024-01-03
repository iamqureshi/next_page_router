export default function ClientPage({ repo }: any) {
  return (
    <>
      <h2>Client ID : {repo.id}</h2>
      <h2>Title: {repo.title}</h2>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();
  
  const paths = repo.map((item: any) => ({
    params: { clientID: String(item.id) },
  }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context: any) => {
  const clientID = context.params.clientID;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${clientID}`
  );
  const repo = await res.json();
  return { props: { repo } };
};
