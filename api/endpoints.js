(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  util.format("http://%s%s:%d",           process.env.CATALOGUE_CONNECT_SERVICE_HOST || 'catalogue', domain, 
                                                           process.env.CATALOGUE_CONNECT_SERVICE_PORT || 80),
    tagsUrl:       util.format("http://%s%s:%d/tags",      process.env.CATALOGUE_CONNECT_SERVICE_HOST || 'catalogue', domain, 
                                                           process.env.CATALOGUE_CONNECT_SERVICE_PORT || 80),
    cartsUrl:      util.format("http://%s%s:%d/carts",     process.env.CARTS_CONNECT_SERVICE_HOST || 'carts', domain, 
                                                           process.env.CARTS_CONNECT_SERVICE_PORT || 80),
    ordersUrl:     util.format("http://%s%s:%d",           process.env.ORDERS_CONNECT_SERVICE_HOST || 'orders', domain, 
                                                           process.env.ORDERS_CONNECT_SERVICE_PORT || 80),
    customersUrl:  util.format("http://%s%s:%d/customers", process.env.USER_CONNECT_SERVICE_HOST || 'user', domain, 
                                                           process.env.USER_CONNECT_SERVICE_PORT || 80),
    addressUrl:    util.format("http://%s%s:%d/addresses", process.env.USER_CONNECT_SERVICE_HOST || 'user', domain, 
                                                           process.env.USER_CONNECT_SERVICE_PORT || 80),
    cardsUrl:      util.format("http://%s%s:%d/cards",     process.env.USER_CONNECT_SERVICE_HOST || 'user', domain, 
                                                           process.env.USER_CONNECT_SERVICE_PORT || 80),
    loginUrl:      util.format("http://%s%s:%d/login",     process.env.USER_CONNECT_SERVICE_HOST || 'user', domain, 
                                                           process.env.USER_CONNECT_SERVICE_PORT || 80),
    registerUrl:   util.format("http://%s%s:%d/register",  process.env.USER_CONNECT_SERVICE_HOST || 'user', domain, 
                                                           process.env.USER_CONNECT_SERVICE_PORT || 80),
  };
}());
