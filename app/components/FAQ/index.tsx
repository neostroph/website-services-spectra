"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>YOUR QUESTIONS, ANSWERED</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Frequently Asked <br /> Questions About Event Planning.</h2>
            <div className="w-full px-4 pt-16">
                {/* FAQ Item 1 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>What types of events does Spectra Events specialize in?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    At Spectra Events, we specialize in a wide range of events, including corporate gatherings (conferences, product launches, galas), personal celebrations (weddings, anniversaries, birthdays), and unique themed parties. We&#39;re equipped to handle both large-scale productions and intimate affairs.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                {/* FAQ Item 2 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>How does your event planning process work?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Our process begins with an initial consultation to understand your vision, objectives, and budget. From there, we move to concept development, followed by detailed planning and vendor selection. We manage all logistics, from timelines to on-site coordination, ensuring a seamless and stress-free experience for you.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                {/* FAQ Item 3 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Can you work within a specific budget?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Absolutely! We pride ourselves on creating incredible events for various budgets. During our initial consultation, we&#39;ll discuss your financial parameters in detail. We&#39;ll then provide creative solutions and work diligently to maximize your budget while delivering an unforgettable experience.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                {/* Add more FAQ items as needed */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mt-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Do you offer virtual or hybrid event planning services?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Yes, Spectra Events is experienced in planning and executing successful virtual and hybrid events. Whether you need a fully online conference or a blended event with both in-person and remote attendees, we have the expertise and technology partners to ensure a seamless experience.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
