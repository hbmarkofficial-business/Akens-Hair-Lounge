import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Aken | Akens Hair Lounge</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Akens Hair Lounge in Aken für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Aken"
        />
        <link rel="canonical" href="https://akens-hair-lounge.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Akens Hair Lounge | Premium Barbershop Aken" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Aken."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akens-hair-lounge.de" />
        <meta property="og:image" content="https://akens-hair-lounge.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akens Hair Lounge | Premium Barbershop Aken" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://akens-hair-lounge.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Akens Hair Lounge",
            "image": "https://akens-hair-lounge.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Deine Straße 1",
              "addressLocality": "Aken",
              "postalCode": "06385",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.8540",
              "longitude": "12.0435"
            },
            "url": "https://akens-hair-lounge.de",
            "telephone": "+49 123 4567890",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/akenshairlounge",
              "https://www.instagram.com/akenshairlounge"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
