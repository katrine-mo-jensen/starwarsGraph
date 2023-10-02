import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../query/GetPersons";
import { request } from "graphql-request";

export const Main = () => {
  const { data, isLoading, error } = useQuery({
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

  if (error) {
    return <span>Error: {error.message}</span>
  }


  console.log("Data", data);
  return (
    <>
      <h1>Hello Magpie</h1>
      <section>
      <ul>
      {data.allPeople.people.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
      </section>
    </>
  );
};
