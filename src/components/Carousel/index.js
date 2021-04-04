import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
const { width } = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    padding: 20px 0;
    margin-bottom: 20px;
`;

const styles = {
    slide: {
        flex: 1,
        borderRadius: 2,
        justifyContent: "center",
        backgroundColor: "transparent",
    },

    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB",
    },

    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5",
    },

    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9",
    },

    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },

    image: {
        width,
        flex: 1,
    },
};

export default function MyCarousel() {
    const data = [
        {
            title: "Biyard",
            subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
            illustration: "https://imgur.com/47NrpDQ.jpg",
        },
        {
            title: "Earlier this morning, NYC",
            subtitle: "Lorem ipsum dolor sit amet",
            illustration: "https://imgur.com/aEsf5Gj.jpg",
        },
        {
            title: "White Pocket Sunset",
            subtitle: "Lorem ipsum dolor sit amet et nuncat ",
            illustration: "https://imgur.com/LDl9Aki.jpg",
        },
        {
            title: "Acrocorinth, Greece",
            subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
            illustration: "https://imgur.com/tH30Ekv.jpg",
        },
        {
            title: "The lone tree, majestic landscape of New Zealand",
            subtitle: "Lorem ipsum dolor sit amet",
            illustration: "https://imgur.com/whdyG3i.jpg",
        },
    ];
    return (
        <Container>
            <Swiper
                height={240}
                onMomentumScrollEnd={(e, state, context) => console.log("index:", state.index)}
                dot={
                    <View
                        style={{
                            backgroundColor: "rgba(0,0,0,.2)",
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: "#000",
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}
                    />
                }
                paginationStyle={{
                    bottom: -23,
                    left: null,
                    right: 10,
                }}
                loop
            >
                {data.map((item) => (
                    <View style={styles.slide} title={<Text numberOfLines={1}>{item.title}</Text>}>
                        <Image resizeMode="stretch" style={styles.image} source={{ uri: item.illustration }} />
                    </View>
                ))}
            </Swiper>
        </Container>
    );
}
