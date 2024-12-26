import React from 'react'
import Image from 'next/image'

const Cards = () => {
  return (
   <section>
    <div>
        <h1 className='mt-8 ml-14 text-4xl font-bold text-blue-900 text-center mr-12 ' style={{ fontFamily: 'Arial, sans-serif' }}>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
    
             Developing Billion-Dollar Valued Developers and Solopreneurs </h1>
             


             <br/>
             <p className='mt-8 mb-8 ml-8 text-xl text-bold text-center mr-8'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI 
                are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences,
                 and massive distribution networks. Solopreneurs trained in this program will win by automating work typically
                  outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing 
                  vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses.
                   This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs 
                   will adopt the ultra-lean business model and work independently 
                and will not need to hire employees or other team members.</p>
    </div>
    <div className='flex p-2 m-4'>


    <Image  alt="solo1"  width="1088" height="96"  
    className=" rounded-lg h-[300px] object-cover w-full m-2" 
    src="/image/pic1.jpg"/>


<Image  alt="solo1"  width="1088" height="896" 
    className="  rounded-lg h-[300px] object-cover w-full m-2" 
    src="/image/pic2.jpg"/>

     <Image  alt="solo1"  width="1088" height="896" 
    className="  rounded-lg h-[300px] object-cover w-full m-2" 
    src="/image/pic3.jpg"/>
    
    </div>
    </section>
 


  )
}

export default Cards