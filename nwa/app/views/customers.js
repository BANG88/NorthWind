import React from 'react-native';
import style from '../style.js';
import request from '../api.js';

let {ListView,View,Text} = React;

let {styles,common} = style;

class Customer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dataSource:new ListView.DataSource({
				rowHasChanged:(r1,r2) => {
					return r1 !== r2
				}}),
				loaded :false
		}
	}
	componentDidMount(){
		request.get('customers').end((err,res)=>{
			if(res.ok){
				this.setState({
					dataSource:this.state.dataSource.cloneWithRows(res.body),
					loaded:true
				})
			}
		})
	}

	render(){
		if(!this.state.loaded){
			return <View><Text>loading</Text></View>
		}
		return (<ListView
						style={styles.listView}
						dataSource={this.state.dataSource}
						contentInset={{bottom:49}}
						automaticallyAdjustContentInsets={false}
						showsVerticalScrollIndicator={false}
						renderRow={this._renderRow.bind(this)}/>)
	}
	_renderRow(row){
		return <View style={styles.row}><Text>{row.address}</Text></View>
	}


}

export default Customer;
