import React from "react";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";
import LargeArticle from "../../LargeArticle";

export default function LargeArticleContainer() {
    const renderItem = ({ item }) => <LargeArticle item={item} />;
    return (
        <View>
            <Title>Large Container</Title>

            <FlatList data={response} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
    );
}
