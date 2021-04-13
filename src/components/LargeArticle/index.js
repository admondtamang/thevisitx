import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React from "react";
import { Text } from "react-native";
import { Card, Title } from "react-native-paper";
import HTML from "react-native-render-html";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import styled from "styled-components/native";

export default function LargeArticle({ item }) {
    // Hooks
    const contentWidth = useWindowDimensions().width;
    const navigation = useNavigation();

    const { title, content, excerpt, jetpack_featured_media_url, date, slug } = item;

    // Converted date
    let post_date = moment(date).format("MMM DD") + " . " + moment(date).fromNow();

    const onPress = () => {
        navigation.navigate("ArticleDetail", {
            title,
            slug,
        });
    };

    const Conatiner = styled.TouchableOpacity`
        border-width: 1px;
        border-color: #e5e5e5;
        padding: 10px;
        margin: 10px 0;
        border-radius: 10px;
    `;
    return (
        <Conatiner onPress={onPress}>
            <Title style={{ fontWeight: "bold" }}>{title.rendered}</Title>

            <HTML source={{ html: excerpt.rendered.replace("[&hellip;]", "...") }} contentWidth={contentWidth} />
            <Card style={{ marginVertical: 5 }}>
                <Card.Cover source={{ uri: jetpack_featured_media_url }} style={{ borderRadius: 10 }} />
            </Card>
            <Text style={{ color: "grey", paddingTop: 5 }}>{post_date}</Text>
        </Conatiner>
    );
}
