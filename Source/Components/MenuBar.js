import React from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Text,
  View,
} from 'native-base';
import {connect} from 'react-redux';
import {StyleSheet, Dimensions} from 'react-native';

const MenuBar = ({data, onChangeTab}) => {
  return (
    <View>
      <Tabs
        onChangeTab={onChangeTab}
        renderTabBar={() => <ScrollableTab style={styles.tab} />}
        tabBarUnderlineStyle={styles.headerView}>
        {data.map((element, index) => {
          return (
            <Tab
              heading={element.name}
              key={index.toString()}
              tabStyle={styles.tab}
              activeTabStyle={styles.tab}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}
            />
          );
        })}
      </Tabs>
    </View>
  );
};

const mapStateToProps = state => ({
  ...state.listReducer,
});
const {height, width} = Dimensions.get('window');
export default connect(mapStateToProps)(MenuBar);
const styles = StyleSheet.create({
  headerView: {backgroundColor: '#ffffff'},
  header: {backgroundColor: 'rgb(70,38,121)'},
  tab: {backgroundColor: 'rgb(46,26,86)'},
  tabText: {color: '#ffffff'},
});
