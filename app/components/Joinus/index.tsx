const Join = () => {
    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">GET STARTED</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Let's Plan Your Next <br /> Unforgettable Event.</h2>
                    <p className="text-lightblack text-base font-normal">
                        Ready to bring your vision to life? Tell us about your event, and our team at **Spectra Events** <br /> will get in touch to discuss how we can create a truly spectacular experience.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="text" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" autoComplete="name" />
                        </div>
                        <div>
                            <input type="email" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" autoComplete="email" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-auto text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Start Planning!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;