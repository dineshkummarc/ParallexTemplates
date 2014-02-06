using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;

namespace MapControl
{
    /// <summary>
    /// A control that displays a Google Map.
    /// </summary>
    [ParseChildren(true)]
    public class GoogleMap : WebControl, IScriptControl
    {
        #region Properties

        private int _Zoom = 8;
        /// <summary>
        /// Gets or sets a value representing the zoom of the map.
        /// </summary>
        public int Zoom
        {
            get { return this._Zoom; }
            set { this._Zoom = value; }
        }

        /// <summary>
        /// Gets or sets the latitude value of the initial center point on the map.
        /// </summary>
        public double CenterLatitude { get; set; }

        /// <summary>
        /// Gets or sets the longitude value of the initial center point on the map.
        /// </summary>
        public double CenterLongitude { get; set; }

        private List<MapMarker> markers = new List<MapMarker>();
        /// <summary>
        /// Gets a list of location markers (of type MapMarker) to display on the map.
        /// </summary>
        [PersistenceMode(PersistenceMode.InnerProperty)]
        public List<MapMarker> Markers
        {
            get { return this.markers; }
        }

        #endregion

        private ScriptManager sm;

        /// <summary>
        /// Initializes a new instance of the GoogleMap class.
        /// </summary>
        public GoogleMap()
        {
        }

        protected override HtmlTextWriterTag TagKey
        {
            get
            {
                return HtmlTextWriterTag.Div;
            }
        }

        protected override void OnPreRender(EventArgs e)
        {
            if (!this.DesignMode)
            {
                // Test for ScriptManager and register if it exists
                sm = ScriptManager.GetCurrent(Page);

                if (sm == null)
                    throw new HttpException("A ScriptManager control must exist on the current page.");

                sm.RegisterScriptControl(this);
            }

            base.OnPreRender(e);
        }

        protected override void Render(HtmlTextWriter writer)
        {
            if (!this.DesignMode)
                sm.RegisterScriptDescriptors(this);

            base.Render(writer);
        }

        #region IScriptControl Members

        /// <summary>
        /// Gets a collection of script descriptors that represent JavaScript client components.
        /// </summary>
        /// <returns>
        /// An System.Collections.IEnumerable collection of System.Web.UI.ScriptDescriptor objects.
        /// </returns>
        public IEnumerable<ScriptDescriptor> GetScriptDescriptors()
        {
            ScriptControlDescriptor descriptor = new ScriptControlDescriptor("MapControl.GoogleMap", this.ClientID);
            descriptor.AddProperty("zoom", this.Zoom);
            descriptor.AddProperty("centerLatitude", this.CenterLatitude);
            descriptor.AddProperty("centerLongitude", this.CenterLongitude);
            descriptor.AddProperty("markers", this.Markers);
            yield return descriptor;
        }

        /// <summary>
        /// Gets a collection of System.Web.UI.ScriptReference objects that define script 
        /// resources that the control requires.
        /// </summary>
        /// <returns>
        /// An System.Collections.IEnumerable collection of System.Web.UI.ScriptReference
        /// objects.
        /// </returns>
        public IEnumerable<ScriptReference> GetScriptReferences()
        {
            yield return new ScriptReference("MapControl.GoogleMap.js", this.GetType().Assembly.FullName);
        }

        #endregion
    }
}