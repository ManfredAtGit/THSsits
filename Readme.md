# Interactive map of our THS sits

An interactive web app to show our THS sits on a map.
You can navigate the map as usal zooming in and out and panning
The sits are visualized as (cluster markers) on the map. Depending on current zoom factor, close by sits are clustered together as one cluster marker showing the number of sits in that cluster.
Clicking on the cluster marker will explode the cluster marker into single marker for all elements in the cluster. Zoom factor is adjusted automatically to the bounding box of teh cluster elements.
Exploding a cluster marker can result in further cluster markers. Then, you simply click on a cluster to "unpack" the cluster of your choice.

Clicking on a single marker will result in an popup containing basic information of that particular sit (like date and location and a small image or icon for that sit). It also contains a link to the THS sit site where you can see the public in formation of the Home&Pet owners (THS listing).

In addition, the popup may contain a link to a slide show or video produced for the sit occasion. B yclicking the link, the slide show will open in a new window


# technology stack
- leaflet and javascript
- OSM
- Davinci Resolve for video editing