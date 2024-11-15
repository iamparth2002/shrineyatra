// components/StructuredData.js
import React from 'react';
import Head from 'next/head';

const StructuredData = ({ schema }) => (
  <Head>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </Head>
);

export default StructuredData;
