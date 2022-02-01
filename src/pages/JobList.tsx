import React from "react";
import { useJobsData } from "../hooks/useJobsData";

const JobList: React.FC = () => {
  const { loading, error, data } = useJobsData();

  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Graphql Jobs</h1>
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        data.jobs.map(({ id, title, company }) => (
          <div key={id}>
            <img src={company.logoUrl} alt={company.logoUrl} />
            <p>{title}</p>
          </div>
        ))
      )}
    </>
  );
};

export default JobList;
