import type { MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ross Matthews Personal Site',
  description: `I'm Ross Matthews, a Senior Frontend Developer living and working remotely in London, UK.`,
  viewport: 'width=device-width,initial-scale=1'
});

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'icon',
      href: '/rossmatthewsdev/images/favicon.ico'
    },
    {
      rel: 'icon',
      href: '/rossmatthewsdev/images/favicon-16x16.png',
      type: 'image/png'
    },
    {
      rel: 'icon',
      href: '/rossmatthewsdev/images/favicon-32x32.png',
      type: 'image/png'
    },
    {
      rel: 'apple-touch-icon',
      href: '/rossmatthewsdev/images/apple-touch-icon-114x114.png',
      type: 'image/png'
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Light.woff',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Light.woff2',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Regular.woff',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Regular.woff2',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Medium.woff',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Medium.woff2',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Bold.woff',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    },
    {
      rel: 'preload',
      href: '/rossmatthewsdev/fonts/Inter-Bold.woff2',
      as: 'font',
      type: 'font/woff',
      crossOrigin: ''
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
