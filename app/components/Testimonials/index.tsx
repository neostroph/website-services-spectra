"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Sarah Chen",
        profession: 'Marketing Director, TechSolutions Inc.',
        comment: 'Spectra Events turned our annual corporate gala into an absolute triumph! Their attention to detail, innovative ideas, and flawless execution made it our most successful event yet. Truly exceptional service.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "David Rodriguez",
        profession: 'Wedding Client',
        comment: 'Our wedding day was everything we dreamed of and more, thanks to Spectra Events. They handled every single detail, allowing us to relax and cherish every moment. Highly recommend their magic touch!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Emily White",
        profession: 'Founder, Creative Spark Agency',
        comment: 'When we needed a partner for our product launch, Spectra Events delivered beyond expectations. Their team was professional, creative, and managed every aspect seamlessly. A truly brilliant experience!',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "James Miller",
        profession: 'HR Manager, Global Logistics',
        comment: 'Organizing our company retreat seemed daunting until we partnered with Spectra Events. They made the entire process enjoyable and the event itself was perfectly organized and incredibly engaging for our team.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Olivia Davis",
        profession: 'Birthday Celebration Client',
        comment: 'Spectra Events created the most stunning 50th birthday party for me! The theme, the decor, the entertainment – it was all perfectly tailored and executed. My guests are still talking about it!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Michael Brown",
        profession: 'Event Coordinator, City Arts Council',
        comment: 'Working with Spectra Events on our annual fundraiser was a game-changer. Their expertise in logistics and vendor management ensured everything ran smoothly, allowing us to focus on our guests and mission.',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Hear From Our Happy Clients.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Real Experiences, Real Successes.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Your Vision, Our Expertise.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}