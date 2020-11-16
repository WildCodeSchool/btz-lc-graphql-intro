import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Row, Spinner } from 'reactstrap';

import './App.css';
import Job from './Job';

const GERMAN_JOBS = gql`
  query GERMAN_JOBS($country: String!) {
    country(input: { slug: $country }) {
      jobs {
        id
        title
        description
        applyUrl
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GERMAN_JOBS, {
    variables: {
      country: 'germany',
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Row>
        {data.country.jobs.map((job) => {
          return (
            <Job desc={job.description} applyUrl={job.applyUrl} title={job.title} key={job.id} location={job.locationNames} />
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
