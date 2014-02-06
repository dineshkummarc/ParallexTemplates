/// <reference name="MicrosoftAjax.js"/>


Type.registerNamespace("MapControl");

MapControl.GoogleMap = function(element) {
    MapControl.GoogleMap.initializeBase(this, [element]);

    // Define properties
    this._zoom = null;
    this._centerLatitude = null;
    this._centerLongitude = null;
    this._markers = null;

    this._mapObj = null;
    this._infoWindow = null;
}

MapControl.GoogleMap.prototype = {
    initialize: function() {
        MapControl.GoogleMap.callBaseMethod(this, 'initialize');

        // Create the map
        this.createMap();
    },
    dispose: function() {
        //Add custom dispose actions here
        MapControl.GoogleMap.callBaseMethod(this, 'dispose');
    },
    get_zoom: function() {
        return this._zoom;
    },
    set_zoom: function(value) {
        if (this._zoom !== value) {
            this._zoom = value;
            this.raisePropertyChanged("zoom");
        }
    },
    get_centerLatitude: function() {
        return this._centerLatitude;
    },
    set_centerLatitude: function(value) {
        if (this._centerLatitude !== value) {
            this._centerLatitude = value;
            this.raisePropertyChanged("centerLatitude");
        }
    },
    get_centerLongitude: function() {
        return this._centerLongitude;
    },
    set_centerLongitude: function(value) {
        if (this._centerLongitude !== value) {
            this._centerLongitude = value;
            this.raisePropertyChanged("centerLongitude");
        }
    },
    get_markers: function() {
        return this._markers;
    },
    set_markers: function(value) {
        if (this._markers !== value) {
            this._markers = value;
            this.raisePropertyChanged("markers");
        }
    },
    createMap: function() {
        // Set the center point, zoom, and type of map
        var centerPoint = new google.maps.LatLng(this.get_centerLatitude(), this.get_centerLongitude());
        var options = {
            zoom: this.get_zoom(),
            center: centerPoint,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Create the map, using the above options
        this._mapObj = new google.maps.Map(this._element, options);

        // Get the array of markers and iterate through them
        var markers = this.get_markers();
        if (markers != null) {
            for (var i = 0; i < markers.length; i++) {
                // Create the marker
                var marker = new google.maps.Marker
                (
                    {
                        position: new google.maps.LatLng(markers[i].Latitude, markers[i].Longitude),
                        map: this._mapObj,
                        title: markers[i].Title
                    }
                );
                
                // Save the current context to the 'that' variable
                var that = this;
                (function(marker, infoHtml) {
                    // Add an event handler for the click event on the marker
                    google.maps.event.addListener(marker, 'click', function() {
                        
                        // Check if the info window has been created, and if not create it
                        if (!that._infoWindow) {
                            that._infoWindow = new google.maps.InfoWindow();
                        }

                        // Set the content of the info window
                        that._infoWindow.setContent(infoHtml);
    
                        // Show the info window
                        that._infoWindow.open(that._mapObj, marker);

                    });
                })(marker, markers[i].InfoWindowHtml);
            }
        }
    }
}
MapControl.GoogleMap.registerClass('MapControl.GoogleMap', Sys.UI.Control);

if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();