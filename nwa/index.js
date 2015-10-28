
/**
 * Bang
 * @date Created on 2015-10-28;
 * @author YuHui(语晖)<yuhuidev@gmail.com>
 *
 */
'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	ListView,
	TabBarIOS,
	NavigatorIOS ,
	TouchableHighlight,
	Text,
	View,
} = React;

var nwa = React.createClass({
	getInitialState:function () {
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false
		}
	},
	componentDidMount: function() {
		this.renderCategory();
	},
	renderCategory: function() {
		fetch('http://0.0.0.0:3000/api/Categories')
			.then((res) => res.json()).then((res) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(res),
					loaded: true,
				});
			}).done();
	},
	render: function() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
				<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				style={styles.listView}
				/>
				);
	},

	renderLoadingView: function() {
		return (
				<View style={styles.container}>
				<Text>
				Loading data...
				</Text>
				</View>
				);
	},

	renderRow: function(row) {
		return (
				<TouchableHighlight activeOpacity={.9}
				underlayColor='darkslateblue'
				onPress={
					()=>{
						this.props.navigator.push({
							'title': row.categoryname,
							component:React.createClass({
								render:function () {
									return (<View style={styles.view}><Text>
											{row.categoryname}
											</Text></View>)
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
	},
});

var styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderBottomWidth:1,
		borderBottomColor:'#f5f5f5',
		padding:10
	},
	listView: {
		paddingTop: 70,
	},
	title:{
		fontSize: 14,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

module.exports = nwa;
