"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA (Team Members)

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const teamData: DataType[] = [
    {
        profession: 'Founder & Lead Planner',
        name: 'Eleanor Vance',
        imgSrc: '/images/wework/avatar.svg', // Assuming these avatars are generic enough or you'll replace them
    },
    {
        profession: 'Head of Corporate Events',
        name: 'Marcus Bell',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Creative Director',
        name: 'Sophia Chang',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Logistics Manager',
        name: 'David Rossi',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Client Relations Specialist',
        name: 'Isabella Perez',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Venue Partnerships',
        name: 'Liam Foster',
        imgSrc: '/images/wework/avatar4.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000, // Speed of the autoplay scroll
            autoplaySpeed: 2000, // Pause between slides
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
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Meet the Visionaries Behind Spectra Events.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Our Dedicated Team, Your Event Architects.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Passionate Experts Crafting Perfection.</h3>
                    </div>

                </div>

                <Slider {...settings}>
                    {teamData.map((items, i) => ( // Changed postData to teamData
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt={`${items.name}'s avatar`} width={182} height={182} className="inline-block m-auto" />
                                    {/* Consider if the LinkedIn icon is necessary here, or if it makes more sense on a dedicated 'Team' page.
                                        If it's meant to be a social link, you might want to wrap it in a Link component. */}
                                    {/* <Image src={'/images/wework/linkedin.svg'} alt="linkedin icon" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}