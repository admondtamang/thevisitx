import React from "react";
import { FlatList } from "react-native";

import LargeArticle from "../../components/LargeArticle";
import SkeletonLargeArticle from "../../components/Skeleton/SkeletonLargeArticle";
import useFetchInfinite from "../../components/UseFetchInfinite";

export default function Trending() {
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=10&orderby=date&order=desc&page=";
    const { response, error, isLoading, refreshing, loadingMore } = useFetchInfinite(url);
    const renderItem = ({ item }) => <LargeArticle item={item} />;

    if (isLoading) {
        return (
            <>
                <SkeletonLargeArticle />
                <SkeletonLargeArticle />
                <SkeletonLargeArticle />
            </>
        );
    }
    return <FlatList data={response} renderItem={renderItem} keyExtractor={(item) => item.id} />;
}
