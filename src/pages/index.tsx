import DashboardPage from "./components/Dashboard";

export default function index({repo}:any) {
  return (
    <>
      <DashboardPage repo={repo} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/getClients");
  const repo = await res.json();
  return { props: { repo } };
};