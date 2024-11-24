import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templatePersonPage";
import { getPreson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PersonDetails from "../components/personDetails";

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", {id : id}],
    getPreson
  )

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return(
    <>
      {person ? (
        <>
          <PageTemplate person = {person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}    
    </>
  )
}

export default PersonPage;