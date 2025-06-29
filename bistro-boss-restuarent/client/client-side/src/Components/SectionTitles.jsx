import React from 'react';

const SectionTitles = ({ heading, subHeading }) => {
    return (
        //  md:w-3/12  chilo
        <div className='w-full md:w-6/12 mx-auto text-center my-8'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='text-4xl border-y-4 py-4 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitles;