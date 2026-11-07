var wms_layers = [];

var format_Regions_MAR_0 = new ol.format.GeoJSON();
var features_Regions_MAR_0 = format_Regions_MAR_0.readFeatures(json_Regions_MAR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_MAR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_MAR_0.addFeatures(features_Regions_MAR_0);
var lyr_Regions_MAR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_MAR_0, 
                style: style_Regions_MAR_0,
                popuplayertitle: 'Regions_MAR',
                interactive: true,
                title: '<img src="styles/legend/Regions_MAR_0.png" /> Regions_MAR'
            });
var format_Aearoports_MAR_1 = new ol.format.GeoJSON();
var features_Aearoports_MAR_1 = format_Aearoports_MAR_1.readFeatures(json_Aearoports_MAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aearoports_MAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aearoports_MAR_1.addFeatures(features_Aearoports_MAR_1);
var lyr_Aearoports_MAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aearoports_MAR_1, 
                style: style_Aearoports_MAR_1,
                popuplayertitle: 'Aearoports_MAR',
                interactive: true,
                title: '<img src="styles/legend/Aearoports_MAR_1.png" /> Aearoports_MAR'
            });

lyr_Regions_MAR_0.setVisible(true);lyr_Aearoports_MAR_1.setVisible(true);
var layersList = [lyr_Regions_MAR_0,lyr_Aearoports_MAR_1];
lyr_Regions_MAR_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_Aearoports_MAR_1.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'alias': 'alias', });
lyr_Regions_MAR_0.set('fieldImages', {'OBJECTID': '', 'CODE_REGIO': '', 'Nom_Region': '', 'Population': '', 'Menages': '', 'Etrangers': '', 'Marocains': '', 'Non_ar': '', });
lyr_Aearoports_MAR_1.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'TextEdit', 'alias': 'Range', });
lyr_Regions_MAR_0.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'CODE_REGIO': 'header label - visible with data', 'Nom_Region': 'inline label - always visible', 'Population': 'no label', 'Menages': 'no label', 'Etrangers': 'no label', 'Marocains': 'no label', 'Non_ar': 'no label', });
lyr_Aearoports_MAR_1.set('fieldLabels', {'Nom_fr': 'inline label - visible with data', 'Nom_ar': 'no label', 'iata': 'inline label - always visible', 'alias': 'inline label - always visible', });
lyr_Aearoports_MAR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});