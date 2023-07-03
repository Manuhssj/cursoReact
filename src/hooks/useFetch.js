import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true
    });

    try {
      
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      const data = await resp.json();

      setState({
        data: data,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: error
      });
    }
  };

  useEffect(() => {
    if (url) {
      getFetch();
    }
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  };
};
