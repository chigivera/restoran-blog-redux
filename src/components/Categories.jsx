import React from 'react';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
    const handleSelectCategory = (id) => {
        if (selectedCategory === id) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(id);
        }
    };

    return (
        <div className='categories ml-2 flex flex-wrap max-w-xs p-6 w-fit bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            {categories.map((category) => (
                <span
                    key={category.id}
                    onClick={() => handleSelectCategory(category.id)}
                    className={`${selectedCategory === category.id ? 'bg-blue-500 dark:bg-gray-500' : 'bg-gray-100 dark:bg-gray-700'} text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full cursor-pointer`}
                >
                    {category.name}
                </span>
            ))}
        </div>
    );
};

export default Categories