// src/components/FacilityPage.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Camera, Video, Home, Utensils, Bed, Users, Heart, Wind, MapPin } from 'lucide-react';

// Hero background image
import heroBgImage from '../assets/our-home-front-view.jpg';

// --- 1. IMPORT ALL 75 IMAGES ---
// Drone Aerial Photos
import aerial_front_of_home from '../assets/Facility/Drone Aerial Photos/aerial-front-of-home.jpg';
import aerial_front_and_driveway from '../assets/Facility/Drone Aerial Photos/aerial-front-and-driveway.jpg';
import aerial_front_wooded_surroundings from '../assets/Facility/Drone Aerial Photos/aerial-front-wooded-surroundings.jpg';
import aerial_high_angle_front_view from '../assets/Facility/Drone Aerial Photos/aerial-high-angle-front-view.jpg';
import aerial_top_down_front_property from '../assets/Facility/Drone Aerial Photos/aerial-top-down-front-property.jpg';
import aerial_birds_eye_view_front from '../assets/Facility/Drone Aerial Photos/aerial-birds-eye-view-front.jpg';
import aerial_property_overview from '../assets/Facility/Drone Aerial Photos/aerial-property-overview.jpg';
import aerial_backyard_and_deck from '../assets/Facility/Drone Aerial Photos/aerial-backyard-and-deck.jpg';
import aerial_backyard_wooded_lot from '../assets/Facility/Drone Aerial Photos/aerial-backyard-wooded-lot.jpg';
import aerial_rear_of_home from '../assets/Facility/Drone Aerial Photos/aerial-rear-of-home.jpg';

// Our Home (Exteriors)
import our_home_front_view from '../assets/Facility/Our Home (Exterior)/our-home-front-view.jpg';
import our_home_driveway_and_entrance from '../assets/Facility/Our Home (Exterior)/our-home-driveway-and-entrance.jpg';
import our_home_front_exterior_and_driveway from '../assets/Facility/Our Home (Exterior)/our-home-front-exterior-and-driveway.jpg';
import our_home_backyard_and_deck from '../assets/Facility/Our Home (Exterior)/our-home-backyard-and-deck.jpg';
import our_home_backyard_under_deck from '../assets/Facility/Our Home (Exterior)/our-home-backyard-under-deck.jpg';
import our_home_deck_seating_area from '../assets/Facility/Our Home (Exterior)/our-home-deck-seating-area.jpg';
import our_home_deck_patio_set from '../assets/Facility/Our Home (Exterior)/our-home-deck-patio-set.jpg';
import our_home_deck_and_house_exterior from '../assets/Facility/Our Home (Exterior)/our-home-deck-and-house-exterior.jpg';
import our_home_deck_with_wooded_view from '../assets/Facility/Our Home (Exterior)/our-home-deck-with-wooded-view.jpg';

// Our Main Hall
import main_hall_living_area_and_windows from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-area-and-windows.jpg';
import main_hall_open_concept_view from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-open-concept-view.jpg';
import main_hall_living_room_and_kitchen from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-and-kitchen.jpg';
import main_hall_entrance_hallway from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-entrance-hallway.jpg';
import main_hall_front_entrance from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-front-entrance.jpg';
import main_hall_first_floor_room_entrance_1 from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-first-floor-room-entrance-1.jpg';
import main_hall_first_floor_room_entrance_2 from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-first-floor-room-entrance-2.jpg';
import main_hall_upstairs_hallway from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-hallway.jpg';
import main_hall_upstairs_landing from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-landing.jpg';
import main_hall_upstairs_windows from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-windows.jpg';
import main_hall_fireplace_and_tv_area from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-fireplace-and-tv-area.jpg';
import main_hall_living_room_seating from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-seating.jpg';
import main_hall_view_towards_stairs from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-view-towards-stairs.jpg';
import main_hall_dining_area_and_deck_access from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-dining-area-and-deck-access.jpg';
import main_hall_upstairs_overlook from '../assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-overlook.jpg';

