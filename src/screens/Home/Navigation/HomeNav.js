import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
import Article from "../../../components/Article";
import useFetch from "../../../components/UseFetch";
export default function HomeNav() {
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc&page=";
    const { response, error, isLoading } = useFetch(url + page);
    const renderItem = ({ item }) => <Article item={item} />;
    function handleLoadMore() {
        console.log("hllo");
    }

    function handleRefresh() {
        setPage(1);
    }

    const renderFooter = () => {
        if (isLoading) {
            return <Text>Loading...</Text>;
        } else {
            return null;
        }
    };

    return (
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <Title style={{ fontWeight: "800" }}>Breaking News</Title>

            <Subheading style={{ fontWeight: "400", color: "grey" }}>Discover new things</Subheading>

            <Card>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={{ borderRadius: 10 }} />
            </Card>

            <View style={{ marginTop: 10 }}>
                <Title style={{ fontWeight: "800" }}>Highlights</Title>
                {isLoading ? (
                    <Text>Loading</Text>
                ) : (
                    <FlatList
                        data={response}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={10}
                        ListFooterComponent={this.renderFooter}
                    />
                )}
            </View>
        </View>
    );
}
