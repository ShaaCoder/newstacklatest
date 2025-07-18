import Link from 'next/link';
import {
  Code2, Mail, Phone, MapPin,
  Github, Twitter, Linkedin,
} from 'lucide-react';
import Image from 'next/image';

import { services, generateSlug } from '@/lib/services';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="nayastack logo" width={72} height={72} className="rounded-lg" priority />
              <span className="text-xl font-bold">nayastack</span>
            </Link>

            <p className="text-gray-400 mb-4">
              Crafting exceptional digital experiences through innovative web development solutions.
            </p>

            <div className="flex space-x-4">
              <Github  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((s) => {
                const slug = generateSlug(s.title);
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about"     className="hover:text-white">About Us</Link></li>
              <li><Link href="/grow-business" className="hover:text-white">Grow Your Business</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              {/* <li><Link href="#"     className="hover:text-white">Careers</Link></li> */}
              <li><Link href="/privacy-policy"     className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>nayastack8810@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>7835649916, 8810524651</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>H.no. 653 Gram Sabha Pooth Kalan Rohini Sector-23 Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 nayastack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
