using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MapControl
{
    /// <summary>
    /// Represents a location marker on the map.
    /// </summary>
    [Serializable]
    public class MapMarker
    {
        /// <summary>
        /// The latitude position of the marker.
        /// </summary>
        public double Latitude { get; set; }

        /// <summary>
        /// The longitude position of the marker.
        /// </summary>
        public double Longitude { get; set; }

        /// <summary>
        /// Gets or sets a string to be displayed in a tooltip when the mouse hovers over the marker.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets the HTML content to be displayed in a popup info window when the marker is clicked.
        /// </summary>
        public virtual string InfoWindowHtml { get; set; }

        /// <summary>
        /// Initializes a new instance of the MapMarker class.
        /// </summary>
        public MapMarker()
        {
        }
    }

}
