import Layout from '@theme/Layout';
import {AiOutlineExperiment} from "react-icons/ai";
import {MdOutlineSavings, MdOutlineSmartToy} from "react-icons/md";
import {BiData} from "react-icons/bi";
import {FaDocker} from "react-icons/fa";
import {GiMeshNetwork} from "react-icons/gi";
import {MyCalendlyBanner} from "../../components/MyCalendlyBanner";


const ServiceCard = ({ title, description, height, logo, bgColor, borderColor, textColor,
                       darkBgColor, darkBorderColor, darkTextColor  }) => {
  const classNames = `dark:${darkBgColor} dark:${darkBorderColor} dark:${darkTextColor} card mb-4 ${bgColor} 
    ${borderColor} border h-60 flex flex-col justify-center`
  return (
  <div className={classNames}>

    {logo}

    <div className="card-body p-4">
      <h2 className={`h4 text-lg ${textColor} dark:${darkTextColor}`}>{title}</h2>
      <p className={`${textColor} dark:${darkTextColor}`}>{description}</p>
    </div>
  </div>
  )
};
export default function OurServices() {
  const services = [
    {
      title: "MLOps & LLMOps",
      description: "Enabling the best MLOps practices and tooling for your organization, boosting the productivity of data teams and reducing time-to-live for ML projects by upto 100x",
      height: "250px",
      logo: <AiOutlineExperiment className=" m-2 text-blue-800 dark:text-blue-200" size={64}/>,
      bgColor: "bg-blue-100", // Light mode background color
      borderColor: "border-blue-200", // Light mode border color
      textColor: "text-blue-800", // Light mode text color
      darkBgColor: "bg-blue-900", // Dark mode background color
      darkBorderColor: "border-blue-800", // Dark mode border color
      darkTextColor: "text-blue-200" // Dark mode text color
    },
    {
      title: "Machine Learning",
      description: "Implementation of end-to-end ML Models & LLMs for elevating your business potential. We help you in the journey from advising the best strategy to building chatbots, recommendation systems or automation of workflows",
      height: "250px",
      logo: <MdOutlineSmartToy className=" m-2 text-green-800 dark:text-green-200" size={64}/>,
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      darkBgColor: "bg-green-900",
      darkBorderColor: "border-green-800",
      darkTextColor: "text-green-200"
    },
    {
      title: "Data Platform & DataOps",
      description: "Struggling to evaluate the best data strategy or optimizing the data workflows?, We help in enabling the data platform that suits your business needs with low TATs. (Customized, OSS, Hybrid or Vendor Partnerships)",
      height: "250px",
      logo: <BiData className=" m-2 text-yellow-800 dark:text-yellow-200" size={64}/>,
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      darkBgColor: "bg-yellow-900",
      darkBorderColor: "border-yellow-800",
      darkTextColor: "text-yellow-200"
    },
    {
      title: "Kubernetes & DevOps",
      description: "Streamlining the dev cycles and enabling smoother releases with shadow/canaries & automated monitoring setups. Going multi-cloud?, we can help in evolving your kubernetes cluster to allow seamless multi-region and multi-cloud deployments",
      height: "300px",
      logo: <FaDocker className=" m-2 text-red-800 dark:text-red-200" size={64}/>,
      bgColor: "bg-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      darkBgColor: "bg-red-900",
      darkBorderColor: "border-red-800",
      darkTextColor: "text-red-200",
    },
    {
      title: "Infrastructure",
      description: "Building a new startup or scaling your existing business?. We can bootstrap your cloud, on-prem or hybrid DCs with cross-cloud communication, multi-region VPNs, monitoring setups, hosting internal and external platforms with no cost overhead",
      height: "300px",
      logo: <GiMeshNetwork className=" m-2 text-purple-800 dark:text-purple-200" size={64}/>,
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      darkBgColor: "bg-purple-900",
      darkBorderColor: "border-purple-800",
      darkTextColor: "text-purple-200",
    },
    {
      title: "Optimizing Tech Costs",
      description: "Curious to know how much can you save on your cloud bills or tech infrastructure?. We help in setting up the optimal scaling practices for SQL, No-SQL databases and other components while suggesting cost-effective alternatives wherever applicable",
      height: "300px",
      logo: <MdOutlineSavings className=" m-2 text-pink-800 dark:text-pink-200" size={64}/>,
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-800",
      darkBgColor: "bg-pink-900",
      darkBorderColor: "border-pink-800",
      darkTextColor: "text-pink-200",
    }
  ];


  return (
    <Layout
      title={`cognicraft.tech | Consulting`}
      description="Our Services | Our area of expertise in providing consulting">
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
            <div className="col-lg-24 text-center">
              <h2 className="mt-0">Our Services</h2>
            </div>
          <MyCalendlyBanner />

          <div className="container mx-auto flex justify-center w-full">
            <div className="grid justify-center items-center text-center w-full md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                  <div className="flex justify-center" key={index}>
                    <ServiceCard {...service} />
                  </div>
              ))}
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
