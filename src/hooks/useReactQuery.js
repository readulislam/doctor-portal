import { useQuery } from "react-query";
import { BaseUrl } from "../APi/api";

const useReactQuery = (info, url) => {
  const Filtering = () => {
    const data = useQuery("filter", () =>
      fetch(`${url}`, {
        params: { ...info },
      }).then((res) => res.json())
    );
    return data;
  };

  return {
    Filtering,
  };
};

export default useReactQuery;
