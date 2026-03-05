// src/components/HeroVisual.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// --- Assets (Verified from facilityGallery.ts) ---
import aerial_top_down_front_property from '../assets/Facility/Drone Aerial Photos/aerial-top-down-front-property.jpg';
import our_home_front_exterior_and_driveway from '../assets/Facility/Our Home (Exterior)/our-home-front-exterior-and-driveway.jpg';
import main_hall_entrance_hallway from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-entrance-hallway.jpg';
import main_hall_living_area_and_windows from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-area-and-windows.jpg';
import main_hall_upstairs_windows from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-windows.jpg';
import kitchen_appliances_and_island from '../assets/Facility/Our Kitchen/kitchen-appliances-and-island.jpg';
import kitchen_and_dining_area from '../assets/Facility/Our Kitchen/kitchen-and-dining-area.jpg';
import bedroom_upstairs_master_suite_full_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-full-view.jpg';
import bedroom_3_bay_windows from '../assets/Facility/Our Bedrooms/bedroom-3-bay-windows.jpg';
import amenities_upstairs_master_bathroom_vanity from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-vanity.jpg';
import amenities_upstairs_master_bathroom_shower from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-shower.jpg';
import gym_main_view from '../assets/Facility/Our Gym & Therapy/gym-main-view.jpg';
import our_home_deck_seating_area from '../assets/Facility/Our Home (Exterior)/our-home-deck-seating-area.jpg';
import aerial_backyard_and_deck from '../assets/Facility/Drone Aerial Photos/aerial-backyard-and-deck.jpg';

const STORY_IMAGES = [
    {
        src: aerial_top_down_front_property,
        alt: "Large front lawn providing a beautiful first impression for families and guests."
    },
    {
        src: our_home_front_exterior_and_driveway,
        alt: "Our residential facade provides a familiar, non-institutional atmosphere."
    },
    {
        src: main_hall_entrance_hallway,
        alt: "Wide, well-lit hallways designed to accommodate walkers and ensure safe mobility"
    },
    {
        src: main_hall_living_area_and_windows,
        alt: "Our sun-drenched main hall where high ceilings and large windows create an airy, open feeling."
    },
    {
        src: main_hall_upstairs_windows,
        alt: "Abundant natural light helps maintain healthy circadian rhythms and cognitive wellness."
    },
    {
        src: kitchen_appliances_and_island,
        alt: "Bright and clean kitchen environment maintaining high clinical standards."
    },
    {
        src: kitchen_and_dining_area,
        alt: "Open-plan design ensures residents are always part of the home's daily activities."
    },
    {
        src: bedroom_upstairs_master_suite_full_view,
        alt: "The full expanse of the bedroom, including the main bed and adjoining sitting area."
    },
    {
        src: bedroom_3_bay_windows,
        alt: "A spacious ground-floor bedroom featuring beautiful, large bay windows."
    },
    {
        src: amenities_upstairs_master_bathroom_vanity,
        alt: "Spacious master bathroom vanity with modern, easy-to-use fixtures."
    },
    {
        src: amenities_upstairs_master_bathroom_shower,
        alt: "Walk-in shower with safety seating, a standard in our clinical safety protocol."
    },
    {
        src: gym_main_view,
        alt: "Our professional therapy gym, the center of our clinical DPT-led rehabilitation programs."
    },
    {
        src: our_home_deck_seating_area,
        alt: "Spacious outdoor deck with comfortable seating where residents enjoy fresh air and family visits."
    },
    {
        src: aerial_backyard_and_deck,
        alt: "Our massive resident deck, a cornerstone of our 'open home' philosophy."
    }
];

const HeroVisual = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
        }, 5000);
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
                        loading={currentIndex <= 1 ? "eager" : "lazy"}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Sophisticated Content Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

            {/* Floating Badge - Extremely Minimal for Mobile */}
            <motion.div
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <a
                    href="/virtual-tour"
                    className="flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-md text-white px-2 py-1 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-sm font-semibold shadow-lg hover:bg-emerald-500 transition-all group border border-white/10"
                >
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-emerald-300"></span>
                    </span>
                    <span className="hidden sm:inline">Take a </span>Virtual Tour
                    <ExternalLink className="w-3 w-3 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default HeroVisual;
