import React from 'react'
import { useRouter } from 'next/router'

const Slug=({hotel}) =>{
  const router = useRouter()
    const { slug } = router.query
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">MY-HOTEL-APP</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{hotel.attributes.name}</h1>
        <div className="flex mb-4">
          
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{hotel.attributes.description}</p>
        <p className="title-font mt-3 font-medium text-2xl text-gray-900">{hotel.attributes.contact}</p>
          <p className="title-font mt-3 mr-3 font-medium text-2xl text-gray-900">{hotel.attributes.email}</p>
        <div className="flex">
         

          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Book Now</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
export async function getServerSideProps(context) {
  let headers = {
    Autherization:
      "Bearer 6a03c4e74c8a2db81f636a3cdf372d914ba10a85e4d8422e1412221aa45c659fcc373e3e83c6b84abda3360bd3ca6397566080272ad4fa909abc0dedb8640cd2af4cac501049986b312dea2587e2c6b6e30fe9739a4157d68ddd126af63aad984c9344980701ef1a82198ddbb848bcc4abd94777f68c568e3fb740ebb7b5d02d",
  };
  let a = await fetch("http://localhost:1337/api/hotels?filters[slug]="+context.query.slug, {
    headers: headers,
  });
  let hotel = await a.json();
  
  return {
    props: { hotel: hotel.data[0]},
  };
}
export default Slug