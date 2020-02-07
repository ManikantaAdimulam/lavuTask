import React from "react";
import { Tab, Tabs, ScrollableTab, View } from "native-base";
import { connect } from "react-redux";
import { StyleSheet, Dimensions } from "react-native";
import { MenuList } from "./MenuList";

const MenuBar = ({ onChangeTab, menuGroup, categories }) => {
  return (
    <View style={styles.container}>
      <Tabs
        onChangeTab={onChangeTab}
        renderTabBar={() => <ScrollableTab style={styles.tab} />}
        tabBarUnderlineStyle={styles.headerView}
        tabContainerStyle={styles.container}
      >
        {menuGroup.map((element, index) => {
          return (
            <Tab
              heading={element}
              key={index.toString()}
              tabStyle={styles.tab}
              activeTabStyle={styles.tab}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}
            >
              <View style={styles.menuList}>
                <MenuList data={categories[index]} />
              </View>
            </Tab>
          );
        })}
      </Tabs>
    </View>
  );
};

const mapStateToProps = state => ({
  ...state.listReducer
});

export default connect(mapStateToProps)(MenuBar);

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#ffffff"
  },
  header: {
    backgroundColor: "rgb(70,38,121)"
  },
  tab: {
    backgroundColor: "rgb(46,26,86)"
  },
  tabText: {
    color: "#ffffff"
  },
  menuList: {
    flex: 1
  },
  container: {
    flex: 1
  }
});
