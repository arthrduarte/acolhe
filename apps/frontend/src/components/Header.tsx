import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NotificationPanel from './Notification'

export default function Header() {
  const isLoggedIn = true // temporary for demonstration

  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Acolhe</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
          <Link href="#find-caregiver" className="text-gray-600 hover:text-blue-600">Find Caregiver</Link>
          <Link href="#for-caregivers" className="text-gray-600 hover:text-blue-600">For Caregivers</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
              <NotificationPanel />
              <Button variant="outline">My Account</Button>
            </>
          ) : (
            <>
              <Button variant="outline">Login</Button>
              <Button className='bg-blue-600 text-white hover:bg-blue-700'>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}