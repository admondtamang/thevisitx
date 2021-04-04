import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Title } from "react-native-paper";

import LargeArticle from "../../components/LargeArticle";
import SkeletonLargeArticle from "../../components/Skeleton/SkeletonLargeArticle";
import useFetchInfinite from "../../components/UseFetchInfinite";

export default function Trending() {
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc&page=";
    const { response, error, isLoading, refreshing, loadingMore } = useFetchInfinite(url);
    const renderItem = ({ item }) => <LargeArticle item={item} />;
    const renderFooter = () => {
        if (isLoading) {
            return (
                <>
                    <SkeletonLargeArticle />
                    <SkeletonLargeArticle />
                    <SkeletonLargeArticle />
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <FlatList
                data={response}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={renderFooter}
                ListHeaderComponent={<Title style={{ fontWeight: "bold", margin: 20 }}>Highlights</Title>}
            />
        </SafeAreaView>
    );
}