// Our Kitchen
import kitchen_main_view from '../assets/Facility/Our Kitchen/kitchen-main-view.jpg';
import kitchen_island_and_sink from '../assets/Facility/Our Kitchen/kitchen-island-and-sink.jpg';
import kitchen_sink_and_cooktop from '../assets/Facility/Our Kitchen/kitchen-sink-and-cooktop.jpg';
import kitchen_appliances_and_island from '../assets/Facility/Our Kitchen/kitchen-appliances-and-island.jpg';
import kitchen_and_dining_area from '../assets/Facility/Our Kitchen/kitchen-and-dining-area.jpg';
import kitchen_looking_towards_living_area from '../assets/Facility/Our Kitchen/kitchen-looking-towards-living-area.jpg';
import dining_area_looking_towards_living_room from '../assets/Facility/Our Kitchen/dining-area-looking-towards-living-room.jpg';

// Our Bedrooms
import bedroom_1_main_view from '../assets/Facility/Our Bedrooms/bedroom-1-main-view.jpg';
import bedroom_1_natural_light from '../assets/Facility/Our Bedrooms/bedroom-1-natural-light.jpg';
import bedroom_1_view_to_hall from '../assets/Facility/Our Bedrooms/bedroom-1-view-to-hall.jpg';
import bedroom_3_bay_windows from '../assets/Facility/Our Bedrooms/bedroom-3-bay-windows.jpg';
import bedroom_3_main_view from '../assets/Facility/Our Bedrooms/bedroom-3-main-view.jpg';
import bedroom_3_view_to_hall from '../assets/Facility/Our Bedrooms/bedroom-3-view-to-hall.jpg';
import bedroom_upstairs_master_suite from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite.jpg';
import bedroom_upstairs_master_suite_tv from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-tv.jpg';
import bedroom_upstairs_master_suite_sitting_room from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-sitting-room.jpg';
import bedroom_upstairs_lavender from '../assets/Facility/Our Bedrooms/bedroom-upstairs-lavender.jpg';
import bedroom_upstairs_master_suite_and_bathroom_entrance from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-and-bathroom-entrance.jpg';
import bedroom_upstairs_master_suite_full_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-full-view.jpg';
import bedroom_upstairs_master_suite_seating from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-seating.jpg';
import bedroom_upstairs_master_suite_sitting_area from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-sitting-area.jpg';
import bedroom_upstairs_maroon_main_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-main-view.jpg';
import bedroom_upstairs_maroon_and_closet from '../assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-and-closet.jpg';
import bedroom_upstairs_maroon_view_to_hall from '../assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-view-to-hall.jpg';
import bedroom_upstairs_peach_main_view from '../assets/Facility/Our Bedrooms/bedroom-upstairs-peach-main-view.jpg';
import bedroom_upstairs_peach_view_to_hall from '../assets/Facility/Our Bedrooms/bedroom-upstairs-peach-view-to-hall.jpg';
import bedroom_upstairs_lavender_tv_and_hallway from '../assets/Facility/Our Bedrooms/bedroom-upstairs-lavender-tv-and-hallway.jpg';
import bedroom_upstairs_master_suite_window_nook from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-window-nook.jpg';
import bedroom_upstairs_master_suite_view_to_amenities from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-view-to-amenities.jpg';
import bedroom_upstairs_master_suite_looking_in from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-looking-in.jpg';
import bedroom_upstairs_master_suite_and_hallway from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-and-hallway.jpg';
import bedroom_upstairs_master_suite_room_divider from '../assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-room-divider.jpg';

