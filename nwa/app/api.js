import request from 'superagent';

const API_URL = 'http://localhost:3000/api/';


/**
 * Superagent wrapper for easily making AJAX requests. Provides a layer of
 * convenience by adding a base URL to each request. The base URL is derived
 * from the ```API_URL``` environment variable.
 */
export default {
  /**
   * DELETE relative `path` with optional callback `fn(res)`.
   *
   * @method del
   * @param {String} path
   * @param {Function} fn
   * @return {Request}
   * @public
   */
  del: function(path, fn) {
    return (
      request
        .del(API_URL + path, fn)
    );
  },

  /**
   * GET relative `path` with optional `data` and callback `fn(res)`.
   *
   * @method get
   * @param {String} path
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @public
   */
  get: function(path, data, fn) {
    return (
      request
        .get(API_URL + path, data, fn)
    );
  },

  /**
   * PATCH relative `path` with optional `data` and callback `fn(res)`.
   *
   * @method patch
   * @param {String} path
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @public
   */
  patch: function(path, data, fn) {
    return (
      request
        .patch(API_URL + path, data, fn)
    );
  },

  /**
   * POST relative `path` with optional `data` and callback `fn(res)`.
   *
   * @method post
   * @param {String} path
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @public
   */
  post: function(path, data, fn) {
    return (
      request
        .post(API_URL + path, data, fn)
    );
  },

  /**
   * PUT relative `path` with optional `data` and callback `fn(res)`.
   *
   * @method put
   * @param {String} path
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @public
   */
  put: function(path, data, fn) {
    return (
      request
        .put(API_URL + path, data, fn)
    );
  }
}



