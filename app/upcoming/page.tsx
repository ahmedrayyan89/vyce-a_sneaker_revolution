"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { upcomingDrops } from "@/lib/data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import UpcomingDropsSection from '@/components/sections/UpcomingDropsSection'


export default function UpcomingPage() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the email to a backend
    setEmailSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setEmailSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />

      <section className="pt-32 pb-20">
        <Container>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Drops</h1>
            <p className="text-xl text-gray-300">
              Stay ahead of the curve with our upcoming exclusive releases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {upcomingDrops.map((drop, index) => {
                  const releaseDate = new Date(drop.releaseDate);
                  const formattedDate = format(releaseDate, "MMMM d, yyyy");
                  const formattedTime = format(releaseDate, "h:mm a");

                  return (
                    <motion.div 
                      key={drop.id}
                      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 h-60 md:h-auto relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                          <img 
                            src={drop.image} 
                            alt={drop.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center mb-3">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                              {drop.brand}
                            </span>
                            <div className="ml-auto flex items-center text-gray-400 text-sm">
                              <Calendar size={14} className="mr-1" />
                              {formattedDate}
                              <Clock size={14} className="ml-3 mr-1" />
                              {formattedTime}
                            </div>
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-3">{drop.name}</h2>
                          <p className="text-gray-400 mb-6">{drop.description}</p>
                          
                          <div className="flex flex-wrap gap-3">
                            <Button className="bg-red-600 hover:bg-red-700">
                              Set Reminder
                            </Button>
                            <Button variant="outline" className="border-gray-700 text-white hover:bg-white/5">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <motion.div 
                className="bg-black border border-gray-800 rounded-xl p-6 sticky top-24"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Drop Notifications</h3>
                <p className="text-gray-400 mb-6">
                  Never miss a release. Get notifications for upcoming drops directly to your inbox.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div className="flex items-center mb-4">
                      <input 
                        id="notify-all" 
                        type="checkbox" 
                        className="h-4 w-4 accent-red-500" 
                        defaultChecked
                      />
                      <label htmlFor="notify-all" className="ml-2 text-sm text-gray-400">
                        Notify me about all drops
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3"
                    >
                      {emailSubmitted ? "Subscribed!" : "Subscribe to Drops"}
                    </Button>
                  </div>
                </form>

                <Separator className="my-6 bg-gray-800" />

                <div>
                  <h4 className="font-medium text-white mb-3">Follow Us</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    For real-time updates and behind-the-scenes content.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}