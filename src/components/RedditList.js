import React from "react";
import { Button, Dimensions, FlatList, ScrollView, Text, View } from "react-native";

import Reddit from "./Reddit";

const RedditList = ({ name, reddits, navigation }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            backgroundColor: "black",
            paddingVertical: 2,
            color: "white",
          }}
        >
          r/pics/{name}
        </Text>

        {/* <Text style={tw("text-green-500 text-4xl")}>Lista de Reddits</Text> */}
        {/* <ScrollView>
          <View style={tw("flex-1")}>
            {reddit.data.children.map((child) => (
              <Reddit data={child.data} />
            ))}
          </View>
        </ScrollView> */}
        {/* <Button title="Go to" onPress={() => navigation.navigate("Test")} /> */}
        <FlatList
          data={reddits.data?.children}
          contentContainerStyle={{ paddingBottom: 70 }}
          renderItem={({ item }) => <Reddit data={item.data} navigation={navigation} />}
        />
      </View>
    </>
  );
};

export default RedditList;
