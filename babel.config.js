module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic' // JSX transformed automatically, no need to import React in components
      }
    ]
  ]
};
