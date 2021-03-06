// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': ['app/*.js'],
      'js/vendor.js': [
        'bower_components/slick-carousel/slick/slick.js'
      ]
    }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

exports.server = {
  base: '',
  indexPath: '/app/index.html',
};

exports.modules = {
  wrapper: false
};

exports.watcher = {
  usePolling: true
};

exports.plugins = {
  pleeease: {
    autoprefixer: {
      browsers: ['last 8 versions']
    },
  }
};
