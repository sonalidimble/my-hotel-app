import Image from "next/image";
import Link from "next/link";
import React from "react";
import useFetch from "./hooks/useFetch";

const hotels = (props) => {
  // const { loading, error, data } = useFetch('http://localhost:1337/api/hotels/')

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error</p>

  // console.log(data)

  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Restaurants-My-Hotel-App
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.hotels.data.map((item) => {
              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={ item.attributes.image && item.attributes.image.attributes.name}
                      alt="content"
                    />
                   
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.attributes.name}
                    </h2>
                    <p className="leading-relaxed text-base">
                    {item.attributes.description}
                    </p>
                     <p className="leading-relaxed text-base">
                    {item.attributes.contact}
                    </p>
                    <p className="leading-relaxed text-base">
                    {item.attributes.email}
                    </p>
                    <Link href={`/hotels/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">View More</button></Link>

                  </div>
                </div>
             );
             })} 
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Autherization:
      "Bearer 6a03c4e74c8a2db81f636a3cdf372d914ba10a85e4d8422e1412221aa45c659fcc373e3e83c6b84abda3360bd3ca6397566080272ad4fa909abc0dedb8640cd2af4cac501049986b312dea2587e2c6b6e30fe9739a4157d68ddd126af63aad984c9344980701ef1a82198ddbb848bcc4abd94777f68c568e3fb740ebb7b5d02d",
  };
  let a = await fetch("http://localhost:1337/api/hotels/", {
    headers: headers,
  });
  let hotels = await a.json();
  console.log(hotels);
  return {
    props: { hotels: hotels },
  };
}
export default hotels;
