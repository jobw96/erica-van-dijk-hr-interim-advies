import React from 'react';
import { motion } from 'framer-motion';
import { VideoItem } from '../types';
import bungeLodersImg from '@/assets/Erica_Bunge_Loders.png';
import proMotorImg from '@/assets/Erica_Pro_motor_winnaar.jpg';

// Selected only the 1st and 3rd item from the original list as requested
const videos: VideoItem[] = [{
  date: "Oktober 2022",
  title: "Webinar Pensioenfonds PGB Fracties",
  placeholderUrl: bungeLodersImg,
  videoUrl: "https://www.youtube.com/watch?v=go_DPcSMOJk"
}, {
  date: "Oktober 2017",
  title: "Pro-Motor winnaar FPTC",
  placeholderUrl: proMotorImg,
  videoUrl: "https://www.youtube.com/watch?v=ThRttnzsUfQ"
}];
export const Portfolio: React.FC = () => {
  return <section id="portfolio" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section - RIGHT aligned */}
        <div className="flex flex-col items-end mb-16 md:mb-24 text-right">
            <motion.span initial={{
          opacity: 0,
          scale: 0.96,
          y: 6
        }} whileInView={{
          opacity: 1,
          scale: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.45,
          ease: "easeOut"
        }} className="section-label inline-flex items-center h-[29px] px-6 bg-[#fff5f8] text-[#8E170B] rounded-[50px] mb-4 font-satoshi-medium tracking-[0.1em] uppercase text-xs">
              Videos
            </motion.span>
            <motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-3xl md:text-5xl text-[#1F2937] font-satoshi-black tracking-tight">
                Mijn werk in beeld
            </motion.h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {videos.map((video, index) => <div key={index} className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <motion.div className="w-full lg:w-3/5" initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }}>
                 <motion.a href={video.videoUrl} target="_blank" rel="noopener noreferrer" whileHover="hover" initial="rest" className="block overflow-hidden rounded-2xl shadow-2xl aspect-video relative group cursor-pointer">
                    <motion.img src={video.placeholderUrl} alt={video.title} className="w-full h-full object-cover" variants={{
                rest: {
                  scale: 1
                },
                hover: {
                  scale: 1.05
                }
              }} transition={{
                duration: 0.7
              }} />
                    {/* Overlay - Play button removed, just a subtle dark tint on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                 </motion.a>
              </motion.div>

              {/* Text Side */}
              <motion.div className="w-full lg:w-2/5" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
                <span className="section-label text-[#8E170B] mb-3 block">{video.date}</span>
                <h3 className="text-3xl md:text-4xl font-satoshi-black text-gray-900 mb-6 leading-tight tracking-tight font-normal">{video.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 font-satoshi-regular tracking-wide text-base">
                    Bekijk hoe ik te werk ga en wat ik voor organisaties heb kunnen betekenen in deze uitgebreide videoreportage.
                </p>
                <motion.a href={video.videoUrl} target="_blank" rel="noopener noreferrer" whileHover={{
              x: 5,
              backgroundColor: '#701209'
            }} className="bg-[#8E170B] text-white text-base font-satoshi-bold px-8 py-4 rounded-xl shadow-lg shadow-[#8E170B]/20 inline-flex items-center gap-2 cursor-pointer tracking-wide">
                    Bekijk video
                </motion.a>
              </motion.div>
            </div>)}
        </div>
      </div>
    </section>;
};