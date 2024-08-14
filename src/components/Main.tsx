
function Main() {

    const backgroundImageStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1634549709262-508c47d4c229?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBnb2xkfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    };
    return (
        <>
            <div className="container-fluid" style={backgroundImageStyle}>

                <div className="max-w-5xl mx-auto">
                    <section className="flex flex-col-reverse justify-center sm:flex-row p-6 pb-0 items-center sm:gap-8 mb-12 scroll-mt-20">
                        <div className="sm:w-1/2">
                            <h2 className="max-w-md py-3 text-3xl sm:text-4xl font-bold text-center sm:text-left text-golden hover:opacity-80">
                                “Learn beyond the box with us.”
                            </h2>
                            <p className="max-w-md text-md my-4 text-center sm:text-left text-white">
                                Our goal is to provide practical-focused courses to commerce students and help them get jobs at top companies.
                            </p>
                        </div>

                        <img className="w-64 sm:w-1/2 zoomEffect mb-0 pb-0" src="/images/rocket.png" alt="Banner" />

                    </section>
                </div>

            </div>
        </>
    )
}

export default Main