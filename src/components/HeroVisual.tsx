// src/components/HeroVisual.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// --- Assets ---
import aerial_front_of_home from '../assets/Facility/Drone Aerial Photos/aerial-front-of-home.jpg';
import our_home_front_view from '../assets/Facility/Our Home (Exterior)/our-home-front-view.jpg';
import main_hall_open_concept_view from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-open-concept-view.jpg';
import kitchen_main_view from '../assets/Facility/Our Kitchen/kitchen-main-view.jpg';
import main_hall_living_room_and_kitchen from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-and-kitchen.jpg';
import bedroom_1_main_view from '../assets/Facility/Our Bedrooms/bedroom-1-main-view.jpg';
import bedroom_upstairs_master_suite_full_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-full-view.jpg';
import our_home_deck_and_house_exterior from '../assets/Facility/Our Home (Exterior)/our-home-deck-and-house-exterior.jpg';
import gym_main_view from '../assets/Facility/Our Gym & Therapy/gym-main-view.jpg';
import aerial_backyard_and_deck from '../assets/Facility/Drone Aerial Photos/aerial-backyard-and-deck.jpg';

const STORY_IMAGES = [
    { src: aerial_front_of_home, alt: "Aerial overview of Columbia Care Home" },
    { src: our_home_front_view, alt: "The elegant, welcoming entrance" },
    { src: main_hall_open_concept_view, alt: "The Heart of the Home: Main Hall" },
    { src: kitchen_main_view, alt: "Modern kitchen and gathering area" },
    { src: main_hall_living_room_and_kitchen, alt: "Open-concept social living space" },
    { src: bedroom_1_main_view, alt: "Private, sun-lit first floor bedroom" },
    { src: bedroom_upstairs_master_suite_full_view, alt: "Spacious master suite layout" },
    { src: our_home_deck_and_house_exterior, alt: "Serene backyard deck and patio" },
    { src: gym_main_view, alt: "On-site physical therapy and fitness gym" },
    { src: aerial_backyard_and_deck, alt: "Peaceful property surroundings" }
];

const HeroVisual = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
        }, 5000); // Luxurious 5-second interval
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[520px] shadow-2xl border-4 border-slate-800/50 w-full bg-slate-900"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: 1,
                        scale: 1.05,
                        x: [-3, 3, -3],
                        y: [-2, 2, -2]
                    }}
                    exit={{ opacity: 0, transition: { duration: 1.5 } }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 10, ease: "linear" },
                        x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <img
                        src={STORY_IMAGES[currentIndex].src}
                        alt={STORY_IMAGES[currentIndex].alt}
                        className="w-full h-full object-cover"
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Sophisticated Content Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

            {/* Floating Badge */}
            <motion.div
                className="absolute bottom-6 right-6 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <a
                    href="/virtual-tour"
                    className="flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-emerald-500 transition-all group border border-white/10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                    </span>
                    Take a Virtual Tour
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default HeroVisual;
