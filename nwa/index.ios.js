'use strict';

var React = require('react-native');
var app = require('./index.js');
var {TabBarIOS} = require('react-native-icons');

var {
	AppRegistry,
	StyleSheet,
	ListView,
	NavigatorIOS ,
	Text,
	View,
} = React;

var menus = [
{
	name:'Category',
	iconName:'material|album',
	selectedIconName:'material|album',
	iconSize:24,
	title:'Category',
	view: app,
},
{
	name:'Products',
	iconName:'material|book',
	selectedIconName:'material|book',
	iconSize:24,
	title:'Products',
	view: app,
},

{
	name:'Customers',
	iconName:'material|accounts',
	selectedIconName:'material|accounts',
	iconSize:24,
	title:'Customers',
	view: app,
},
{
	name:'Account',
	iconName:'material|account',
	selectedIconName:'material|account',
	iconSize:24,
	title:'Account',
	view: app,
}];
var App = React.createClass({
	getInitialState:function(){
		return {
			selectedTab:'Category'
		}
	},
	render:function(){
		return (<TabBarIOS tintColor="white" barTintColor="darkSlateBlue">
				{
					menus.map((m)=>{
						return (<TabBarIOS.Item  key={m.title}
								{...m}
								selected={this.state.selectedTap === m.title}
								onPress={()=>{
									this.renderScene(m)
								}}>
								<NavigatorIOS
							 	style={{'flex':1}}
								translucent={true}
								initialRoute={{
									component:m.view,
									title:m.title
								}} />
								</TabBarIOS.Item>)
					})
				}
				</TabBarIOS>)
	},
	renderScene:function (tabBar) {
		this.setState({
			selectedTab: tabBar.title
		});
	}
})

AppRegistry.registerComponent('nwa', () => App);
