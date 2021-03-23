import React from "react";
import { View, Text, ScrollView, Image, useWindowDimensions, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import HTML from "react-native-render-html";
import RealtedPosts from "../../components/RelatedPosts";
import SkeletonArticleDetail from "../../components/Skeleton/SkeletonArticleDetail";
import useFetch from "../../components/UseFetch";

export default function ArticleDetail({ route }) {
    const contentWidth = useWindowDimensions().width;

    const { response, error, isLoading } = useFetch("https://www.thevisitx.com/wp-json/wp/v2/posts?slug=" + route.params.slug);

    if (isLoading || !response) {
        return <SkeletonArticleDetail />;
    }

    const res = Object.assign({}, response);

    const { title, content, excerpt, jetpack_featured_media_url, date, slug } = res[0];

    return (
        <ScrollView style={{ padding: 10 }}>
            <Title style={styles.title}>{title.rendered}</Title>
            <Image style={styles.article__pic} source={{ uri: jetpack_featured_media_url }} />
            <HTML source={{ html: content.rendered }} contentWidth={contentWidth} />
            <RealtedPosts />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    article__pic: {
        height: 200,
        marginVertical: 5,
        borderRadius: 5,
    },
});
