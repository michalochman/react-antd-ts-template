const { addLessLoader, fixBabelImports, override } = require('customize-cra')

// See: https://github.com/alibaba/BizCharts/pull/641/files
function customBizcharts3Name(name) {
  const bizchartsTypedGeoms = [
    'Area',
    'Edge',
    'Heatmap',
    'Interval',
    'Line',
    'Path',
    'Point',
    'Polygon',
    'Schema',
    'Venn',
  ]
  if (bizchartsTypedGeoms.some(i => i === name)) {
    // components of TypedGeom are different with others.
    return `bizcharts/lib/components/TypedGeom/${name}`
  }
  return `bizcharts/lib/components/${name}`
}

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('bizcharts', {
    camel2DashComponentName: false,
    customName: customBizcharts3Name,
    style: false,
  }),
  fixBabelImports('@ant-design/icons', {
    camel2DashComponentName: false,
    libraryDirectory: 'es/icons',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  })
)
