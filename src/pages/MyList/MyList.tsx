import React from "react";
import { FormattedMessage } from "react-intl";
import useGetRatedMovies from "../../hooks/apiCalls/useGetRatedMovies";
import useSession from "../../hooks/apiCalls/useSession";

const MyList: React.FC = () => {
  const session = useSession();
  console.log(session.data);

  const { data } = useGetRatedMovies({
    sessionId: session.data?.guest_session_id,
  });

  return (
    <p>
      <FormattedMessage id='myList.title' />
    </p>
  );
};

export default MyList;
