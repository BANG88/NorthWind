
/**
 * Bang
 * @date Created on 2015-10-28;
 * @author YuHui(语晖)<yuhuidev@gmail.com>
 */
'use strict';

import React from 'react-native';
import Product from './products.js';
import style from '../style.js';

let {styles,common,Spinner} = style;

let {
	AppRegistry,
	StyleSheet,
	ListView,
	TabBarIOS,
	NavigatorIOS ,
	TouchableHighlight,
	Text,
	View,
} = React;

class Category extends React.Component{
	constructor(props){
		super(props);
		this.state =  {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false
		}

	}

	componentDidMount(){
		this.renderCategory()
	}


	renderCategory() {
		fetch('http://0.0.0.0:3000/api/Categories')
		.then((res) => res.json()).then((res) => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(res),
				loaded: true,
			});
		}).done();
	}
	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<ListView
			dataSource={this.state.dataSource}
			contentInset={{bottom:49}}
			automaticallyAdjustContentInsets={false}
			renderRow={this.renderRow.bind(this)}
			style={styles.listView}
			/>
		);
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
			<Spinner name='ion|load-a' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
			color='#777'/>

			<Text>
			Loading data...
				</Text>
				</View>
		);
	}

	renderRow(row) {
		return (
			<TouchableHighlight activeOpacity={.9}
			underlayColor='darkslateblue'
			onPress={
				()=>{
					this.props.navigator.push({
						'title': row.categoryname,
						component:React.createClass({
							render:function () {
								return (
									<Product {...row}></Product>
								)
							}
						})
					})
				}
			}>
			<View style={styles.row}>
			<Text style={styles.title}>{row.categoryname}</Text>
			</View>
			</TouchableHighlight>
		);
	}

}

export default Category;
