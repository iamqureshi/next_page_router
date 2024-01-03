import DashboardTable from "./components/Dashboard/DashboardTable/DashboardTable";

export default function index(data: any) {
  const result = data.data;

  return (
    <>
      <DashboardTable clients={result} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data } };
};
