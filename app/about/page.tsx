// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Container } from "@/components/ui/container";

// export default function AboutPage() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20">
//         <Container>
//           <motion.div 
//             className="max-w-3xl mx-auto text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
//             <p className="text-xl text-gray-300">
//               We're more than a store. We're a cultural movement.
//             </p>
//           </motion.div>
//         </Container>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 bg-neutral-900">
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
//               <p className="text-gray-300 mb-6">
//                 Founded in 2020, VYCE was born from a passion for sneaker culture and a frustration with the limited access to authentic, premium footwear.
//               </p>
//               <p className="text-gray-300 mb-6">
//                 Our mission is simple: to connect true enthusiasts with the sneakers they love, while fostering a community that celebrates the culture and stories behind each design.
//               </p>
//               <p className="text-gray-300">
//                 We're not just selling shoes; we're preserving the heritage of street culture and empowering the next generation of trendsetters.
//               </p>
//             </motion.div>
//             <motion.div
//               className="relative h-[400px] rounded-2xl overflow-hidden"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <Image 
//                 src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt="VYCE Team"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </Container>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-black">
//         <Container>
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               These core principles guide everything we do at VYCE.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Authenticity",
//                 description: "Every product is verified by our expert team to ensure 100% authenticity. No exceptions."
//               },
//               {
//                 title: "Community",
//                 description: "We're building a global community of sneakerheads who share our passion for footwear culture."
//               },
//               {
//                 title: "Innovation",
//                 description: "We're constantly pushing boundaries, seeking new ways to enhance the sneaker buying experience."
//               }
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-900 p-8 rounded-xl border border-gray-800"
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
//                 <p className="text-gray-400">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-neutral-900">
//         <Container>
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Passionate experts dedicated to finding you the perfect pair.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Alex Thompson",
//                 role: "Founder & CEO",
//                 image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               },
//               {
//                 name: "Zoe Chen",
//                 role: "Head of Curation",
//                 image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               },
//               {
//                 name: "Marcus Johnson",
//                 role: "Authentication Expert",
//                 image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               }
//             ].map((member, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black rounded-xl overflow-hidden group"
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
//                   <p className="text-gray-400">{member.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       <Footer />
//     </main>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              We&apos;re more than a store. We&apos;re a cultural movement.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, VYCE was born from a passion for sneaker culture and a frustration with the limited access to authentic, premium footwear.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is simple: to connect true enthusiasts with the sneakers they love, while fostering a community that celebrates the culture and stories behind each design.
              </p>
              <p className="text-gray-300">
                We&apos;re not just selling shoes; we&apos;re preserving the heritage of street culture and empowering the next generation of trendsetters.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image 
                src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="VYCE Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <Container>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at VYCE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Every product is verified by our expert team to ensure 100% authenticity. No exceptions."
              },
              {
                title: "Community",
                description: "We&apos;re building a global community of sneakerheads who share our passion for footwear culture."
              },
              {
                title: "Innovation",
                description: "We&apos;re constantly pushing boundaries, seeking new ways to enhance the sneaker buying experience."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-900">
        <Container>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate experts dedicated to finding you the perfect pair.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                name: "Zoe Chen",
                role: "Head of Curation",
                image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                name: "Marcus Johnson",
                role: "Authentication Expert",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-black rounded-xl overflow-hidden group"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}