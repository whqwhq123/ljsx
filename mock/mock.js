const { Collection } = require('immutable')

module.exports = function () {
  return {
    goodscar: require('./goodscar.json'),
    detailslist: require('./details-list.json'),
    detailsrj: require('./details-rj.json'),
    detailspl: require('./details-pl.json'),
    artdetails: require('./article-details.json'),
    indexlist: require('./index-list.json'),
    order: require("./order.json"),
    categorylist: require('./category-list.json'),
    collection: require('./collection.json'),
    grabfresh: require("./grabfresh.json"),
    address: require('./address.json'),
    scheduleft: require('./schedule-ft.json'),

  }
}