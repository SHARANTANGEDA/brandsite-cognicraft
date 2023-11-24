import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

export const ToolSearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search tools..."
            onChange={(e) => onSearch(e.target.value)}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
    );
};

export const ToolSearchBarV2 = ({ onSearch }) => {
    return (

        <div className="flex items-center ml-2 w-1/3">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <MagnifyingGlassIcon className="text-black h-6 w-6" aria-hidden="true"/>
                </div>
                <input type="text" onChange={(e) => onSearch(e.target.value)} id="simple-search"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search product ..." required/>
            </div>
        </div>
    )
};
