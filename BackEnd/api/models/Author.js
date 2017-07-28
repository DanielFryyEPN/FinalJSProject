/**
 * Authors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localDiskDb',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    penName: {
      type: 'string',
      required: true
    },
    books: {
      collection: 'book',
      via: 'author'
    },
    genres: {
      collection: 'genre',
      via: 'authors',
      dominant: true,
      required: true
    }
  }
};

