import React from 'react';
import LatestTrends from '../components/LatestTrends';
const HomePage = () => {
    return (
        <div className='bg-image h-screen w-full bg-cover flex flex-col items-center'>
            {/* <div className='w-full flex justify-center'> */}
                <input type='text' className='h-14 w-[70%] md:w-[60%] lg:w-[40%] mt-28 rounded-lg px-3' placeholder='search'/>
            {/* </div> */}

            <div className='h-fit w-[80%] md:w-[70%] lg:w-[50%] mt-6 bg-white shadow-lg px-4 py-2 overflow-y-scroll scrollbar-hide'>
                <div className=''>
                    <div className='font-bold'>Latest Trends</div>
                    <div className='mt-4 flex flex-wrap gap-6'>
                        <LatestTrends />
                        <LatestTrends />
                        <LatestTrends />
                        <LatestTrends />
                        <LatestTrends />
                    </div>
                </div>
                <div className=''>
                    <div className='font-bold mt-4'>Popular suggestions</div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;