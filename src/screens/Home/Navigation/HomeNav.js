import React from "react";
import { FlatList, Text, View } from "react-native";
import { Subheading, Title } from "react-native-paper";
import Article from "../../../components/Article";
import MyCarousel from "../../../components/Carousel";
import useFetchInfinite from "../../../components/UseFetchInfinite";
import SkeletonArticle from "../../../components/Skeleton/SkeletonArticle";
import { useTheme } from "@react-navigation/native";
import useFetch from "../../../components/UseFetch";
import Trending from "../../Trending";
export default function HomeNav() {
    const { colors } = useTheme();
    // const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=15&orderby=date&order=desc&page=";
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc&feature=true";
    const { response, error, isLoading, refreshing, loadingMore } = useFetch(url);
    const renderItem = ({ item }) => <Article item={item} />;

    function handleLoadMore() {
        loadingMore = true;
    }

    const renderFooter = () => {
        if (isLoading) {
            return (
                <>
                    <SkeletonArticle />
                    <SkeletonArticle />
                    <SkeletonArticle />
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={{ backgroundColor: colors.background, padding: 10 }}>
            <Title style={{ fontWeight: "800" }}>Discover New Things</Title>

            {/* <Subheading style={{ fontWeight: "400", color: "grey" }}>Discover new things</Subheading> */}

            <MyCarousel />

            <FlatList
                data={response}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id.toString()}
                ListFooterComponent={renderFooter}
                ListHeaderComponent={<Title style={{ fontWeight: "800" }}>New Articles</Title>}
            />

            <Trending />
        </View>
    );
}
