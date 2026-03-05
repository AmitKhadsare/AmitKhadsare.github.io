// src/components/HeroVisual.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// --- Assets ---
import aerial_front_of_home from '../assets/Facility/Drone Aerial Photos/aerial-front-of-home.jpg';
import our_home_front_view from '../assets/Facility/Our Home (Exterior)/our-home-front-view.jpg';
import main_hall_living_area_and_windows from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-area-and-windows.jpg';
import main_hall_open_concept_view from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-open-concept-view.jpg';
import main_hall_living_room_and_kitchen from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-and-kitchen.jpg';
import main_hall_fireplace_and_tv_area from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-fireplace-and-tv-area.jpg';
import kitchen_main_view from '../assets/Facility/Our Kitchen/kitchen-main-view.jpg';
import kitchen_island_and_sink from '../assets/Facility/Our Kitchen/kitchen-island-and-sink.jpg';
import bedroom_1_main_view from '../assets/Facility/Our Bedrooms/bedroom-1-main-view.jpg';
import bedroom_3_bay_windows from '../assets/Facility/Our Bedrooms/bedroom-3-bay-windows.jpg';
import bedroom_upstairs_master_suite_full_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-full-view.jpg';
import bedroom_upstairs_lavender from '../assets/Facility/Our Bedrooms/bedroom-upstairs-lavender.jpg';
import our_home_deck_and_house_exterior from '../assets/Facility/Our Home (Exterior)/our-home-deck-and-house-exterior.jpg';
import our_home_deck_seating_area from '../assets/Facility/Our Home (Exterior)/our-home-deck-seating-area.jpg';
import gym_main_view from '../assets/Facility/Our Gym & Therapy/gym-main-view.jpg';
import gym_rehab_equipment from '../assets/Facility/Our Gym & Therapy/gym-rehab-equipment.jpg';
import aerial_backyard_and_deck from '../assets/Facility/Drone Aerial Photos/aerial-backyard-and-deck.jpg';

const HERO_IMAGES = [
    { src: aerial_front_of_home, alt: "Aerial view of Columbia Care Home" },
    { src: our_home_front_view, alt: "Welcoming front exterior" },
    { src: main_hall_open_concept_view, alt: "Open concept main living hall" },
    { src: main_hall_living_area_and_windows, alt: "Sun-drenched common spaces" },
    { src: main_hall_fireplace_and_tv_area, alt: "Cozy fireside social nook" },
    { src: kitchen_main_view, alt: "Modern resident kitchen" },
    { src: kitchen_island_and_sink, alt: "Central kitchen gathering point" },
    { src: main_hall_living_room_and_kitchen, alt: "Homelike social atmosphere" },
    { src: bedroom_1_main_view, alt: "Private first floor suite" },
    { src: bedroom_upstairs_master_suite_full_view, alt: "Luxurious upstairs private suite" },
    { src: bedroom_3_bay_windows, alt: "Bright bedroom with bay windows" },
    { src: bedroom_upstairs_lavender, alt: "Calming upstairs bedroom" },
    { src: gym_main_view, alt: "Clinical PT-led therapy gym" },
    { src: gym_rehab_equipment, alt: "Specialized rehabilitation tools" },
    { src: our_home_deck_and_house_exterior, alt: "Safe outdoor resident deck" },
    { src: our_home_deck_seating_area, alt: "Peaceful deck seating" },
    { src: aerial_backyard_and_deck, alt: "Property overview and wooded lot" }
];

const PULSE_SEQUENCE = [
    // Flashes (High energy)
    { index: 0, duration: 250 },
    { index: 1, duration: 150 },
    { index: 2, duration: 150 },
    { index: 3, duration: 150 },
    { index: 4, duration: 150 },
    { index: 5, duration: 150 },
    // Focus (Registering variety)
    { index: 6, duration: 300 },
    { index: 8, duration: 300 },
    { index: 12, duration: 300 },
    { index: 14, duration: 300 },
    // Land (High detail impact)
    { index: 2, duration: 800 }, // Back to Main Hall
    { index: 15, duration: 800 }, // Deck view
];

const HeroVisual = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<'intro' | 'cinematic'>('intro');
    const introStepRef = useRef(0);

    useEffect(() => {
        let timeout: any;

        const runPulsingIntro = () => {
            if (introStepRef.current < PULSE_SEQUENCE.length) {
                const step = PULSE_SEQUENCE[introStepRef.current];
                setCurrentIndex(step.index);

                timeout = setTimeout(() => {
                    introStepRef.current += 1;
                    runPulsingIntro();
                }, step.duration);
            } else {
                setPhase('cinematic');
            }
        };

        if (phase === 'intro') {
            runPulsingIntro();
        } else {
            // Calm Loop
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
            }, 4500);
            return () => clearInterval(interval);
        }

        return () => clearTimeout(timeout);
    }, [phase]);

    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px] shadow-2xl border-4 border-slate-800/50 w-full"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={phase === 'intro' ? { opacity: 1 } : { opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: 1,
                        scale: phase === 'intro' ? 1 : 1.05,
                        x: phase === 'intro' ? 0 : [-5, 5, -5],
                        y: phase === 'intro' ? 0 : [-3, 3, -3]
                    }}
                    exit={{ opacity: 0, transition: { duration: phase === 'intro' ? 0 : 1 } }}
                    transition={{
                        opacity: { duration: phase === 'intro' ? 0 : 1, ease: "easeInOut" },
                        scale: { duration: phase === 'intro' ? 0.1 : 8, ease: "linear" },
                        x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <img
                        src={HERO_IMAGES[currentIndex].src}
                        alt={HERO_IMAGES[currentIndex].alt}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            {/* Badge - Only Appears in Cinematic Phase */}
            <AnimatePresence>
                {phase === 'cinematic' && (
                    <motion.div
                        className="absolute bottom-6 right-6 z-20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href="/virtual-tour"
                            className="flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-emerald-500 transition-colors group"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                            </span>
                            Experience Our Home
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default HeroVisual;
