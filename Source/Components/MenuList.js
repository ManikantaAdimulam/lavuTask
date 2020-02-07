import React from "react";
import { View, FlatList, Text, SectionList, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";

export const MenuList = ({ data, reference }) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          return renderItem(item);
        }}
        renderSectionHeader={renderSection}
        keyExtractor={(item, index) => index.toString()}
        ref={reference}
      />
    </View>
  );
};

const renderSection = ({ section }) => {
  return (
    <View style={styles.sectionHeaderView}>
      <Text style={styles.sectionHeader}>{section.name}</Text>
    </View>
  );
};

const renderItem = item => {
  return (
    <FlatList
      numColumns={2}
      data={item}
      renderItem={({ item }) => <MenuItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#00000000"
  },
  sectionHeaderView: {
    height: 44,
    backgroundColor: "lightgray",
    justifyContent: "center",
    padding: 8
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
