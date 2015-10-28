var API_URI = 'http://0.0.0.0:3000/api/';
module.exports = Resource;

function Resource(api, options) {
	var fetcher = fetch(API_URI + api, options || {}).then((res) => res.json());
}

Resource.restful = function (resource) {
	
}
