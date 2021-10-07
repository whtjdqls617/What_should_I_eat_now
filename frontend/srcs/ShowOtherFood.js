import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ShowOtherOptions } from "./ShowOtherOptions";
import { WebView } from "react-native-webview";

export const ShowOtherFood = ({ navigation }) => {
  const data = [
    ["카레", "https://reactjs.org/logo-og.png"],
    ["덮밥", "https://reactjs.org/logo-og.png"],
    ["라면", "https://reactjs.org/logo-og.png"],
  ];

  //받아온 데이터 형식을 유용하게 바꿔주기

  return (
    <View style={styles.container}>
      <Text style={styles.select}>골라볼래?</Text>
      <View style={styles.image1Row}>
        <ShowOtherOptions data={data} navigation={navigation} />
      </View>
      <View style={styles.foodnameRow}>
        <Text style={styles.foodname1}>{data[0][0]}</Text>
        <Text style={styles.foodname2}>{data[1][0]}</Text>
        <Text style={styles.foodname3}>{data[2][0]}</Text>
      </View>
      <Text style={styles.youtube}>유튜브 먹방</Text>
      <WebView
        // source={{ html: "<h1>Hello world</h1>" }}
        style={{
          width: "75%",
          justifyContent: "center",
          marginBottom: 50,
          marginLeft: 50,
          marginTop: 30,
        }}
        mixedContentMode="never"
        source={{
          uri: "https://reactnative.dev/",
        }}
        useWebKit={true} // ios 필수
        scrollEnabled={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foodname1: {
    color: "#121212",
    height: 24,
    width: 88,
  },
  foodname2: {
    color: "#121212",
    height: 24,
    width: 88,
    marginLeft: 21,
  },
  foodname3: {
    color: "#121212",
    height: 24,
    width: 88,
    marginLeft: 23,
  },
  foodnameRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 34,
    marginRight: 33,
    justifyContent: "space-around",
  },
  select: {
    color: "#121212",
    fontSize: 56,
    marginTop: 40,
    marginLeft: 9,
  },
  youtube: {
    color: "#121212",
    fontSize: 30,
    marginTop: 40,
    marginLeft: 25,
  },
  image1: {
    width: 96,
    height: 96,
  },
  image2: {
    width: 96,
    height: 96,
    marginLeft: 18,
  },
  image3: {
    width: 96,
    height: 96,
    marginLeft: 19,
  },
  image1Row: {
    height: 96,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 25,
    justifyContent: "space-around",
  },
});