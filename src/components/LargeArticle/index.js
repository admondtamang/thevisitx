import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
export default function LargeArticle() {
    return (
        <TouchableOpacity onPress={() => console.log("hel")} style={{ backgroundColor: "white", padding: 10 }}>
            <Title style={{ fontWeight: "800" }}>Joker</Title>

            <Subheading style={{ fontWeight: "400", color: "grey", textAlign: "justify" }}>
                Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay
                with Scott Silver. The film, based on ...
            </Subheading>
            <Text>Hello - dklas - dsfsd - dsa</Text>

            <Card style={{ marginVertical: 5 }}>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={{ borderRadius: 10 }} />
            </Card>
            <Text style={{ color: "grey" }}>Nov 3 . 10 min read</Text>
        </TouchableOpacity>
    );
}
