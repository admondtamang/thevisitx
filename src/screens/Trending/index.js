import React from "react";
import { FlatList } from "react-native";

import LargeArticle from "../../components/LargeArticle";
import SkeletonArticle from "../../components/Skeleton/SkeletonArticle";
import useFetchInfinite from "../../components/UseFetchInfinite";

export default function Trending() {
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=10&orderby=date&order=desc&page=";
    const { response, error, isLoading, refreshing, loadingMore } = useFetchInfinite(url);
    const renderItem = ({ item }) => <LargeArticle item={item} />;
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];

    if (isLoading) {
        return <SkeletonArticle />;
    }
    return <FlatList data={response} renderItem={renderItem} keyExtractor={(item) => item.id} />;
}
