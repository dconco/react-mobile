SystemJS.config({
  baseURL: '',
  defaultExtension: true,
  packages: {
    '.': {
      main: './main.jsx',
      defaultExtension: 'jsx'
    }
  },
  meta: {
    '*.js': {
      babelOptions: { react: true }
    },
    '*.jsx': {
      babelOptions: { react: true }
    }
  },
  map: {
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'react-dom': 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js',
    'react': 'https://unpkg.com/react@18.2.0/umd/react.development.js',
    /* Can add as many libraries as needed */
  },
  transpiler: 'plugin-babel'
})
SystemJS.import('./main')
  .catch(console.error.bind(console))