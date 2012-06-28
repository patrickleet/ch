
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Crazed Hits', company: 'Crazed Hits' })
};