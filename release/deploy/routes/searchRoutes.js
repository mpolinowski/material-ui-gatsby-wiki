var express = require('express');
var searchRouter = express.Router();
var elasticsearch = require('elasticsearch');

var connectionString = 'localhost:9200';
// var _index = "wiki_ssr_de_2018_01_03";
var _index = 'wiki_ssr_en_2018_09_04';
var _type = 'article';

var client = new elasticsearch.Client({
  host: connectionString,
  log: 'trace',
});


/* GET Search page. */
searchRouter.route('/')
  .get(function (req, res) {
    res.render('Search');
  });


// Search
searchRouter.route('/Results/')
  .get(function (req, res) {

    client.search({
      index: _index,
      type: _type,
      body: {
        query: {
          multi_match: {
            query: req.query.q,
            fields: ['title^100', 'tags^50', 'abstract^20', 'description^10', 'chapter^5', 'title2^5'],
            fuzziness: 1,
          },
        },
      },
    }).then(function (resp) {
      res.render('Search_Results', {
        response: resp,
        query: req.query.q,
      });
    }, function (err) {
      console.trace(err.message);
      res.render('Search_Results', {
        title: 'INSTAR Wiki Search Results',
        response: err.message,
      });
    });
  });

module.exports = searchRouter;