import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import { Card, Body, View } from "native-base";

const MenuItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Body>
        <View style={styles.bodyContainer}>
          <View style={styles.body}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.cal}>123 cal</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image
              source={{
                uri: `https://dummyimage.com/200x300?text=${item.name}`
              }}
              style={styles.image}
            />
          </View>
        </View>
      </Body>
    </Card>
  );
};

export default MenuItem;

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  card: {
    width: width * 0.35,
    height: height * 0.2,
    overflow: "hidden",
    borderRadius: 10
  },
  itemName: {
    fontSize: 18,
    fontWeight: "800"
  },
  price: {
    fontSize: 14,
    fontWeight: "600"
  },
  cal: {
    fontSize: 14,
    color: "#00000090",
    fontWeight: "600",
    marginLeft: 10
  },
  body: {
    height: height * 0.18,
    width: width * 0.22,
    justifyContent: "space-between",
    padding: 8
  },
  bodyContainer: {
    flexDirection: "row",
    overflow: "hidden"
  },
  textContainer: {
    flexDirection: "row"
  },
  image: {
    height: height * 0.2,
    width: width * 0.13
  }
});
