import React from "react";

export default function dashboard({ repo }: any) {
  return (
    <>
      <h1>From dashboard {JSON.stringify(repo)}</h1>
    </>
  );
}

export const getServerSideProps = async () => {
    // console.log("run on server for every route request")
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const repo: any = await res.json();
  return { props: { repo } };
};
