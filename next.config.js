const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
]

const getSecurityHeaders = env => {
  console.log(!env ? '>>> Empty Security Headers' : '>>> Complete Security Headers');
  if (!env) return [];
  return securityHeaders;
}

module.exports = {
  async headers() {
    const headers = [
      {
        source: '/:all*(svg|jpg|png|ttf|woff|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]

    if(process.env.ENV) {
      headers.push(
        {
          // Apply these headers to all routes in your application.
          source: '/(.*)',
          headers: getSecurityHeaders(process.env.ENV),
        }
      )
    }
    return headers;
  },
}
