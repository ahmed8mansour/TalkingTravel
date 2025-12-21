'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'  


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        
        {/* the logo  */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image

              src="/images/Logo.png"
              alt="Logo"
              width={100}
              height={65}

            />
          </a>
        </div>

        {/* bar icon  */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>


        {/* lists */}

        {/* login part */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end font-roboto">
          <PopoverGroup className="hidden lg:flex lg:items-center  lg:gap-x-12">
            
            <a href="#" className="text-sm/6 font-semibold text-mytext1 hover:text-pink1">
              Home
            </a>


            <a href="#" className="text-sm/6 font-semibold text-mytext1 hover:text-pink1">
              Story
            </a>
            
            <a href="#" className="text-sm/6 font-semibold text-mytext1 hover:text-pink1">
              Gallery
            </a>

            <a href="#" className="text-sm/6 font-semibold text-mytext1 hover:text-pink1">
              Contact Us
            </a>

            <a href="#" className="font-semibold text-2xl text-pink1">
              <i className="fa-regular fa-circle-user "></i>
            </a>
          
          </PopoverGroup>
        
        </div>


      </nav>



      {/* mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <Image

              src="/images/Logo.png"
              alt="Logo"
              width={100}
              height={65}

            />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer hover:text-red-500"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-mytext1 hover:text-pink1"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-mytext1 hover:text-pink1"
                >
                  Story
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-mytext1 hover:text-pink1"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-mytext1 hover:text-pink1"
                >
                  Contact Us
                </a>
                
                <a href="#" className="font-semibold text-2xl text-pink1">
                  <i className="fa-regular fa-circle-user "></i>
                </a>
          

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}