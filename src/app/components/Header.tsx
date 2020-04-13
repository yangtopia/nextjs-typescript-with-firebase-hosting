import React from 'react';
import Link from 'next/link';

export default ({ pathname }: { pathname?: any }) => (
  <header>
    <Link href="/">
      <a href="/" className={pathname === '/' ? 'is-active' : ''}>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a href="/about" className={pathname === '/about' ? 'is-active' : ''}>
        About
      </a>
    </Link>
  </header>
);
