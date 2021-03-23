import { useEffect, useState } from "react";
import axios from "axios";
import { ToastAndroid } from "react-native";

const useFetchInfinite = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios(url + page);

                setResponse(page === 1 ? res.data : [...response, ...res.data]);
                setPage((prev) => page + 1);
                // setResponse([...response, ...res.data]);
                setIsLoading(false);
                setRefreshing(false);
                setLoadMore(false);
                // ToastAndroid.show("hello");
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
