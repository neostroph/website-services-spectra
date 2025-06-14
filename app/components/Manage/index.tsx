"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';

const eventPackages = [
    // Personal Event Packages (corresponds to 'personal' category)
    {
        heading: "Celebration Essentials",
        price: 1200,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'Initial Consultation & Concept',
        feature2: 'Venue Selection Assistance',
        feature3: 'Basic Vendor Coordination',
        feature4: 'Day-of Event Timeline',
        feature5: 'Email Support',
        category: 'personal' // When enabled is false (default)
    },
    {
        heading: "Signature Soirée",
        price: 3500,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'In-depth Planning & Design',
        feature2: 'Full Venue & Vendor Management',
        feature3: 'Custom Decor & Styling',
        feature4: 'On-site Event Supervision',
        feature5: 'Dedicated Event Planner',
        category: 'personal' // When enabled is false (default)
    },
    {
        heading: "Grand Gala",
        price: 7500,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'Bespoke Event Production',
        feature2: 'Elite Venue & Vendor Access',
        feature3: 'Luxury Design & Theming',
        feature4: 'Full Logistics & On-site Team',
        feature5: '24/7 VIP Support',
        category: 'personal' // When enabled is false (default)
    },

    // Corporate Event Packages (corresponds to 'corporate' category)
    {
        heading: "Business Connect",
        price: 1800,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'Objective & Budget Planning',
        feature2: 'Conference Room Setup',
        feature3: 'Basic A/V & Presentation Support',
        feature4: 'Attendee Registration Management',
        feature5: 'On-site Coordination',
        category: 'corporate' // When enabled is true
    },
    {
        heading: "Executive Summit",
        price: 4900,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'Strategic Event Design',
        feature2: 'Venue & Logistics Management',
        feature3: 'Advanced A/V & Staging',
        feature4: 'Speaker & Content Coordination',
        feature5: 'Dedicated Corporate Event Manager',
        category: 'corporate' // When enabled is true
    },
    {
        heading: "Industry Leader",
        price: 9900,
        user: 'starting price per event',
        button: "Request a Quote",
        feature1: 'Full-Service Corporate Production',
        feature2: 'Premium Venue & Partnership Access',
        feature3: 'Experiential Marketing & Branding',
        feature4: 'Complex Logistics & Multi-day Support',
        feature5: 'Priority 24/7 Corporate Support',
        category: 'corporate' // When enabled is true
    },
];

const Manage = () => {

    const [enabled, setEnabled] = useState(false);
    // Initial category set to 'personal' as default (when switch is off)
    const [selectedCategory, setSelectedCategory] = useState('personal');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        // Toggle between 'personal' and 'corporate'
        setSelectedCategory(enabled ? 'personal' : 'corporate');
    }

    const filteredData = eventPackages.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Choose the Perfect Package <br /> for Your Event.</h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="checkmark-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Personalized Consultation</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="checkmark-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Creative Design Solutions</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="checkmark-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Seamless Execution</h4>
                    </div>
                </div>

                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>Find the ideal service for you.</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Personal Events</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Toggle Event Type</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Corporate Events</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.feature1}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.feature2}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.feature3}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.feature4}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.feature5}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;