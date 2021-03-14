import React from "react";
import { FlatList, View } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
import Article from "../../../components/Article";

export default function HomeNav() {
    const renderItem = ({ item }) => <Article />;
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

    return (
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <Title style={{ fontWeight: "800" }}>Breaking News</Title>

            <Subheading style={{ fontWeight: "400", color: "grey" }}>Discover new things</Subheading>

            <Card>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={{ borderRadius: 10 }} />
            </Card>

            <View style={{ marginTop: 10 }}>
                <Title style={{ fontWeight: "800" }}>Highlights</Title>

                <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}
