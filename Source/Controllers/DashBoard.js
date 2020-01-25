import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, InteractionManager} from 'react-native';
import {connect} from 'react-redux';
import MenuItem from '../Components/MenuItem';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Card,
  Text,
  CardItem,
  Body,
} from 'native-base';
import {NetworkManager} from '../Network/Network';
import {APIConstants} from '../Network/APIConstants';
import MenuBar from '../Components/MenuBar';
import {storeMenu} from '../Redux/Actions/Actions';
import {MenuList} from '../Components/MenuList';

export class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.sectionListRef = this.sectionListRef.bind(this);
  }
  componentDidMount() {
    NetworkManager.request(APIConstants.menu)
      .then(response => {
        const {dispatch} = this.props;
        dispatch(storeMenu(response));
      })
      .catch(error => {
        console.log('APIError', error);
      });
  }

  changeTab = data => {
    setTimeout(() => {
      this.sectionList.scrollToLocation({sectionIndex: data.i, itemIndex: 0});
    }, 150);
  };

  sectionListRef = ref => {
    this.sectionList = ref;
  };

  render() {
    const {data} = this.props;
    return (
      <Container>
        <View style={styles.headerView}>
          <Header hasTabs style={styles.header}></Header>
          <Tabs
            renderTabBar={() => <ScrollableTab style={styles.tab} />}
            tabContainerStyle={styles.tab}
            tabBarBackgroundColor={'red'}
            tabContainerStyle={styles.tab}
            tabBarUnderlineStyle={{backgroundColor: '#ffffff'}}
            tabBarActiveTextColor={'#ffffff'}
            tabBarInactiveTextColor={'#ffffff'}>
            <Tab
              heading="MEALS"
              activeTabStyle={styles.tab}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}
              tabStyle={styles.tab}>
              <MenuBar onChangeTab={this.changeTab} />
            </Tab>
            <Tab
              heading="DRINKS"
              tabStyle={styles.tab}
              activeTabStyle={styles.tab}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}></Tab>
            <Tab
              heading="SIDES"
              tabStyle={styles.tab}
              activeTabStyle={styles.tab}
              textStyle={styles.tabText}
              activeTextStyle={styles.tabText}></Tab>
          </Tabs>
        </View>
        <View style={styles.menuList}>
          <MenuList data={data} reference={this.sectionListRef} />
          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.yourOrder}>Your Order</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.notYours}>Not yours?</Text>
                  <Text style={styles.startOver}>Start Over</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem bordered footer>
              <Text style={styles.footerText}>
                Add items to your order& They will show up here.
              </Text>
            </CardItem>
          </Card>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({...state.listReducer});
const {height, width} = Dimensions.get('window');
export default connect(mapStateToProps)(DashBoard);

const styles = StyleSheet.create({
  headerView: {height: height * 0.25, backgroundColor: 'rgb(70,38,121)'},
  header: {backgroundColor: 'rgb(70,38,121)'},
  tab: {backgroundColor: 'rgb(70,38,121)'},
  tabText: {color: '#ffffff'},
  menuList: {flex: 1, flexDirection: 'row'},
  card: {
    width: width * 0.25,
    height: height * 0.2,
    marginRight: 15,
    top: -height * 0.06,
  },
  yourOrder: {fontSize: 24, fontWeight: 'bold'},
  notYours: {
    paddingLeft: 8,
    paddingTop: 4,
    fontSize: 18,
    color: '#00000090',
  },
  startOver: {
    paddingLeft: 8,
    paddingTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  footerText: {color: '#00000090'},
});
