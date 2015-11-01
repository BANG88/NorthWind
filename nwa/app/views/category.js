
/**
 * Bang
 * @date Created on 2015-10-28;
 * @author YuHui(语晖)<yuhuidev@gmail.com>
 */
'use strict';

import React from 'react-native';
import Product from './products.js';
import style from '../style.js';
import request from '../api.js';


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
		request.get('Categories')
		.end((err,res) => {
			if(res.ok){

				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(res.body),
					loaded: true,
				});
			}
		})
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

}

export default Category;
