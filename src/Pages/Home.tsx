import Waves from "../components/Waves/Waves";

function Home() {

  return (
    <>
      <div className="container-fluid flex justify-evenly items-center min-h-screen flex-col lg:flex-row">

        <div className="p-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-red-800 mb-4">Krut AI</h2>


          <hr />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-800 my-4">Launching Soon!</h2>
          <p className='text-xl'>We are working round the clock on our awesome product.</p>
          <p className='text-xl'>Stay Tuned..!</p>

          <div className="flex my-4">
            <a href="https://www.facebook.com/krut-ai/" target="_blank"> <img src="/images/facebook.png" alt="facebook" className="w-6 me-2" /></a> |
            <a href="https://www.instagram.com/_krut.ai/" target="_blank"> <img src="/images/instagram.png" alt="instagram" className="w-6 mx-2" /></a> |
            <a href="https://www.linkedin.com/company/krut-ai/" target="_blank">  <img src="/images/linkedin.png" alt="linkedin" className="w-6 mx-2" /> </a> |
            <a href="https://www.youtube.com/krut-ai/" target="_blank">   <img src="/images/youtube.png" alt="youtube" className="w-6 mx-2" /> </a> 
          </div>
        </div>

        <div className="">
          <img className="h-[360px] sm:h-[460px] lg:h-[700px]" src="/images/rocket.png" alt="rocket" />
        </div>
        <div className="container-fluid w-full absolute bottom-0 -z-40">
          <Waves />
        </div>
      </div>



    </>
  )
}

export default Home