// Home Features & Amenities
import amenities_bedroom_1_private_bathroom from '../assets/Facility/Home Features & Amenities/amenities-bedroom-1-private-bathroom.jpg';
import amenities_bedroom_1_walk_in_shower from '../assets/Facility/Home Features & Amenities/amenities-bedroom-1-walk-in-shower.jpg';
import amenities_laundry_room from '../assets/Facility/Home Features & Amenities/amenities-laundry-room.jpg';
import amenities_storage_closet from '../assets/Facility/Home Features & Amenities/amenities-storage-closet.jpg';
import amenities_upstairs_master_bathroom_vanity from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-vanity.jpg';
import amenities_upstairs_master_bathroom_tub from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-tub.jpg';
import amenities_upstairs_master_bathroom_shower from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-shower.jpg';
import amenities_upstairs_shared_bathroom from '../assets/Facility/Home Features & Amenities/amenities-upstairs-shared-bathroom.jpg';
import amenities_upstairs_master_walk_in_closet from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-walk-in-closet.jpg';
import amenities_basement_bonus_room from '../assets/Facility/Home Features & Amenities/amenities-basement-bonus-room.jpg';
import bedroom_basement_main from '../assets/Facility/Home Features & Amenities/bedroom-basement-main.jpg';
import bedroom_basement_view_to_hall from '../assets/Facility/Home Features & Amenities/bedroom-basement-view-to-hall.jpg';
import amenities_basement_bathroom from '../assets/Facility/Home Features & Amenities/amenities-basement-bathroom.jpg';
import amenities_upstairs_master_kitchenette from '../assets/Facility/Home Features & Amenities/amenities-upstairs-master-kitchenette.jpg';

// Our Gym & Therapy
import gym_main_view from '../assets/Facility/Our Gym & Therapy/gym-main-view.jpg';
import gym_rehab_equipment from '../assets/Facility/Our Gym & Therapy/gym-rehab-equipment.jpg';
import gym_physical_therapy_tools from '../assets/Facility/Our Gym & Therapy/gym-physical-therapy-tools.jpg';
import gym_training_area_and_exit from '../assets/Facility/Our Gym & Therapy/gym-training-area-and-exit.jpg';
import gym_therapy_and_cardio_zone from '../assets/Facility/Our Gym & Therapy/gym-therapy-and-cardio-zone.jpg';


