import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: contact@acolhe.com</p>
            <p>Phone: (11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Acolhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}