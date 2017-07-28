/**
 * Books.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localDiskDb',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    isbn: {
      type: 'string',
      primaryKey: true,
      unique: true
    },
    title: {
      type: 'string',
      required: true
    },
    publicationDate: {
      type: 'date',
      required: true
    },
    author: {
      model: 'author',
      required: true
    },
    genres: {
      collection: 'genre',
      via: 'books',
      dominant: true,
      required: true
    }
  }
};

