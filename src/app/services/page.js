
import ServicesHero from '../components/services/ServicesHero'
import CarServices from '../components/services/CarServices'
import PaintingServices from '../components/services/PaintingServices'
import BikeServices from '../components/services/BikeServices'
import WhyChooseUs from '../components/services/WhyChooseUs'
import ContactSection from '../components/services/ContactSection'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ServicesHero />
      <CarServices />
      <PaintingServices />
      <BikeServices />
      <WhyChooseUs />
      <ContactSection />
    </main>
  )
}