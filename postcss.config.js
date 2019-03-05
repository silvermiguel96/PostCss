module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid:true
    // }),
    require('postcss-apply'),
    require('postcss-custom-media')({
        preserve: false,
    }),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        flexbox: false,
      },preserve: true, //Valor por defecto de "true".Se asemeja a customProperties
      //cambiar a false para notar el cambio
    })
  ]
}