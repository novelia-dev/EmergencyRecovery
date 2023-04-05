module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 1,
        browsers: ['last 2 versions', '> 1%'],
        features: {
          'nesting-rules': true
        }
      }),
      require('postcss-pxtorem')({
        rootValue: '1vw',
        propList: [''],
        mediaQuery: [
          {
            // 웹 기준
            media: '(min-width: 1920px)',
            rootValue: '0.83rem',
            propList: ['']
          },
          {
            // 모바일 기준
            media: '(max-width: 360px)',
            rootValue: '0.67rem',
            propList: ['*']
          }
        ]
      })
    ]
  };