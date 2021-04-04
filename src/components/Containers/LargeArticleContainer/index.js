import React from "react";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";
import LargeArticle from "../../LargeArticle";
import SkeletonLargeArticle from "../../Skeleton/SkeletonLargeArticle";

export default function LargeArticleContainer() {
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
        <View>
            <Title>Large Container</Title>
            <FlatList
                data={response}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={renderFooter}
                ListHeaderComponent={<Title style={{ fontWeight: "800", margin: 20 }}>Highlights</Title>}
            />
        </View>
    );
}
