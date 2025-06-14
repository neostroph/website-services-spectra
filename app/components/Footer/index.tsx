import Image from "next/image";
import Link from "next/link";

// FOOTER LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const footerLinks: ProductType[] = [
    {
        id: 1,
        section: "Quick Links",
        link: ['Home', 'Services', 'About Us', 'Contact'],
    },
    {
        id: 2,
        section: "Event Types",
        link: ['Weddings', 'Corporate', 'Social Gatherings', 'Virtual Events']
    },
    {
        id: 3,
        section: "Resources",
        link: ['FAQs', 'Blog', 'Portfolio']
    },
    {
        id: 4,
        section: "Connect",
        link: ['Careers', 'Partnerships']
    }
]

const Footer = () => { // Renamed from 'footer' to 'Footer' for consistency
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1: Company Name and Social Icons */}
                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>Spectra Events</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                                    <Image src={'/images/footer/vec.svg'} alt="facebook icon" width={15} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                                    <Image src={'/images/footer/twitter.svg'} alt="twitter icon" width={20} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram icon" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNS 2/3/4/5 (using col-span-2 for each) */}
                    {footerLinks.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>
                                &copy; {new Date().getFullYear()} - All Rights Reserved by <Link href="/" className="text-blue hover:text-white">Neostroph</Link>
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/privacy-policy">
                                <h3 className="text-offwhite pr-6">Privacy Policy</h3>
                            </Link>
                            <Link href="/terms-conditions">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & Conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;