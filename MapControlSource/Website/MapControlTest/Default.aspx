<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<%@ Register Namespace="MapControl" TagPrefix="mc" Assembly="MapControl" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager runat="server" ID="ScriptManager1">
    </asp:ScriptManager>
    <div>
        <mc:GoogleMap ID="GoogleMap1" runat="server" CenterLatitude="36.1658" CenterLongitude="-86.7844"
            Width="500" Height="500">
            <Markers>
                <mc:MapMarker Latitude="36.1658" Longitude="-86.7844" Title="Nashville, TN" InfoWindowHtml="<strong>Nashville, TN</strong>" />
            </Markers>
        </mc:GoogleMap>
    </div>
    </form>
</body>
</html>
