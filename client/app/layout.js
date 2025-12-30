'use strict';

import React from 'react';
import './globals.css'; // Assuming you have a global CSS file

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}