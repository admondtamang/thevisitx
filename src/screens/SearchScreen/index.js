import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Searchbar, Title } from "react-native-paper";
import Article from "../../components/Article";
import SkeletonArticle from "../../components/Skeleton/SkeletonArticle";
import useFetch from "../../components/UseFetch";

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const url = "https://www.thevisitx.com/wp-json/wp/v2/posts?search=" + searchQuery + "&per_page=10";

    const { response, error, isLoading } = useFetch(url);

    const onChangeSearch = (query) => setSearchQuery(query);

    if (error) {
        return <Title>Cannot load data</Title>;
    }

    const renderItem = ({ item }) => <Article item={item} />;

    return (
        <SafeAreaView style={{ paddingTop: 20 }}>
            <StatusBar />
            <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />

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
                    ListEmptyComponent={<Text>Empty</Text>}
                />
            )}
        </SafeAreaView>
    );
};

export default SearchScreen;
