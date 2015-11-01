import React from 'react-native';
import style from '../style.js';



let {View,MapView,Text} = React;
let {styles} = style;

class Map extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Customer:[
				{
					longitude:113.876896,
					latitude:22.558786,
					animateDrop:true,
					title:'西乡立交',
					subtitle:'337路,362路'

				},
				{
					longitude:113.136288,
					latitude:22.534925,
					animateDrop:true,
					title:'深圳大学1',
					subtitle:'广东深圳大学'
				},

				{
					longitude:113.936288,
					latitude:22.533925,
					animateDrop:true,
					title:'深圳大学',
					subtitle:'广东深圳大学'

				}]
		}
	}

	render(){
		return <MapView style={styles.container}
		showsUserLocation={true}
		annotations={this.state.Customer}
		onAnnotationPress={this.onAnnotationPress}

		></MapView>
	}

	onAnnotationPress(annotation){

		console.log(arguments)

	}
}


export default Map;
