// import React from 'react'
// import Image from 'next/image'

// const Slider = () => {
//   return (
//     <div>
//     <Image alt="President launching the PIAIC website." loading="lazy" width="1156" height="521" 
    
//     decoding="async" data-nimg="1" className="w-full h-[300px]  md:h-[600px] object-cover" 
//     src="/image/init1.jpg"/>
//     <Image alt="President launching the PIAIC website." loading="lazy" width="1156" height="521" 
    
//     decoding="async" data-nimg="1" className="w-full h-[300px]  md:h-[600px] object-cover" 
//     src="/image/init2.jpg"/>
//     <Image alt="President launching the PIAIC website." loading="lazy" width="1156" height="521" 
    
//     decoding="async" data-nimg="1" className="w-full h-[300px]  md:h-[600px] object-cover" 
//     src="/image/init3.jpg"/>
//     <Image alt="President launching the PIAIC website." loading="lazy" width="1156" height="521" 
    
//     decoding="async" data-nimg="1" className="w-full h-[300px]  md:h-[600px] object-cover" 
//     src="/image/init4.jpg"/>
//         </div>
//   )
// }

// export default Slider

// 'use client';  // Ensure the component is client-side

// import React from 'react';
// import dynamic from 'next/dynamic';
// import Image from 'next/image';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Import Swiper components and modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper';

// // Alternatively, dynamically import Swiper if needed
// // const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// // const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// const Slider = () => {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]} // Use the imported modules here
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <Image
//           alt="President launching the PIAIC website."
//           loading="lazy"
//           width="1156"
//           height="521"
//           decoding="async"
//           className="w-full h-[300px] md:h-[600px] object-cover"
//           src="/image/init1.jpg"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <Image
//           alt="President launching the PIAIC website."
//           loading="lazy"
//           width="1156"
//           height="521"
//           decoding="async"
//           className="w-full h-[300px] md:h-[600px] object-cover"
//           src="/image/init2.jpg"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <Image
//           alt="President launching the PIAIC website."
//           loading="lazy"
//           width="1156"
//           height="521"
//           decoding="async"
//           className="w-full h-[300px] md:h-[600px] object-cover"
//           src="/image/init3.jpg"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <Image
//           alt="President launching the PIAIC website."
//           loading="lazy"
//           width="1156"
//           height="521"
//           decoding="async"
//           className="w-full h-[300px] md:h-[600px] object-cover"
//           src="/image/init4.jpg"
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default Slider;
