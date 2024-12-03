import { Button } from '@/components/ui/button'

export default function CaregiversSection() {
  return (
    <section className="py-10 px-6 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Are you a caregiver? Join us!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sign up for free, find job opportunities, and be part of a trusted network.
        </p>
        <Button size="lg" variant="secondary">I want to sign up</Button>
      </div>
    </section>
  )
}