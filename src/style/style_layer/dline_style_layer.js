'use strict';

const StyleLayer = require('../style_layer');
const DLineBucket = require('../../data/bucket/dline_bucket');

class DLineStyleLayer extends StyleLayer {
  createBucket(options) {
    return new DLineBucket(options);
  }
}

module.exports = DLineStyleLayer;
