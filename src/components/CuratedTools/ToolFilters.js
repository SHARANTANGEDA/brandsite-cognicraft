import Select from 'react-select';

export const ToolFilters = ({ categories, clouds, onFilterChange }) => {
    const handleMultiSelectChange = (selectedOptions, filterType) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        onFilterChange(filterType, values);
    };

    // Convert options for react-select
    const categoryOptions = categories.map(category => ({ value: category, label: category }));
    const cloudOptions = clouds.map(cloud => ({ value: cloud, label: cloud }));

    return (
        <div className="flex flex-row flex-wrap gap-4 my-4">
            <div>
                <Select
                    isMulti
                    options={categoryOptions}
                    className="w-full"
                    placeholder="Select Categories"
                    onChange={(selectedOptions) => handleMultiSelectChange(selectedOptions, 'category')}
                />
            </div>

            <div>
                <Select
                    isMulti
                    options={cloudOptions}
                    className="w-full"
                    placeholder="Select Clouds"
                    onChange={(selectedOptions) => handleMultiSelectChange(selectedOptions, 'cloud')}
                />
            </div>

            <div>
                <Select
                    isMulti
                    options={[
                        { value: 'true', label: 'Open Source' },
                        { value: 'false', label: 'Proprietary' }
                    ]}
                    className="w-full"
                    placeholder="Select Types"
                    onChange={(selectedOptions) => handleMultiSelectChange(selectedOptions, 'isOss')}
                />
            </div>

        </div>
    );
};
