import React from 'react-native';
import {Icon,Spinner} from 'react-native-icons';

let {StyleSheet} = React;

let common={
	tintColor:'#fff',
	barTintColor:'#4527a0'
}


let styles = StyleSheet.create({
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
		marginTop: 64,
	},
	title:{
		fontSize: 14,
	},
	navigator:{
		flex:1
	},
	item:{
		color:common.tintColor
	}

})

export default {common,styles,Icon,Spinner}
