import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../query/GetPersons";
import { request } from "graphql-request";

export const Main = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStarwarsPerson"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getPersons
      ),
  });

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }


  console.log("Data", data);
  return (
    <>
      <h1>Hello Magpie</h1>
      <section>
      <ul>
      {data?.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
      </section>
    </>
  );
};
