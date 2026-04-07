import { Footer } from "lyrax/components/layout/footer";
import { Header } from "lyrax/components/layout/header";
import { CTA } from "lyrax/components/sections/cta";
import { Features } from "lyrax/components/sections/features";
import { Hero } from "lyrax/components/sections/hero";
import Spinner from "lyrax/components/ui/spinner";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <main>
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}