// --- 2. THE ACTUAL GALLERY DATA (REORDERED) ---
const galleryData = [
  {
    name: "Exterior",
    icon: Home,
    description: "Beautiful outdoor spaces, aerial views, and the building exterior",
    photos: [
      { src: our_home_front_view, label: "Welcoming front view of Columbia Care Home." },
      { src: our_home_driveway_and_entrance, label: "Ample driveway and main entrance to the home." },
      { src: our_home_front_exterior_and_driveway, label: "Full view of the home's front exterior and spacious driveway." },
      { src: our_home_backyard_and_deck, label: "Expansive backyard with a large, secure deck for residents to enjoy." },
      { src: our_home_backyard_under_deck, label: "View of the shaded lawn area from beneath the deck." },
      { src: our_home_deck_seating_area, label: "Spacious outdoor deck with comfortable seating for residents and families." },
      { src: our_home_deck_patio_set, label: "Outdoor patio set on the deck, perfect for relaxing." },
      { src: our_home_deck_and_house_exterior, label: "A view of the spacious deck along the back of the house." },
      { src: our_home_deck_with_wooded_view, label: "Peaceful, wooded view from the secure outdoor deck." },
    ]
  },
  {
    name: "Common Areas",
    icon: Users,
    description: "Spacious living and gathering spaces for residents and families",
    photos: [
      { src: main_hall_living_area_and_windows, label: "Our bright and spacious main hall, featuring high ceilings and large windows." },
      { src: main_hall_open_concept_view, label: "The open-concept design connects the living area to the front entrance and the rest of the home." },
      { src: main_hall_living_room_and_kitchen, label: "Comfortable seating in the living area, perfect for socializing and relaxing." },
      { src: main_hall_entrance_hallway, label: "A welcoming view down the main hallway towards the central living space." },
      { src: main_hall_front_entrance, label: "The bright and secure main entrance, with accessible resident suites nearby." },
      { src: main_hall_first_floor_room_entrance_1, label: "Entrance to a private ground-floor resident suite." },
      { src: main_hall_first_floor_room_entrance_2, label: "Accessible resident suite located just off the main entrance." },
      { src: main_hall_upstairs_hallway, label: "The upstairs hallway, providing safe and easy access to second-floor bedrooms." },
      { src: main_hall_upstairs_landing, label: "An open and airy upstairs landing that overlooks the main hall." },
      { src: main_hall_upstairs_windows, label: "Large arched windows fill the upstairs common area with beautiful natural light." },
      { src: main_hall_fireplace_and_tv_area, label: "The main hall living area with a cozy fireplace and entertainment center." },
      { src: main_hall_living_room_seating, label: "Comfortable and modern seating arrangements in our sunlit living room." },
      { src: main_hall_view_towards_stairs, label: "A spacious view of the main hall, looking towards the staircase and upstairs landing." },
      { src: main_hall_upstairs_overlook, label: "View from the upstairs landing overlooking the main hall and living area." },
    ]
  },
  {
    name: "Dining & Kitchen",
    icon: Utensils,
    description: "Welcoming dining areas and our modern, fully-equipped kitchen",
    photos: [
        { src: kitchen_main_view, label: "A full view of our modern and spacious kitchen." },
        { src: kitchen_island_and_sink, label: "The central kitchen island and window-side sink area." },
        { src: kitchen_sink_and_cooktop, label: "A closer look at the kitchen's modern cooktop and sink." },
        { src: kitchen_appliances_and_island, label: "View of the stainless steel appliances and kitchen island." },
        { src: kitchen_and_dining_area, label: "The open-plan kitchen flows seamlessly into the resident dining area." },
        { src: kitchen_looking_towards_living_area, label: "View from the kitchen into the bright, open-concept dining and living space." },
        { src: dining_area_looking_towards_living_room, label: "The resident dining area, adjacent to the living room and staircase." },
        { src: main_hall_dining_area_and_deck_access, label: "The resident dining area with direct access to the outdoor deck." },
    ]
  },
  {
    name: "Bedrooms",
    icon: Bed,
    description: "Comfortable, private, and semi-private suites designed for rest and personal space",
    photos: [
      { src: bedroom_1_main_view, label: "A comfortable and private ground-floor bedroom with a recliner and storage." },
      { src: bedroom_1_natural_light, label: "Large windows provide ample natural light in this cozy ground-floor suite." },
      { src: bedroom_1_view_to_hall, label: "View from Bedroom 1, showing its convenient location near the main entrance." },
      { src: bedroom_3_bay_windows, label: "A spacious ground-floor bedroom featuring beautiful, large bay windows." },
      { src: bedroom_3_main_view, label: "A full view of the bright and comfortable Bedroom 3 on the ground floor." },
      { src: bedroom_3_view_to_hall, label: "View from inside Bedroom 3, looking out towards the main staircase." },
      { src: bedroom_upstairs_master_suite, label: "The expansive upstairs master suite, offering abundant space and natural light." },
      { src: bedroom_upstairs_master_suite_tv, label: "The master suite includes a personal recliner, storage, and a wall-mounted television." },
      { src: bedroom_upstairs_master_suite_sitting_room, label: "A view from the master suite into the adjoining private sitting room." },
      { src: bedroom_upstairs_lavender, label: "A serene and private upstairs bedroom with a comfortable recliner." },
      { src: bedroom_upstairs_master_suite_and_bathroom_entrance, label: "A view of the master suite, showing the entrance to the private bathroom and walk-in closet." },
      { src: bedroom_upstairs_master_suite_full_view, label: "The full expanse of the master suite, including the main bed and adjoining sitting area." },
      { src: bedroom_upstairs_master_suite_seating, label: "A comfortable recliner and personal space within the spacious master suite." },
      { src: bedroom_upstairs_master_suite_sitting_area, label: "The private sitting area within the master suite, perfect for relaxation." },
      { src: bedroom_upstairs_maroon_main_view, label: "A cozy and private upstairs bedroom with a personal recliner." },
      { src: bedroom_upstairs_maroon_and_closet, label: "View of the maroon upstairs bedroom, featuring a large closet for personal belongings." },
      { src: bedroom_upstairs_maroon_view_to_hall, label: "A well-lit, private upstairs bedroom with convenient access to the main hall." },
      { src: bedroom_upstairs_peach_main_view, label: "A bright and comfortable private bedroom located on the second floor." },
      { src: bedroom_upstairs_peach_view_to_hall, label: "View from the peach upstairs bedroom, showing its connection to the main landing." },
      { src: bedroom_upstairs_lavender_tv_and_hallway, label: "The serene lavender bedroom, equipped with a TV and access to the upstairs hall." },
      { src: bedroom_upstairs_master_suite_window_nook, label: "A cozy nook within the master suite featuring a large window and comfortable seating." },
      { src: bedroom_upstairs_master_suite_view_to_amenities, label: "View from the master suite showing easy access to the private bathroom, closet, and main hall." },
      { src: bedroom_upstairs_master_suite_looking_in, label: "A wide view of the master suite's open and versatile layout." },
      { src: bedroom_upstairs_master_suite_and_hallway, label: "The expansive master suite with its direct connection to the upstairs landing." },
      { src: bedroom_upstairs_master_suite_room_divider, label: "The master suite can be sectioned with a privacy divider, creating distinct living and sleeping areas." },
    ]
  },
  {
    name: "Amenities & Care",
    icon: Heart,
    description: "Accessible bathrooms and modern conveniences throughout the home",
    photos: [
      { src: amenities_bedroom_1_private_bathroom, label: "The private, accessible bathroom for the ground-floor resident suite." },
      { src: amenities_bedroom_1_walk_in_shower, label: "A modern, roll-in shower with safety grab bars, located in the Bedroom 1 suite." },
      { src: amenities_laundry_room, label: "Our fully equipped laundry room, ensuring residents always have fresh linens and clothing." },
      { src: amenities_storage_closet, label: "Spacious storage closets are available for personal belongings." },
      { src: amenities_upstairs_master_bathroom_vanity, label: "The spacious upstairs master bathroom, featuring a double vanity." },
      { src: amenities_upstairs_master_bathroom_tub, label: "A view of the master bathroom's large tub and separate accessible shower." },
      { src: amenities_upstairs_master_bathroom_shower, label: "The accessible walk-in shower with a safety seat in the upstairs master suite." },
      { src: amenities_upstairs_shared_bathroom, label: "A bright, shared bathroom for upstairs residents with a double vanity." },
      { src: amenities_upstairs_master_walk_in_closet, label: "The large, organized walk-in closet in the master suite with personal lockboxes." },
      { src: amenities_basement_bonus_room, label: "A large bonus room in the basement, providing extensive additional space." },
      { src: bedroom_basement_main, label: "A spacious private bedroom located in the basement level." },
      { src: bedroom_basement_view_to_hall, label: "View from the basement bedroom looking out towards the main hall and staircase." },
      { src: amenities_basement_bathroom, label: "The private, accessible bathroom connected to the basement bedroom." },
      { src: amenities_upstairs_master_kitchenette, label: "A convenient kitchenette located just outside the upstairs master suite." },
    ]
  },
  {
    name: "Gym & Therapy",
    icon: Wind,
    description: "Dedicated spaces for physical therapy and wellness activities",
    photos: [
      { src: gym_main_view, label: "Our spacious and bright gym, fully equipped for physical therapy and fitness." },
      { src: gym_rehab_equipment, label: "A variety of rehabilitation equipment, including stationary bikes and a therapy table." },
      { src: gym_physical_therapy_tools, label: "Dedicated tools for physical therapy, including resistance bands and agility equipment." },
      { src: gym_training_area_and_exit, label: "The gym features a training area and direct access to the outdoors." },
      { src: gym_therapy_and_cardio_zone, label: "View of the therapy tables, cardio machines, and open exercise space." },
    ]
  },
  {
    name: "Aerial",
    icon: MapPin,
    description: "Bird's-eye views of our beautiful property and peaceful surroundings",
    photos: [
      { src: aerial_front_of_home, label: "An aerial view of the beautiful front exterior and manicured lawn." },
      { src: aerial_front_and_driveway, label: "A clear aerial shot showcasing the home's spacious driveway and welcoming entrance." },
      { src: aerial_front_wooded_surroundings, label: "The home nestled in its peaceful, wooded surroundings." },
      { src: aerial_high_angle_front_view, label: "A high-angle view of the property, highlighting its private location." },
      { src: aerial_top_down_front_property, label: "A top-down perspective of the home's front property line and yard." },
      { src: aerial_birds_eye_view_front, label: "A bird's-eye view of the home, showing the full scope of the front yard." },
      { src: aerial_property_overview, label: "A complete overhead view of the Columbia Care Home property." },
      { src: aerial_backyard_and_deck, label: "An aerial look at the large backyard and spacious resident deck." },
      { src: aerial_backyard_wooded_lot, label: "View of the expansive backyard that backs onto a serene, private wooded area." },
      { src: aerial_rear_of_home, label: "The rear view of the home, showcasing the large deck and peaceful surroundings." },
    ]
  },
];

