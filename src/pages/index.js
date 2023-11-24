import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { BeakerIcon, ChartBarIcon, GlobeAltIcon, BoltIcon } from '@heroicons/react/24/solid'
import {MyCalendlyBanner} from "../components/MyCalendlyBanner";


export default function Home() {
  // const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`cognicraft.tech | Home`}
      description="Landing page for cognicraft tech | Building Data Driven Products for the AI era">
      <main>
        <div className="relative isolate px-6 pt-16 lg:px-10">
          <div
              className="absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-gray-600 dark:to-gray-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div className="mx-auto max-w-full py-28 sm:py-36 lg:py-28 w-full">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6
              text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white">
                Checkout our curated list of tools for Enterprises.{' '}
                <Link to="/curated-tools" className="font-semibold text-blue-600 dark:text-blue-400">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center w-full">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Building Products for the AI Era
              </h1>
              {/*<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-blue-500">*/}
              {/*  Empowering businesses from inception to innovation with cutting-edge technology.*/}
              {/*</p>*/}
              {/*<p className="text-lg leading-8 text-gray-600 dark:text-blue-500">*/}
              {/*  Specialized consulting in Data, AI, and Infrastructure Systems.*/}
              {/*</p>*/}
              {/*<p className="text-lg leading-8 text-gray-600 dark:text-blue-500">*/}
              {/*  Championing Data & AI Initiatives to drive business transformation.*/}
              {/*</p>*/}
              {/*<p className="text-lg leading-8 text-gray-600 dark:text-blue-500">*/}
              {/*  Streamlining Tech Infrastructure for optimal Enterprise cost efficiency.*/}
              {/*</p>*/}
              <div className="max-w-full mx-auto px-4 w-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                  {/* Card 1 */}
                  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden  dark:bg-amber-400">
                    <div className="p-6 flex-1 flex flex-col">
                      <BeakerIcon className="h-6 w-6 mb-4" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2 dark:text-white">Inception to Innovation</h3>
                      <p className="text-gray-600 flex-1 dark:text-white">Empowering businesses with cutting-edge technology to pioneer in the AI era.</p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden dark:bg-blue-400">
                    <div className="p-6 flex-1 flex flex-col">
                      <ChartBarIcon className="h-6 w-6 mb-4" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2 dark:text-white">Data & AI Consulting</h3>
                      <p className="text-gray-600 flex-1 dark:text-white">Specialized consulting in Data, AI, and Infrastructure Systems.</p>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden  dark:bg-rose-400">
                    <div className="p-6 flex-1 flex flex-col">
                      <GlobeAltIcon className="h-6 w-6 mb-4" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2 dark:text-white">Business Transformation</h3>
                      <p className="text-gray-600 flex-1 dark:text-white">Championing Data & AI Initiatives to drive business transformation.</p>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden  dark:bg-green-400">
                    <div className="p-6 flex-1 flex flex-col">
                      <BoltIcon className="h-6 w-6 mb-4" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2 dark:text-white">Cost Efficiency</h3>
                      <p className="text-gray-600 flex-1 dark:text-white">Streamlining Tech Infrastructure for optimal Enterprise cost efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/contactus"
                    className="rounded-md bg-[#4a90e2] px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg
                    hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-blue-600"
                >
                  Get in Touch
                </Link>
                <Link to="/consulting" className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>

            </div>
          </div>
          <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
              sm:top-[calc(100%-30rem)] sm:bottom-60"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-gray-600 dark:to-gray-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
        </div>

      </main>
    </Layout>
  );
}
