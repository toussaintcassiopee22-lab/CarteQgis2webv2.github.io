var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BDOrthoIGN_1 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_Positron_2 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positronnolabelsretina_3 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Coursdeau_4 = new ol.format.GeoJSON();
var features_Coursdeau_4 = format_Coursdeau_4.readFeatures(json_Coursdeau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_4.addFeatures(features_Coursdeau_4);
var lyr_Coursdeau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_4, 
                style: style_Coursdeau_4,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
    title: 'Cours d\'eau<br />\
    <img src="styles/legend/Coursdeau_4_0.png" /> Cours d\'eau visible<br />\
    <img src="styles/legend/Coursdeau_4_1.png" /> Cours d\'eau busé<br />\
    <img src="styles/legend/Coursdeau_4_2.png" /> Tracé historique souterrain<br />\
    <img src="styles/legend/Coursdeau_4_3.png" /> Canal<br />' });
var format_Projetsderenaturationdecoursdeau_5 = new ol.format.GeoJSON();
var features_Projetsderenaturationdecoursdeau_5 = format_Projetsderenaturationdecoursdeau_5.readFeatures(json_Projetsderenaturationdecoursdeau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projetsderenaturationdecoursdeau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetsderenaturationdecoursdeau_5.addFeatures(features_Projetsderenaturationdecoursdeau_5);
var lyr_Projetsderenaturationdecoursdeau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projetsderenaturationdecoursdeau_5, 
                style: style_Projetsderenaturationdecoursdeau_5,
                popuplayertitle: 'Projets de renaturation de cours d\'eau',
                interactive: true,
    title: 'Projets de renaturation de cours d\'eau<br />\
    <img src="styles/legend/Projetsderenaturationdecoursdeau_5_0.png" /> Cours d\'eau visible<br />\
    <img src="styles/legend/Projetsderenaturationdecoursdeau_5_1.png" /> Cours d\'eau busé<br />' });
var format_MtropoleduGrandNancy_6 = new ol.format.GeoJSON();
var features_MtropoleduGrandNancy_6 = format_MtropoleduGrandNancy_6.readFeatures(json_MtropoleduGrandNancy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MtropoleduGrandNancy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MtropoleduGrandNancy_6.addFeatures(features_MtropoleduGrandNancy_6);
var lyr_MtropoleduGrandNancy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MtropoleduGrandNancy_6, 
                style: style_MtropoleduGrandNancy_6,
                popuplayertitle: 'Métropole du Grand Nancy',
                interactive: false,
                title: '<img src="styles/legend/MtropoleduGrandNancy_6.png" /> Métropole du Grand Nancy'
            });
var format_Commune_7 = new ol.format.GeoJSON();
var features_Commune_7 = format_Commune_7.readFeatures(json_Commune_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_7.addFeatures(features_Commune_7);
var lyr_Commune_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_7, 
                style: style_Commune_7,
                popuplayertitle: 'Commune',
                interactive: false,
                title: '<img src="styles/legend/Commune_7.png" /> Commune'
            });
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_MtropoleduGrandNancy_6,lyr_Commune_7,],
                                fold: 'open',
                                title: 'Limites administratives'});
var group_Occupationdusol = new ol.layer.Group({
                                layers: [lyr_Coursdeau_4,lyr_Projetsderenaturationdecoursdeau_5,],
                                fold: 'open',
                                title: 'Occupation du sol'});
var group_Coursdeau = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cours d\'eau'});
var group_OCSGE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'OCSGE'});
var group_Espacesnaturels = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Espaces naturels'});
var group_Donnesbrutes = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Données brutes'});

lyr_OSMStandard_0.setVisible(true);lyr_BDOrthoIGN_1.setVisible(true);lyr_Positron_2.setVisible(true);lyr_Positronnolabelsretina_3.setVisible(true);lyr_Coursdeau_4.setVisible(true);lyr_Projetsderenaturationdecoursdeau_5.setVisible(true);lyr_MtropoleduGrandNancy_6.setVisible(true);lyr_Commune_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BDOrthoIGN_1,lyr_Positron_2,lyr_Positronnolabelsretina_3,group_Occupationdusol,group_Limitesadministratives];
lyr_Coursdeau_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_1': 'nom_1', 'visibilite': 'visibilite', 'statut': 'statut', 'Image': 'Image', 'Contexte': 'Contexte', 'Travaux': 'Travaux', });
lyr_Projetsderenaturationdecoursdeau_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_1': 'nom_1', 'visibilite': 'visibilite', 'statut': 'statut', 'Image': 'Image', 'Contexte': 'Contexte', 'Travaux': 'Travaux', });
lyr_MtropoleduGrandNancy_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'INSEE_COM': 'INSEE_COM', 'INSEE_DEP': 'INSEE_DEP', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Commune_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Coursdeau_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_1': 'TextEdit', 'visibilite': 'TextEdit', 'statut': 'TextEdit', 'Image': 'TextEdit', 'Contexte': 'TextEdit', 'Travaux': 'TextEdit', });
lyr_Projetsderenaturationdecoursdeau_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_1': 'TextEdit', 'visibilite': 'TextEdit', 'statut': 'TextEdit', 'Image': 'ExternalResource', 'Contexte': 'TextEdit', 'Travaux': 'TextEdit', });
lyr_MtropoleduGrandNancy_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'INSEE_COM': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_Commune_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SUPERF_CAD': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_Coursdeau_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom_1': 'header label - always visible', 'visibilite': 'hidden field', 'statut': 'hidden field', 'Image': 'hidden field', 'Contexte': 'hidden field', 'Travaux': 'hidden field', });
lyr_Projetsderenaturationdecoursdeau_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom_1': 'header label - always visible', 'visibilite': 'hidden field', 'statut': 'hidden field', 'Image': 'header label - visible with data', 'Contexte': 'header label - always visible', 'Travaux': 'header label - always visible', });
lyr_MtropoleduGrandNancy_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOM': 'no label', 'CODE_SIREN': 'no label', 'NATURE': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'INSEE_COM': 'no label', 'INSEE_DEP': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_Commune_7.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SUPERF_CAD': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'CODE_SIREN': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_Commune_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});