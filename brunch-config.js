// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'js/app.js'},
  stylesheets: {joinTo: 'css/app.css'}
};

exports.server = {
  base: '',
  indexPath: '/app/index.html',
};

exports.watcher = {
  usePolling: true
};
