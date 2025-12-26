export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jalex Media",
    "url": "https://jalexmedia.com.au",
    "logo": "https://jalexmedia.com.au/logo.png",
    "image": "https://jalexmedia.com.au/logo.png",
    "description": "Digital marketing agency in Melbourne, Australia. Specializing in Meta Ads, Google Ads, SEO, web design, and content creation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61493474479",
      "contactType": "Customer Service",
      "areaServed": "AU",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585544582311",
      "https://www.instagram.com/jalexmedia/"
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jalex Media",
    "image": "https://jalexmedia.com.au/logo.png",
    "logo": "https://jalexmedia.com.au/logo.png",
    "@id": "https://jalexmedia.com.au",
    "url": "https://jalexmedia.com.au",
    "telephone": "+61493474479",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585544582311",
      "https://www.instagram.com/jalexmedia/"
    ],
    "priceRange": "$$",
    "description": "Digital marketing agency in Melbourne, Australia. Specializing in Meta Ads, Google Ads, SEO, web design, and content creation.",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "service": [
      {
        "@type": "Service",
        "serviceType": "Digital Marketing",
        "description": "Meta Ads and Facebook advertising campaigns"
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing",
        "description": "Google Ads and search engine marketing"
      },
      {
        "@type": "Service",
        "serviceType": "SEO",
        "description": "Search engine optimization services"
      },
      {
        "@type": "Service",
        "serviceType": "Web Design",
        "description": "Website design and development"
      },
      {
        "@type": "Service",
        "serviceType": "Content Creation",
        "description": "Content marketing and creation services"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  )
}

