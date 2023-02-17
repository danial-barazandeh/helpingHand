import Card from "./card";

export default function WhyUs() {
  return (
    <div className='relative'>



      <div className='px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
       absolute left-0 right-0 top-0 '>
        <div className='bg-accent bg-opacity-25 rounded-2xl w-full h-[20vh] -rotate-2'>
          .
        </div>
      </div>
      <div className='px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
        mt-0 sm:mt-0 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 relative '>
        <div className='bg-accent rounded-2xl w-full h-[20vh]'>

          <div className='flex flex-col'>

            <div className='px-8'>
              <div className='text-white border-b-4 border-antiAcent py-4 w-[100px]'>
                Why us ?
              </div>
            </div>

            <div className='pt-12 flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12'>


              <div className="bg-white bg-[url('/images/whyus.png')] bg-contain bg-center bg-no-repeat rounded-2xl shadow-md
                        hidden sm:hidden md:hidden lg:flex flex-col justify-center
                        w-[150px] h-[150px]">
              </div>

              <Card title="Rescue" content="We provide free shelter and treatment to pets."></Card>
              <Card title="Pet" content="We help animals find loving owners."></Card>
              <Card title="Family" content="We help you to find yourself a smaller furry friend."></Card>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
}