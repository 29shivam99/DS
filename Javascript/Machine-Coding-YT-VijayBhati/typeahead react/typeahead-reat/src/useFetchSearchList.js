import { useCallback, useEffect, useState } from "react";
import _ from "lodash";

const useFetchSearchList = (
  query,
  url,
  debounceDelay,
  autoComplete,
  setActiveItem
) => {
  let [searchedResults, setSearchedResults] = useState([]);

  const fetchData = useCallback(async (query, url, signal) => {
    if (!query.trim()) {
      setSearchedResults(null);
      return;
    }
    try {
      let response = await fetch(url + query, { signal });
      let data = await response.json();
      setSearchedResults(data.results);
    } catch (e) {
      console.log(e);
    }
  }, []);

  let deboucedFetch = useCallback(_.debounce(fetchData, debounceDelay), [
    fetchData,
  ]);

  useEffect(() => {
    if (!autoComplete) return;
    let controller = new AbortController();

    deboucedFetch(query, url, controller.signal);
    return () => {
      controller.abort();
    };
  }, [autoComplete, deboucedFetch, query, url]);

  return searchedResults;
};

export default useFetchSearchList;
