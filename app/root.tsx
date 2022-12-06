import type { MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ross Matthews Personal Site',
  description: `Personal site of Ross Matthews, a Senior Frontend Developer living and working remotely in London, UK.`,
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
      <body className="flex min-h-[100vh] flex-col bg-zinc-50">
        <Nav />

        {/* <div className="fixed inset-0 top-16 z-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-3xl lg:px-8">
            <div className="w-full bg-white shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div> */}

        <Outlet />
        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
