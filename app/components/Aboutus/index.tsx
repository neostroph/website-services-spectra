import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About Spectra",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'At Aura Events, we believe every occasion is an opportunity to create something extraordinary. From grand galas to intimate gatherings, we meticulously plan and execute events that reflect your unique vision and leave a lasting impression.',
        link: 'Discover Our Story'
    },
    {
        heading: "Our Services",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'We offer a comprehensive suite of event planning services, including corporate events, weddings, private parties, and virtual experiences. Our team handles everything from venue selection and vendor management to design, logistics, and on-site coordination.',
        link: 'Explore Services'
    },
    {
        heading: "Portfolio ",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Browse through our diverse portfolio of successful events and read what our satisfied clients have to say about working with Aura Events. See how we’ve brought countless ideas to life with creativity and precision.',
        link: 'View Our Work'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;