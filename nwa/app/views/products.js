/**
 * Bang
 * @date Created on 2015-10-28;
 * @author YuHui(语晖)<yuhuidev@gmail.com>
 *
 */
import React from 'react-native';
import style from '../style.js';
import request from '../api.js';
let {styles,Spinner} = style;
let {View,Text,ListView} = React;

class Product extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			dataSource:new ListView.DataSource({
				rowHasChanged:(r1,r2)=> r1 !== r2
			}),
			loaded:false
		}
	}
	componentDidMount(){
		var categoryId = this.props ? this.props.categoryid : null;
		var filter = categoryId ? '?filter[where][categoryid]='+categoryId : '';
		request.get('products'+filter).end((err,res)=>{
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(res.body),
				loaded:true
			})
		});
	}
	render(){
		if(!this.state.loaded){
			return (<View>
							<Spinner name='material|account' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
							color='#777'/>
							<Text>Loading...</Text></View>)
		}
		return (
			<ListView
			dataSource={this.state.dataSource}
			contentInset={{bottom:49}}
			initialListSize={24}
			automaticallyAdjustContentInsets={false}
			renderRow={this._renderRow}
			showsVerticalScrollIndicator={false}
			style={styles.listView}
			/>)
	}
	_renderRow(product){
		return (<View style={styles.row}>
						<Text style={styles.title}>{
							product.productname
							/*             categoryid: 1*/
							//discontinued: 1
							//productid: 1
							//productname: "Chai"
							//quantityperunit: "10 boxes x 30 bags"
							//reorderlevel: 10
							//supplierid: 8
							//unitprice: 18
							//unitsinstock: 39
							//unitsonorder: 0
						}
						</Text>

						</View>)
	}


}

export default Product;
