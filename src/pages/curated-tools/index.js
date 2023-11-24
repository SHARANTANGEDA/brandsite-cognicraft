import React, {useEffect, useState} from 'react';
import { useAllDocsData,useDocsData } from '@docusaurus/plugin-content-docs/client';

import curatedToolsData from '../../curatedToolsData.json';
import {ToolSearchBar, ToolSearchBarV2} from "../../components/CuratedTools/ToolSearchBar";
import {ToolFilters} from "../../components/CuratedTools/ToolFilters";
import {ToolGrid} from "../../components/CuratedTools/ToolGrid";
import {ToolPagination} from "../../components/CuratedTools/ToolPagination";
import uniqueValuesFromListOfObjects from "../../utils/common";
import Layout from "@theme/Layout";


function CategoriesPage() {
    const docsData = useDocsData('curated-tools');
    const [tools, setTools] = useState(curatedToolsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: [], clouds: [], isOss: [] });
    const [filteredTools, setFilteredTools] = useState(tools);

    const [categories, setCategories] = useState([]);
    const [clouds, setClouds] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const toolsPerPage = 10; // or any other number

    useEffect(() => {
        const lowerCasedSearchTerm = searchTerm.toLowerCase();

        const filtered = tools.filter((tool) => {
            const matchesSearchTerm = tool.title.toLowerCase().includes(lowerCasedSearchTerm)
                || tool.description.toLowerCase().includes(lowerCasedSearchTerm)
            const matchesCategory = filters.category.length > 0 ? filters.category.includes(tool.category)  : true;
            const matchesIsOss = filters.isOss.length > 0 ?  filters.isOss.includes(String(tool.isOss)) : true;
            const matchesClouds = filters.clouds.length > 0 ? filters.clouds.every(cloud => tool.clouds.includes(cloud)) : true;

            return matchesSearchTerm && matchesCategory && matchesIsOss && matchesClouds;
        });

        setFilteredTools(filtered);

        setCategories(uniqueValuesFromListOfObjects(curatedToolsData, 'category'));
        setClouds(uniqueValuesFromListOfObjects(curatedToolsData, 'clouds')); // Assuming this function can handle nested arrays

        const start = currentPage * toolsPerPage;
        const end = start + toolsPerPage;
        setFilteredTools(filtered.slice(start, end));

    }, [searchTerm, filters, tools, setCategories, setClouds, currentPage]);


    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(tools.length / toolsPerPage);

    console.log(docsData['versions'][0]['docs'])
    console.log(curatedToolsData)



    return (<Layout
            title={`cognicraft.tech | Curated Products}`}
            description="Description will go into a meta tag in <head />">
            <div className="flex flex-row align-baseline items-baseline justify-center">

                <ToolFilters
                    categories={categories}
                    clouds={clouds}
                    onFilterChange={handleFilterChange}
                />
                <ToolSearchBarV2 onSearch={handleSearch} />
            </div>


            <ToolGrid tools={filteredTools} />
            <ToolPagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />

        </Layout>
        // Your JSX code to display categories and documents
    );
}

export default CategoriesPage;
