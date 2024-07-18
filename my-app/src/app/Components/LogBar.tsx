import React from 'react';
import VerticalTimeline from '../Components/Timeline';
function LogBar() {
    const events = [
        {
          Time: '9:01 AM',
          title: 'Event 1',
          description: '195 Travelling North',
          xcod: '25 30 0.00" S  ',
          ycod: '51 48 0.00" W  ',
          image: './images/LogBar/Timeline/Truck.png',
        },
        {
            Time: '9:11 AM',
            title: 'Event 2',
            description: '188 Travelling South',
            xcod: '25 30 0.00" S  ',
            ycod: '51 48 0.00" W  ',
            image: './images/LogBar/Timeline/Truck2.png',

        },
        {
            Time: '10:22 AM',
            title: 'Event 3',
            description: '201 Travelling West',
            xcod: '25 30 0.00" S  ',
            ycod: '51 48 0.00" W  ',
            image: './images/LogBar/Timeline/image 21.png',

        },
        {
            Time: '10:24 AM',
            title: 'Event 4',
            description: '166 Travelling North-West',
            xcod: '25 30 0.00" S  ',
            ycod: '51 48 0.00" W  ',
            image: './images/LogBar/Timeline/car.png',

        },
        {
            Time: '10:28 AM',
            title: 'Event 5',
            description: '153 Travelling North',
            xcod: '25 30 0.00" S  ',
            ycod: '51 48 0.00" W  ',
            image: './images/LogBar/Timeline/Truck.png',

        },
        {
            Time: '11:01 AM',
            title: 'Event 6',
            description: '225 Travelling South-East',
            xcod: '25 30 0.00" S  ',
            ycod: '51 48 0.00" W  ',
            image: './images/LogBar/Timeline/Truck.png',


        },
      ];
    return (
        <aside className="fixed top-10 right-1 h-full bg-gray-800 bg-opacity-30 text-white" style={{ width: '26rem' }}>
            <div className="p-4 mt-5">
                <div className="flex items-center mb-1">
                    <img src="./images/Group.png" alt="Group Icon" className="mr-2 mt-1"  />
                    <p className="text-xs">SentinelEye</p>
                    <img src="./images/LogBar/Frame 1909.png" className="mx-1 ml-24" /> 
                    <img src="./images/LogBar/Line 224.png" className="mx-1" /> 
                    <img src="./images/LogBar/Frame 1911.png" className="" /> 
                    <img src="./images/LogBar/Line 225.png" className="mx-1" /> 
                    <img src="./images/LogBar/Frame 1913.png" className="mx-0" />
                    <img src="./images/LogBar/dock.png" className="mx-5" />
                </div>
                <div className="ml-6 mb-7">
                    <img src = './images/Main ODJ.png'/>
                </div>
                <div className="flex items-center  mb-3 mt-4 relative">
                 <img src="./images/LogBar/GraphVector.png" className="mr-1 " />
                 <div className="absolute top-1/2 transform -translate-y-1/2">
                      <img src="./images/LogBar/Rectangle 1487.png" className="m-0 ml-20" /> 
                      <img src="./images/LogBar/Rectangle 1488.png" className="ml-40" /> 
                      <img src="./images/LogBar/Rectangle 1485.png" className="ml-44" /> 
                      <img src="./images/LogBar/Rectangle 1484.png" className="ml-48" /> 
                      <img src="./images/LogBar/Rectangle 1484.png" className="ml-72" /> 
                      <img src="./images/LogBar/Rectangle 1484.png" className="ml-80" /> 
                      <img src="./images/LogBar/Rectangle 1486.png" className="mx-2 mb-3" /> 
                      <img src="./images/LogBar/Rectangle 1487.png" className="m-0 ml-60" /> 
                      <img src="./images/LogBar/Rectangle 1487.png" className="m-0 ml-6" /> 
                      <img src="./images/LogBar/Rectangle 1487.png" className="m-0 mt- ml-96" /> 


                 </div>
               </div>
                <div>
                {/* <img src="./images/LogBar/Timeline/Line 213.png" className="mx-2 mb-1" />  */}
                   <VerticalTimeline events={events} />
                </div>

            </div>
        </aside>
    );
}

export default LogBar;
