import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

const StructuredData = ({ organizationData }: { organizationData: OrganizationData }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationData.name,
    "url": organizationData.url,
    "logo": organizationData.logo,
    "description": organizationData.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organizationData.address.streetAddress,
      "addressLocality": organizationData.address.addressLocality,
      "addressRegion": organizationData.address.addressRegion,
      "postalCode": organizationData.address.postalCode,
      "addressCountry": organizationData.address.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": organizationData.contactPoint.telephone,
      "contactType": organizationData.contactPoint.contactType,
      "email": organizationData.contactPoint.email
    },
    "sameAs": [
      "https://www.linkedin.com/company/airies-ai",
      "https://x.com/airiestech",
      "https://www.facebook.com/airies.ai"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 