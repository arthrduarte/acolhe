import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Star, UserPlus } from "lucide-react";
import Image from 'next/image'

  const steps = [
    { icon: UserPlus, title: 'Sign Up', description: 'Create your family or caregiver profile.' },
    { icon: Search, title: 'Custom Search', description: 'Filter caregivers by location, specialty, and availability.' },
    { icon: MessageCircle, title: 'Direct Contact', description: 'Chat and hire via WhatsApp.' },
    { icon: Star, title: 'Reviews', description: 'Leave and check feedback for better safety.' },
  ]

export default function Home() {
  return (
    <>
    <section className="py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find the ideal caregiver for your loved ones
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            We connect families with qualified caregivers quickly and safely.
          </p>
          <Button className='bg-blue-600 text-white hover:bg-blue-700' size='lg'>Start Now</Button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="https://medicinasa.com.br/wp-content/uploads/2024/01/idoso-old-negr.jpg"
            alt="Family interacting with a caregiver"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <step.icon className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 px-6 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Are you a caregiver? Join us!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sign up for free, find job opportunities, and be part of a trusted network.
        </p>
        <Button size="lg" variant="secondary">I want to sign up</Button>
      </div>
    </section>
    </>
  );
}
