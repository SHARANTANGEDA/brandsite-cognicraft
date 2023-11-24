import React, {useState} from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';
import LogoWithText from "../../../components/Logo/LogoWithText";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import ToggleTheme from "../../../components/NavBar/ToggleTheme";
import {Dialog} from "@headlessui/react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Link from '@docusaurus/Link';

function useNavbarItems() {

  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
export const navigation = [
    {name: 'Home', href: '/'},
    // {name: 'Community', href: '#'},
    {name: 'Curated Products', href: '/curated-tools'},
    {name: 'Blog', href: '/blog'},
    {name: 'Consulting', href: '/consulting'},
    {name: 'Contact Us', href: '/contactus'},
]

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const searchBarItem = items.find((item) => item.type === 'search');
  return (
      <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                      <LogoWithText/>
                  </a>
              </div>
              <div className="flex lg:hidden">
                  <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(true)}
                  >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                  </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                      <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          {item.name}
                      </Link>
                  ))}
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <a href="https://twitter.com/cognicraft_tech" target="_blank" className="social-link mr-2">
                      <FaXTwitter size={30} className="icon" />
                  </a>
                  <a href="https://github.com/xpuls-labs" target="_blank"  className="social-link mr-2">
                      <FaGithub size={30} className="icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/cognicraft-tech" target="_blank" className="social-link mr-4">
                      <FaLinkedin size={30} className="icon"  />
                  </a>
                  <NavbarColorModeToggle className={styles.colorModeToggle} />
                  {!searchBarItem && (
                      <NavbarSearch>
                          <SearchBar />
                      </NavbarSearch>
                  )}
              </div>
              {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end">*/}
              {/*    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">*/}
              {/*        Log in <span aria-hidden="true">&rarr;</span>*/}
              {/*    </a>*/}
              {/*</div>*/}
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50"/>
              <Dialog.Panel
                  className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                              alt=""
                          />
                      </a>
                      <button
                          type="button"
                          className="-m-2.5 rounded-md p-2.5 text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                      </button>
                  </div>
                  <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="space-y-2 py-6">
                              {navigation.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-white hover:bg-gray-50"
                                  >
                                      {item.name}
                                  </a>
                              ))}
                          </div>
                          <div className="py-6">
                              <NavbarColorModeToggle className={styles.colorModeToggle} />
                              {!searchBarItem && (
                                  <NavbarSearch>
                                      <SearchBar />
                                  </NavbarSearch>
                              )}
                          </div>
                          <div className="py-6">
                              <a
                                  href="#"
                                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                  Log in
                              </a>
                          </div>
                      </div>
                  </div>
              </Dialog.Panel>
          </Dialog>
      </header>

  );
}
