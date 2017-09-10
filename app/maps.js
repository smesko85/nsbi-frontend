var NSBIMap = (function GMap() {
  var gmap = null;

  return function(layers) {
    var $mapHolder = $('[data-map]');
    if (!$mapHolder.get(0)) return {};
    if (gmap) return gmap;
    gmap = {};

    var NoviSadLocation = {lat: 45.2671, lng: 19.8335};
    gmap.map = new google.maps.Map($mapHolder.get(0), {
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
    layer.getMap() ? layer.setMap(null) : layer.setMap(map)
  };

  function onClick(layer, map) {
    return function() {
      $(this).toggleClass('is-disabled');
      toggleLayer(layer, map);
    }
  }

  function bindEvents(gmap) {
    gmap.layers.forEach(function(item, index) {
      $($mapControls.get(index)).click(onClick(item, gmap.map));
    });
  }

  var $mapControls = $('[data-map-layer]');
  if (!$mapControls.get(0)) return;

  var layers = $.map($mapControls, function(el) {
    return $(el).data('map-layer');
  });

  var gmap = new NSBIMap(layers);
  bindEvents(gmap);
}

$(document).ready(function() {
  NSBIInitMap();
});
