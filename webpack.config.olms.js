const path = require('path');

const externals = {
    'ol-zhyt/style/Style': 'ol.style.Style',
    'ol-zhyt/style/Circle': 'ol.style.Circle',
    'ol-zhyt/style/Icon': 'ol.style.Icon',
    'ol-zhyt/style/Stroke': 'ol.style.Stroke',
    'ol-zhyt/style/Fill': 'ol.style.Fill',
    'ol-zhyt/style/Text': 'ol.style.Text',
    'ol-zhyt/proj': 'ol.proj',
    'ol-zhyt/tilegrid': 'ol.tilegrid',
    'ol-zhyt/tilegrid/TileGrid': 'ol.tilegrid.TileGrid',
    'ol-zhyt/format/GeoJSON': 'ol.format.GeoJSON',
    'ol-zhyt/format/MVT': 'ol.format.MVT',
    'ol-zhyt/Map': 'ol.Map',
    'ol-zhyt/View': 'ol.View',
    'ol-zhyt/Observable': 'ol.Observable',
    'ol-zhyt/layer/Tile': 'ol.layer.Tile',
    'ol-zhyt/layer/Vector': 'ol.layer.Vector',
    'ol-zhyt/layer/VectorTile': 'ol.layer.VectorTile',
    'ol-zhyt/source/TileJSON': 'ol.source.TileJSON',
    'ol-zhyt/source/Vector': 'ol.source.Vector',
    'ol-zhyt/source/VectorTile': 'ol.source.VectorTile'
};

function createExternals() {
    const createdExternals = {};
    for (const key in externals) {
        createdExternals[key] = {
            root: externals[key].split('.'),
            commonjs: key,
            commonjs2: key,
            amd: key
        };
    }
    return createdExternals;
}

module.exports = {
    entry: './src/olms.js',
    devtool: 'source-map',
    node: { fs: 'empty' },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    __dirname
                ],
                use: {
                    loader: 'buble-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve('./dist'), // Path of output file
        filename: 'olms.js',
        library: 'olms',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    externals: createExternals()
};
