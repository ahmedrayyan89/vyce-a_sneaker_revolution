"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { upcomingDrops } from "@/lib/data";
import { Container } from "@/components/ui/container";

interface CountdownProps {
  targetDate: string;
}

function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 justify-center mb-4">
      <div className="text-center">
        <div className="bg-gray-800 rounded-md px-3 py-2 w-16">
          <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">Days</span>
      </div>
      <div className="text-center">
        <div className="bg-gray-800 rounded-md px-3 py-2 w-16">
          <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">Hours</span>
      </div>
      <div className="text-center">
        <div className="bg-gray-800 rounded-md px-3 py-2 w-16">
          <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">Minutes</span>
      </div>
      <div className="text-center">
        <div className="bg-gray-800 rounded-md px-3 py-2 w-16">
          <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">Seconds</span>
      </div>
    </div>
  );
}

export function UpcomingDropsSection() {
  return (
    <section className="py-20 bg-neutral-900">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Drops
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay ahead of the game. Set reminders for our upcoming exclusive releases and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingDrops.map((drop, index) => (
            <motion.div 
              key={drop.id}
              className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 group hover:border-red-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={drop.image}
                  alt={drop.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="inline-block px-2 py-1 bg-red-600 text-xs text-white rounded mb-2">
                    {drop.brand}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {drop.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-5 line-clamp-2">
                  {drop.description}
                </p>
                <Countdown targetDate={drop.releaseDate} />
                <button className="w-full py-2 mt-2 text-white text-sm font-medium bg-transparent border border-gray-700 rounded-md hover:bg-white/5 transition-colors">
                  Set Reminder
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}