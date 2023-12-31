
export default function DashboardPage(props:any) {
  return (
    <>
      <h1>This is Data {JSON.stringify(props.repo)}</h1>
    </>
  );
}