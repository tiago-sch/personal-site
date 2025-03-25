import { type NextConfig } from "next";
import analyzer from "@next/bundle-analyzer";

type HeaderItem = {
  source: string;
  locale?: false;
  headers: { key: string; value: string; }[];
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
})

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

const getSecurityHeaders = (env?: string) => {
  console.log(!env ? '>>> Empty Security Headers' : '>>> Complete Security Headers');
  if (!env) return [];
  return securityHeaders;
}

const config: NextConfig = {
  async headers() {
    const headers: HeaderItem[] = [
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
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/**',
      search: '',
    }]
  },
}

module.exports = withBundleAnalyzer(config);
