import {Chip} from "@nextui-org/react";
import {BsGithub} from "react-icons/bs";
import {IoMdOpen} from "react-icons/io";

export const ToolCard = ({ tool }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 dark:bg-black max-w-1/4">
            <div className="flex justify-center">
                <img  src="/tools/databricks.svg" height={240} alt="Logo" />
            </div>
            <div className="px-6 py-4">
                <div className="flex flex-row justify-between">
                    <div className="font-bold text-xl mb-2">{tool.title}</div>
                    <span className="inline-block ring-2 ring-blue-700  rounded-md
                    px-2 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:ring-white">
                    {tool.category}
                    </span>
                </div>

                <p className="text-gray-700 antialiased font-sans text-base dark:text-gray-100">{tool.description}</p>

            </div>
            <div className="px-6 pt-4 pb-1">
                {tool.clouds.map((cloud, index) => (
                    <span key={index} className="inline-block ring-2 ring-yellow-500 bg-white rounded-lg
                    px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-600 dark:text-white">
            {cloud.toUpperCase()}

          </span>
                ))}
            </div>
            <div className="mt-1 flex items-center justify-center">
                <div className="flex items-center justify-center gap-x-6 mb-2 mr-3">
                    {tool.isOss ? <a className=" ml-2 rounded-md ring-2 ring-black px-2.5 py-1.5 font-semibold
                     text-black dark:text-white dark:ring-white flex flex-row justify-between" href={tool.github} target="_blank">
                        <BsGithub className="mr-2 text-black dark:text-white mt-0.5" size={20} /> Source
                    </a>: <a className=" ml-2 rounded-md bg-blue-700 px-2.5 py-1.5 font-semibold
                     text-white flex flex-row justify-between" href={tool.website}
                             target="_blank"> Visit
                        <IoMdOpen className="text-white ml-2 mt-1" size={20} />
                    </a>}

                </div>
                <div className="flex items-center justify-center gap-x-6 mb-2 mr-3">
                <a href="#" className="text-sm rounded-md px-2.5 py-1.5 font-semibold leading-6
                text-blue-700 dark:text-blue-400">
                    Learn more <span aria-hidden="true">→</span>
                </a>
                </div>
                            </div>
        </div>
    );
};