// --- No need to edit below this line ---

// Component Interfaces
interface ImageLightboxProps {
  photos: Array<{ src: string; label: string }>;
  selectedIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

interface PhotoCardProps {
  photo: { src: string; label: string };
  onClick: () => void;
}

// Animation Variants
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const lightboxVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

// Lightbox Component
const ImageLightbox: React.FC<ImageLightboxProps> = ({ photos, selectedIndex, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const currentPhoto = photos[selectedIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      onNavigate('next');
    }
    if (touchStart - touchEnd < -75) {
      onNavigate('prev');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center p-4"
        variants={lightboxVariants}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.src}
            className="relative w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.label}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 bg-black/70 backdrop-blur-md p-4 rounded-lg">
              <p className="text-white text-center text-sm md:text-lg leading-relaxed">
                {currentPhoto.label}
              </p>
              <p className="text-gray-400 text-center text-xs md:text-sm mt-2">
                {selectedIndex + 1} / {photos.length}
              </p>
              <p className="text-gray-500 text-center text-xs mt-2 md:hidden">
                Swipe to navigate
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 md:p-3 bg-black/60 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
        aria-label="Close"
      >
        <X size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 text-white p-3 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 text-white p-3 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
};

// Photo Card Component
const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative overflow-hidden">
      <img
        src={photo.src}
        alt={photo.label}
        className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <Camera className="w-8 h-8 text-emerald-600" />
        </div>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 group-hover:text-emerald-700 transition-colors">
        {photo.label}
      </p>
    </div>
  </motion.div>
);

// Main Facility Page Component
const FacilityPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ categoryIndex: number, photoIndex: number } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const galleryContentRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const activeCategory = galleryData[activeTab];

  const handleOpenLightbox = (categoryIndex: number, photoIndex: number) => {
    setSelectedImage({ categoryIndex, photoIndex });
  };

  const handleCloseLightbox = () => setSelectedImage(null);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const { categoryIndex, photoIndex } = selectedImage;
    const totalPhotos = galleryData[categoryIndex].photos.length;
    let newIndex;
    if (direction === 'next') {
      newIndex = (photoIndex + 1) % totalPhotos;
    } else {
      newIndex = (photoIndex - 1 + totalPhotos) % totalPhotos;
    }
    setSelectedImage({ categoryIndex, photoIndex: newIndex });
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // Scroll the selected tab into view on mobile
    if (scrollContainerRef.current) {
      const buttons = scrollContainerRef.current.querySelectorAll('button');
      buttons[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    // Scroll to gallery content section
    setTimeout(() => {
      if (galleryContentRef.current) {
        const isMobile = window.innerWidth < 1024;
        const navHeight = isMobile ? 180 : 200; // Account for header + tab nav
        const elementPosition = galleryContentRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Swipe detection for category navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left - next category
      if (activeTab < galleryData.length - 1) {
        handleTabChange(activeTab + 1);
      }
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right - previous category
      if (activeTab > 0) {
        handleTabChange(activeTab - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative text-white py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 to-teal-700/70" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 md:mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm md:text-base">Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif">
              Tour Our Beautiful Home
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              Explore every corner of our warm, safe, and welcoming environment
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modern Mobile Navigation with Swipe Indicator */}
      <div className="bg-white border-b border-gray-200 sticky top-0 lg:top-[80px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Tabs */}
          <nav className="hidden lg:flex justify-center flex-wrap gap-2 py-4" aria-label="Gallery sections">
            {galleryData.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => handleTabChange(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${activeTab === index
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Enhanced Mobile Navigation - Compact Card Style */}
          <div className="lg:hidden py-3">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryData.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => handleTabChange(index)}
                    className={`flex-shrink-0 snap-start flex flex-col items-center justify-center gap-2 px-5 py-4 rounded-2xl font-medium text-xs transition-all min-w-[110px] ${activeTab === index
                        ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 active:scale-95'
                      }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-7 h-7`} />
                    <span className="whitespace-normal text-center leading-tight">{category.name}</span>
                    {activeTab === index && (
                      <motion.div
                        className="w-8 h-0.5 bg-white rounded-full mt-1"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            {/* Swipe Indicator */}
            <div className="flex justify-center items-center gap-2 mt-2 pb-2 text-xs text-gray-400">
              <ChevronLeft className="w-3 h-3 animate-pulse" />
              <span>Swipe to browse</span>
              <ChevronRight className="w-3 h-3 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content with Swipe Support */}
      <div
        ref={galleryContentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <activeCategory.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif mb-3 md:mb-4">
                {activeCategory.name}
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {activeCategory.description}
              </p>
              <div className="mt-3 md:mt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs md:text-sm font-medium">
                  <Camera className="w-4 h-4" />
                  {activeCategory.photos.length} photos
                </span>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {activeCategory.photos.map((photo, photoIndex) => (
                <PhotoCard
                  key={photo.src}
                  photo={photo}
                  onClick={() => handleOpenLightbox(activeTab, photoIndex)}
                />
              ))}
            </div>

            {/* Navigation Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTab === index 
                      ? 'bg-emerald-600 w-8' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to ${galleryData[index].name}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Virtual Tour Section - YouTube + 3D Tour */}
      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-6">
              <Video className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-3 md:mb-4">
              Experience Our Home Virtually
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Take a complete tour from the comfort of your home
            </p>
          </motion.div>

          {/* Video Tour Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-4 md:p-6 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Video className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl">Video Home Tour</h3>
                    <p className="text-emerald-50 text-xs md:text-sm">Guided walkthrough of our facility</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video bg-gray-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZyAEwLR1lsE"
                  title="Columbia Care Home Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 md:p-6 bg-gray-50">
                <p className="text-sm md:text-base text-gray-600 text-center">
                  Watch our comprehensive video tour showcasing every room, amenity, and the warm atmosphere of our home
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3D Interactive Tour Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-2xl flex items-center justify-center">
                    <Camera className="w-10 h-10 md:w-12 md:h-12 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                    Interactive 3D Tour
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Explore every corner at your own pace with our immersive 360° virtual tour. Walk through rooms, zoom in on details, and get a true feel for our home.
                  </p>
                  <a href="https://my.matterport.com/show?play=1&lang=en-US&m=Ek5iHJBymGt" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-bold text-sm md:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 md:gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Camera className="w-4 h-4 md:w-5 md:h-5" />
                      Launch 3D Tour
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <div className="text-center mt-8 md:mt-12">
            <p className="text-xs md:text-sm text-gray-500 italic">
              Can't make it in person? These virtual tours give you a comprehensive view of our beautiful home
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white font-serif mb-3 md:mb-4">
              Ready to Visit in Person?
            </h2>
            <p className="text-base md:text-xl text-emerald-50 mb-6 md:mb-8 px-4">
              Schedule a personalized tour and experience our home firsthand
            </p>
            <Link to="/schedule-a-tour">
              <motion.button
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-emerald-700 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-emerald-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Visit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <ImageLightbox
            photos={galleryData[selectedImage.categoryIndex].photos}
            selectedIndex={selectedImage.photoIndex}
            onClose={handleCloseLightbox}
            onNavigate={handleNavigation}
          />
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FacilityPage;