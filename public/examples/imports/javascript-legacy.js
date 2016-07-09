var apiKey = _.get(globalData, 'api.key');
var date = moment();
var url = '/api/' + apiKey + '?' + Number(date);

$.get(url).then(function(data) {
  var el = document.getElementById('main');
  var app = React.createElement(FooBar, {
    data: data
  });

  ReactDOM.render(app, el);
});
