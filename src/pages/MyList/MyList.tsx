import React, { useState } from "react";
import useGetRatedMovies from "../../hooks/apiCalls/useGetRatedMovies";
import useSession from "../../hooks/apiCalls/useSession";
import { Container } from "@mui/material";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";

const MyList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const session = useSession();

  const { data, isLoading, isError } = useGetRatedMovies({
    sessionId: session.data?.guest_session_id,
  });

  //TODO: Investigar porque el getRatedMovies no devuelve resultados
  return (
    <Container maxWidth='xl'>
      <Title titleTag='myList.title' />
      <MainContent
        isLoading={isLoading}
        isError={isError}
        isEmptyData={!data?.results || data?.total_results === 0}
      >
        <FilmsContainer
          data={data}
          page={page}
          setPage={setPage}
        ></FilmsContainer>
      </MainContent>
    </Container>
  );
};

export default MyList;
