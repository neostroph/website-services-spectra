import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">At Spectra Events, we believe you deserve <br /> nothing less than perfection.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Our dedicated team is committed to bringing your vision to life, ensuring every detail of your event is flawlessly executed.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
            </div>
        </div>
    )
}

export default index;
