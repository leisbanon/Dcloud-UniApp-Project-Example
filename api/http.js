const baseUrl = 'http://t.weather.sojson.com';

/**
 * @param {String} url 请求地址
 * @param {String} method 请求类型，大写
 * @param {String} params 请求输入参数
 */
const request = (url,method,params) =>  new Promise((resolve,reject) => {
	uni.request({
		url:baseUrl+url,
		method:method,
		data:params,
		success(data) {
			resolve(data.data);
		},
		fail(mes) {
			reject(new Error(mes));
		}
	})
});

export {
	request
}