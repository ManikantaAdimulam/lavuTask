import React from 'react';
import {
  View,
  FlatList,
  Text,
  SectionList,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import MenuItem from './MenuItem';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

export const MenuList = ({data, reference}) => {
  const newArray = data.map((item, index) => {
    return {title: item.name, data: item.categories};
  });

  const getItemLayout = sectionListGetItemLayout({
    // The height of the row with rowData at the given sectionIndex and rowIndex
    getItemHeight: (rowData, sectionIndex, rowIndex) =>
      sectionIndex === 0 ? 100 : 50,

    // These four properties are optional
    getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators
    getSectionHeaderHeight: () => 20, // The height of your section headers
    getSectionFooterHeight: () => 10, // The height of your section footers
    listHeaderHeight: 40, // The height of your list header
  });

  return (
    <View style={{flex: 1}}>
      <SectionList
        sections={newArray}
        renderItem={({item}) => {
          return renderItem(item);
        }}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        ref={reference}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

const renderItem = item => {
  return (
    <FlatList
      numColumns={2}
      data={item.items}
      renderItem={({item}) => <MenuItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#00000000',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
