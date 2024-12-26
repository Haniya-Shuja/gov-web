


// components/Card.js
import Image from 'next/image';

const Courses = () => {
  return (
    <section className="p-8">
      <h1 className='text-4xl font-bold text-blue-800 ml-4'>Core Courses Sequences</h1>
      <br/>
      <br/>
      <div className="flex space-x-16"> {/* Flex container */}
        <div className="card border border-gray-400 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/cor1.jpg"
              alt="Card image cap"
              width={700}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text  text-2xl text-bold text-gray-700">
             Fundamentals programming
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/cor2.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
           Web2 using nextjs
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/cor3.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
           Earn as you learn
            </p>
          </div>
        </div>
      </div>
      <br/>
      <br/>

     {/* advance courses */}

     <h1 className='text-4xl font-bold text-blue-800 ml-4'>Advance Courses</h1>
     <br/>
     <br/>
  
      <div className="flex space-x-16"> {/* Flex container */}
        <div className="card border border-gray-400 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv1.jpg"
              alt="Card image cap"
              width={700}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text  text-2xl text-bold text-gray-700">
            Artificial Intelligence
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv2.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
           WEB3 and Metaverse 
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv3.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
          Cloud Native Computing            </p>
          </div>
        </div>
      </div>


{/* 2nd row */}
<br/>
<br/>

<div className="flex space-x-16"> {/* Flex container */}
        <div className="card border border-gray-400 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv4.jpg"
              alt="Card image cap"
              width={700}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text  text-2xl text-bold text-gray-700">
             Ambient computing and IOT
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv5.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
            Genomic and bioinformative 
            </p>
          </div>
        </div>

        <div className="card border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="card-img-top">
            <Image
              src="/image/adv6.jpg"
              alt="Card image cap"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="card-body p-6">
            <p className="card-text text-2xl text-bold text-gray-700">
            Network Programmablity and Automation 
            </p>
          </div>
        </div>
      </div>


      

    </section>
  );
};

export default Courses;

