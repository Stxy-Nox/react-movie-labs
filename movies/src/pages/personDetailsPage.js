import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templatePersonPage";
import { getPreson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PersonDetails from "../components/personDetails";

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: personData, error:personError, isLoading:personIsLoading, isError:personIsError } = useQuery(
    ["person", {id : id}],
    getPreson
  )

  if (personIsLoading) {
    return <Spinner />;
  }

  if (personIsError) {
    return <h1>{personError.message}</h1>;
  }

  return(
    <>
      {personData ? (
        <>
          <PageTemplate person = {personData}>
            <PersonDetails person={personData} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}    
    </>
  )
}

export default PersonPage;