import { useQuery, gql } from "@apollo/client";

interface Jobs {
  id: number;
  title: string;
  company: {
    logoUrl: string;
  };
}

interface JobsResult {
  jobs: Jobs[];
}

const JOB_LIST = gql`
  query {
    jobs {
      id
      title
      company {
        logoUrl
      }
    }
  }
`;

export const useJobsData = () => {
  const { loading, error, data } = useQuery<JobsResult>(JOB_LIST);

  return { loading, error, data };
};
