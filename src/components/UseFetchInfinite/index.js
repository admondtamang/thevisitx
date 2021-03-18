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
                const res = await axios(url);
                console.error(res.data);
                setResponse([...response, res.data]);
                setIsLoading(false);
                setRefreshing(false);
                setLoadMore(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { response, error, isLoading, refreshing, loadMore };
};

export default useFetchInfinite;
