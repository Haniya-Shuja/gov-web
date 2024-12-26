"use client";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app"; // Import AppProps
import "../global.css"; // Include your global CSS here

function App({ Component, pageProps }: AppProps) { // Use AppProps for typing
  return (
    <>
      {/* Add metadata or other global setups */}
      <Head>
        <title>My App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM1j5Cf3T2Q/6p2QST0O+StWf8IoC7qh5rw/Ep1"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
