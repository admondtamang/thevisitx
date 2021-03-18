import React from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import { Title } from "react-native-paper";
import Article from "../Article";
import useFetch from "../UseFetch";

export default function RealtedPosts() {
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc&page=";
    const { response, error, isLoading } = useFetch(url + 1);
    const renderItem = ({ item }) => <Article item={item} RealtedPosts />;

    if (isLoading) {
        return <Text>Loading</Text>;
    }
    return (
        <FlatList
            data={response}
            ListHeaderComponent={() => <Title>Related Article</Title>}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}
