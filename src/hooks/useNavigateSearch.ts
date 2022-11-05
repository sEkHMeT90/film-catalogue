import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: string, params: any) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

export default useNavigateSearch;
