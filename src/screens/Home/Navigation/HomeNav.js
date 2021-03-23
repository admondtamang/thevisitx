import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
import Article from "../../../components/Article";
import MyCarousel from "../../../components/Carousel";
import useFetchInfinite from "../../../components/UseFetchInfinite";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import SkeletonArticle from "../../../components/Skeleton/SkeletonArticle";
export default function HomeNav() {
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=10&orderby=date&order=desc&page=";
    const { response, error, isLoading, refreshing, loadingMore } = useFetchInfinite(url);
    const renderItem = ({ item }) => <Article item={item} />;

    function handleLoadMore() {
        loadingMore = true;
    }

    const renderFooter = () => {
        if (isLoading) {
            return <SkeletonArticle />;
        } else {
            return null;
        }
    };

    return (
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <Title style={{ fontWeight: "800" }}>Breaking News</Title>

            <Subheading style={{ fontWeight: "400", color: "grey" }}>Discover new things</Subheading>

            <MyCarousel />

            <View style={{ marginTop: 10 }}>
                <Title style={{ fontWeight: "800" }}>Highlights</Title>
                {isLoading ? (
                    <>
                        <SkeletonArticle />
                        <SkeletonArticle />
                        <SkeletonArticle />
                    </>
                ) : (
                    <FlatList
                        data={response}
                        renderItem={renderItem}
                        keyExtractor={(item) => item?.id.toString()}
                        onEndReached={handleLoadMore}
                        // onRefresh={isLoading}
                        onEndReachedThreshold={0}
                        ListFooterComponent={renderFooter}
                    />
                )}
            </View>
        </View>
    );
}
