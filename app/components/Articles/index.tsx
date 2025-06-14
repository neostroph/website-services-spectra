"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "7 min",
        heading: 'Top Trends for',
        heading2: 'Corporate Events in 2025',
        name: "Spectra Events Insights",
        date: 'June 5, 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "6 min",
        heading: 'Planning Your Dream',
        heading2: 'Wedding: A Stress-Free Guide',
        name: "Spectra Events Insights",
        date: 'May 28, 2025',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "8 min",
        heading: 'Creating Unforgettable',
        heading2: 'Themed Parties: Our Secrets',
        name: "Spectra Events Insights",
        date: 'May 20, 2025',
        imgSrc: '/images/articles/article3.png',
    },
    {
        time: "5 min",
        heading: 'Hybrid Events:',
        heading2: 'The Future of Gatherings',
        name: "Spectra Events Insights",
        date: 'April 15, 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "7 min",
        heading: 'Budgeting Tips for',
        heading2: 'Your Next Big Event',
        name: "Spectra Events Insights",
        date: 'March 10, 2025',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "6 min",
        heading: 'Choosing the Perfect',
        heading2: 'Venue for Any Occasion',
        name: "Spectra Events Insights",
        date: 'February 28, 2025',
        imgSrc: '/images/articles/article3.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true, // You might need to adjust this depending on your design needs
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">EVENT INSIGHTS</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Latest Articles & Guides.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="article-image" width={389} height={262} className="inline-block m-auto" />

                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
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