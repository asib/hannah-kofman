import React from "react";

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="title" content="Hannah Kofman" />
      <meta name="description" content="Hannah Kofman is a writer from Los Angeles pursuing an MFA in fiction at Washington University in St. Louis. She is currently one of two interns at Dorothy, a publishing project and award-winning experimental feminist press." />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Hannah Kofman" />
      <meta itemProp="description" content="Hannah Kofman is a writer from Los Angeles pursuing an MFA in fiction at Washington University in St. Louis. She is currently one of two interns at Dorothy, a publishing project and award-winning experimental feminist press." />

      {/* Facebook/Whatsapp/Instagram? */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hannahkofman.com/" />
      <meta property="og:title" content="Hannah Kofman" />
      <meta property="og:description" content="Hannah Kofman is a writer from Los Angeles pursuing an MFA in fiction at Washington University in St. Louis. She is currently one of two interns at Dorothy, a publishing project and award-winning experimental feminist press." />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="og:image" content="https://metatags.io/images/meta-tags.png" /> */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hannahkofman.com/" />
      <meta property="twitter:title" content="Hannah Kofman" />
      <meta property="twitter:description" content="Hannah Kofman is a writer from Los Angeles pursuing an MFA in fiction at Washington University in St. Louis. She is currently one of two interns at Dorothy, a publishing project and award-winning experimental feminist press." />
    </>
  );
}
