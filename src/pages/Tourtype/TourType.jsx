import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
export default function TourType({ tourType }) {
  //   const [categories, setCategoris] = useState([]);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleParams = () => {
    // console.log("clicked");
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      //   console.log(currentQuery);
    }
    const newQuery = { ...currentQuery, category: tourType };
    const url = queryString.stringifyUrl({
      url: "/all-packages",
      query: newQuery,
    });
    navigate(url);
  };

  return (
    <div
      onClick={handleParams}
      className="bg-green-800 text-slate-50 font-semibold px-6 py-2 rounded-lg hover:bg-green-950"
    >
      <button>{tourType}</button>
    </div>
  );
}
