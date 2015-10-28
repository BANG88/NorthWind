'use strict';

var React = require('react-native');
var app = require('./app/views/category.js');
var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;
var {
	AppRegistry,
	StyleSheet,
	ListView,
	NavigatorIOS ,
	StatusBarIOS,
	Text,
	View,
} = React;

var menus = [
{
	name:'Category',
	iconName:'material|album',
	selectedIconName:'material|album',
	iconSize:24,
	title:'所有分类',
	component: app,
},
{
	name:'Products',
	iconName:'material|book',
	selectedIconName:'material|book',
	iconSize:24,
	title:'商品列表',
	component: app,
},

{
	name:'Customers',
	iconName:'material|accounts',
	selectedIconName:'material|accounts',
	iconSize:24,
	title:'客户',
	component: app,
},
{
	name:'Account',
	iconName:'material|account',
	selectedIconName:'material|account',
	iconSize:24,
	title:'账号管理',
	component: app,
}];

var commonColor={
	tintColor:'#c1d82f',
	barTintColor:'#000'
}

StatusBarIOS.setStyle('light-content',true);

var nwa = React.createClass({
	getInitialState:function(){
		return {
			selectedTab:menus[0]['title']
		}
	},
	render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={commonColor.tintColor}
        barTintColor={commonColor.barTintColor}>
				{
					menus.map((menu)=>{

      return  <TabBarItemIOS
          {...menu} key={menu.title}
					style={styles.item}
          selected={this.state.selectedTab === menu.title}
          onPress={() => {
            this.setState({
              selectedTab: menu.title,
            });
          }}>
          {this._renderContent(menu)}
        </TabBarItemIOS>

			})
			}
      </TabBarIOS>
    );
  },
	_renderContent:function (menu) {
		return (
			<NavigatorIOS
			tintColor={commonColor.tintColor}
			titleTextColor={commonColor.tintColor}
			barTintColor={commonColor.barTintColor}

			 style={styles.navigator} initialRoute={{...menu}} />
		)
	}
})
var styles = StyleSheet.create({
	navigator:{
		flex:1
	},
	item:{
		color:commonColor.tintColor
	}
})

module.exports = nwa;
