// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:26910",wgs84Center:{lat:39.5676557438,lon:-123.479778642},proj:"+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",title:"sagehorn2",baseExtent:[456289.903984,4378009.96376,461288.166484,4381755.91433],rotation:0,zShift:0.0,width:100.0,zExaggeration:1.5});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"Default"}));
