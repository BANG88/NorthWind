'use strict';

import React from 'react-native';
import app from './app/views/category.js';
import Product  from  './app/views/products.js';
import Customer  from  './app/views/customers.js';
import Map  from  './app/views/map.js';
import style  from  './app/style.js';
let {styles, common} = style;


let { TabBarIOS, } = require('react-native-icons');
let TabBarItemIOS = TabBarIOS.Item;
let  {
	AppRegistry,
	StyleSheet,
	ListView,
	NavigatorIOS ,
	StatusBarIOS,
	Text,
	View,
} = React;
let menus = [
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
		component: Product,
	},

	{
		name:'Customers',
		iconName:'material|accounts',
		selectedIconName:'material|accounts',
		iconSize:24,
		title:'客户',
		component: Customer,
	},
	{
		name:'Account',
		iconName:'material|account',
		selectedIconName:'material|account',
		iconSize:24,
		title:'用户分布',
		component: Map,
	}];

	StatusBarIOS.setStyle('light-content',true);

	class Nwa extends React.Component{

		constructor(props){
			super(props);

			this.state = {

				selectedTab:menus[0]['title']
			}
		}





		render() {
			return (
				<TabBarIOS
				selectedTab={this.state.selectedTab}
				tintColor={common.tintColor}
				barTintColor={common.barTintColor}>
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
		}
		_renderContent(menu) {
			return (
				<NavigatorIOS
				tintColor={common.tintColor}
				titleTextColor={common.tintColor}
				barTintColor={common.barTintColor}
				style={styles.navigator} initialRoute={{...menu}} />
			)
		}
	}

	export default Nwa;
