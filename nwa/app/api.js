var API_URI = 'http://0.0.0.0:3000/api/';

class Resource {
	constructor(API_URI = API_URI){
		this.baseUri = API_URI;
	}
	ajax(resource,filter={}){
		return fetch(this.baseUri + resource)
	}
	get(r,f){
		return this.ajax(r,f)
	}
}

export default Resource;
