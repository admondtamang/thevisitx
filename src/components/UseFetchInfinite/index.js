import { useEffect, useState } from "react";
import axios from "axios";

const useFetchInfinite = (url, page) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios(url + page);

                setResponse(page === 1 ? res.data : [...response, ...res.data]);
                // setResponse([...response, ...res.data]);
                setIsLoading(false);
                setRefreshing(false);
                setLoadMore(false);
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        };
        fetchData();
    }, [url, page]);
    return { response, error, isLoading, refreshing, loadMore };
};

export default useFetchInfinite;
