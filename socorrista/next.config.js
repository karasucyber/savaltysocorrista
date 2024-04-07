// next.config.js

module.exports = {
    async rewrites() {
      return [
        // Serve o arquivo HTML na raiz do seu projeto
        {
          source: '/',
          destination: '/index.html',
        },
        // Serve os arquivos de assets na pasta /assets
        {
          source: '/assets/:path*',
          destination: '/assets/:path*',
        },
      ];
    },
  };
  