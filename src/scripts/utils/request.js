/**
 *  注册一个Vue插件, 在组件内部直接调用this.get()
 */
import axios from 'axios'
import qs from 'qs'
import headers from '../config/header'

const is_debug = location.port == 8888
const fixURL = (url) => {
	return is_debug ? url.replace(/\.do$/, "") : url
}

export default {
	install: function (Vue, options) {
	  /* get 方法
	   * @param  {string} url								请求接口地址
	   * @param  {object} params						请求参数
	   * @param  {function} _success				请求成功的回调函数
	   * @param  {function} _error					请求失败的回调函数
	   */
	  Vue.prototype.get = function (url, params = {}, _success, _error ) {
			params = qs.stringify(params)
	    url = `/${fixURL(url)}?${params}`
			axios.get(url,{
			  headers: headers
			})
			.then((response) => {
        _success && _success(response.data)
        console.log("api")
      })
			.catch(function (error) {
	     	_error && _error(error)
	   	})
		}

		/* post 方法
	   * @param  {string} url								请求接口地址
	   * @param  {object} params						请求参数
	   * @param  {function} _success				请求成功的回调函数
	   * @param  {function} _error					请求失败的回调函数
	   */
	  Vue.prototype.post = function (url, params = {}, _success, _error ) {
      axios.post(fixURL(url),params,{
			  headers: headers
			})
      .then(function (response) {
     		_success && _success(response.data)
	   	})
	   	.catch(function (error) {
	     	_error && _error(error)
	   	})
		}
	}
}
