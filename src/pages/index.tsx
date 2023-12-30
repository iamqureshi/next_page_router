import DashboardPage from "./components/Dashboard";

export default function index(props: any) {
  return (
    <>
      <DashboardPage repo={props.repo} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();
  console.log(repo)
  return { props: { repo } };
};
