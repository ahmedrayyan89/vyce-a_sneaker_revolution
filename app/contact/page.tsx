"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a backend
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have questions? We're here to help you find the perfect pair.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Our Location</h3>
                    <p className="text-gray-400">123 Sneaker St, Los Angeles, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-gray-400">info@vycebrand.com</p>
                    <p className="text-gray-400">support@vycebrand.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-gray-400">+1 (323) 555-8932</p>
                    <p className="text-gray-400">+1 (323) 555-7890</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Store Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-black p-8 rounded-xl border border-gray-800"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <motion.div 
                  className="bg-green-900/20 border border-green-700 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-gray-900 border-gray-800 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-gray-900 border-gray-800 focus:border-red-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-400 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="w-full bg-gray-900 border-gray-800 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-gray-900 border-gray-800 focus:border-red-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-black">
        <Container>
          <div className="bg-gray-900 rounded-xl overflow-hidden h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322546!3d34.09772992058829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1648514228575!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="VYCE Store Location"
            ></iframe>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}