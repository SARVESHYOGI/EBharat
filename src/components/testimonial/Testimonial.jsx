/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-green-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa repellendus iusto quae laborum. Reiciendis, incidunt temporibus ipsa eligendi ut quo beatae suscipit dolorem enim aliquam vel id dolor minus deserunt.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lorem, ipsum dolor.</h2>
                                <p className="text-gray-500">Lorem ipsum dolor
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus iusto quae laborum. Reiciendis, incidunt temporibus ipsa eligendi ut quo beatae suscipit dolorem enim aliquam vel id dolor minus deserunt.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">lorem</h2>
                                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eius pariatur ullam. Expedita eligendi excepturi, blanditiis, perspiciatis non veniam numquam pariatur quos possimus officiis quaerat? Voluptatem corrupti magnam dicta minus..</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2>
                                <p className="text-gray-500">lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial