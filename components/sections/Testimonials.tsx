// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { testimonials } from "@/lib/data";
// import { Container } from "@/components/ui/container";

// export function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const currentTestimonial = testimonials[currentIndex];

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 200 : -200,
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -200 : 200,
//       opacity: 0
//     })
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-neutral-900 to-black overflow-hidden">
//       <Container>
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             What Our Community Says
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Join thousands of sneakerheads who trust VYCE for authentic, exclusive footwear.
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//               className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800"
//             >
//               <div className="flex items-center mb-8">
//                 <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
//                   <Image 
//                     src={currentTestimonial.avatar}
//                     alt={currentTestimonial.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">
//                     {currentTestimonial.name}
//                   </h3>
//                   <p className="text-gray-400">{currentTestimonial.role}</p>
//                 </div>
//                 <div className="ml-auto flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i}
//                       size={16}
//                       fill={i < currentTestimonial.rating ? "#EF4444" : "none"}
//                       className={i < currentTestimonial.rating ? "text-red-500" : "text-gray-600"}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
//                 "{currentTestimonial.content}"
//               </blockquote>
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > currentIndex ? 1 : -1);
//                   setCurrentIndex(index);
//                 }}
//                 className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-red-500 w-8" : "bg-gray-600"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           <button 
//             onClick={handlePrevious}
//             className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button 
//             onClick={handleNext}
//             className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </Container>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-black overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of sneakerheads who trust VYCE for authentic, exclusive footwear.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800"
            >
              <div className="flex items-center mb-8">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-400">{currentTestimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      fill={i < currentTestimonial.rating ? "#EF4444" : "none"}
                      className={i < currentTestimonial.rating ? "text-red-500" : "text-gray-600"}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
                &quot;{currentTestimonial.content}&quot;
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* ... rest of the testimonials code remains the same ... */}
        </div>
      </Container>
    </section>
  );
}