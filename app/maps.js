var NSBIMap = (function GMap() {
  var gmap = null;

  return function(layers) {
    if (gmap) return gmap;
    gmap = {};

    var NoviSadLocation = {lat: 45.2671, lng: 19.8335};
    gmap.map = new google.maps.Map($('[data-map]').get(0), {
      center: NoviSadLocation,
      zoom: 13
    });

    gmap.layers = layers.map(function(item) {
      return new google.maps.KmlLayer(item, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: gmap.map,
      });
    });

    return gmap;
  }
})();

function NSBIInitMap() {
  function toggleLayer(layer, map) {
    return function() {
      layer.getMap() ? layer.setMap(null) : layer.setMap(map)
    };
  };

  function bindEvents(gmap) {
    gmap.layers.forEach(function(item, index) {
      $($mapControls.get(index)).click(toggleLayer(item, gmap.map));
    });
  }

  var $mapControls = $('[data-map-layer]');
  var layers = $.map($mapControls, function(el) {
    return $(el).data('map-layer');
  });

  var gmap = new NSBIMap(layers);
  bindEvents(gmap);
}

$(document).ready(function() {
  NSBIInitMap();
});
