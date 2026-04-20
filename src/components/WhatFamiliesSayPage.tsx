import { Star, Quote, Heart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const fullTestimonials = [
    {
        id: 'rachel',
        name: 'Rachel Schwarzschild',
        relationship: 'Home Therapist',
        rating: 5,
        type: 'Expert Perspective',
        image: '/images/blog/exterior-front.jpg',
        text: 'As a therapist who goes into many assisted living facilities throughout the Howard County region, I wanted to take a moment to recognize the exemplary care provided at Columbia Care Home. The residents always appear well kept, caregivers genuinely care about the residents and are actively engaged in the residents’ care. I have found the owners to be approachable, receptive, and readily available for questions. Columbia Care Home is without a doubt, one of the best residences I’ve encountered in the area.'
    },
    {
        id: 'anita',
        name: 'Anita Belkowitz',
        relationship: 'Daughter of Resident',
        rating: 5,
        type: 'Family Story',
        image: '/images/blog/living-room-seating.jpg',
        text: 'The care my father, who has been diagnosed with late stage Parkinson’s, is receiving at Columbia Care Home is phenomenal. Bhargav, the owner, along with his wife and aides have been a blessing to our family. The attention to detail in both the patient care and the facility setup is like no other. A holistic approach to care is provided by team of clinical providers, various therapies and medication management. Personal attention to each resident is seen in everything they do- from the home cooked meals, to the personal updates on the resident’s daily status, to the individual time spent caring for each resident. My family could not have asked for a better place to assist in my father’s care. I sleep better knowing he is good hands here. Bhargav is striving to provide the best care for his residents, and he knocks it out of the park!'
    },
    {
        id: 'stephanie',
        name: 'Stephanie Vitrano',
        relationship: 'Family Member',
        rating: 5,
        type: 'Family Story',
        image: '/images/blog/patio-deck.jpg',
        text: 'The caring and supportive team at Columbia Care Home is beyond amazing. The founding principles of the home are evident in their approach and they are also very calming and helpful to us as a family. The attention to detail and warmth in the updated environment are a comfort to the family. The team responds promptly to calls, texts, emails and help navigate changes and complexity with external care specialists and medications. They warmly also share photos /updates periodically to mark key group events such as birthday celebrations and newly-added, chair yoga!'
    },
    {
        id: 'janet',
        name: 'Janet Henschke',
        relationship: 'Family Member',
        rating: 5,
        type: 'Family Story',
        image: '/images/blog/dining-area.jpg',
        text: 'What a blessing!! After multiple hospital stays and in home care, thru the help of Allyson Stanton Aging Solutions, we found Columbia Care Homes..our familys first impression was one of a sigh of relief ....they\'ve captured the essence of home care at its finest, from the owners to the staff, to the other residents. The quality of care is top notch, the aroma of home cooked nutritious meals makes you feel so welcome and it feels like your home away from home..thank you for making this difficult time so much easier for our family❤️'
    }
];

const WhatFamiliesSayPage = () => {
    return (
        <div className="bg-stone-50 min-h-screen pt-20">
            {/* Simple Human Hero */}
            <header className="py-24 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="/images/blog/exterior-front.jpg" 
                        alt="Columbia Care Home Exterior" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 italic text-white">What Columbia Families Are Saying</h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto italic leading-relaxed">
                        Honest notes and reflections from the families and health professionals who know our home the best.
                    </p>
                </div>
            </header>

            {/* Stories List */}
            <main className="max-w-7xl mx-auto px-4 py-24 space-y-32">
                {fullTestimonials.map((story, index) => (
                    <article 
                        key={story.id} 
                        id={story.id}
                        className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Imagery */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img 
                                    src={story.image} 
                                    alt={`Residential view - ${story.name} story`} 
                                    className="w-full h-[400px] md:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                                        <Home className="w-3 h-3" />
                                        Home Environment
                                    </div>
                                    <h3 className="text-2xl font-serif italic">{story.type === 'Expert Perspective' ? 'Professional Observation' : 'A Family Journey'}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="mb-8">
                                <Quote className="w-12 h-12 text-emerald-200 mb-6" />
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(story.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-8">
                                    {story.text}
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-stone-200">
                                <div className="w-16 h-16 rounded-2xl bg-stone-800 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <span className="text-xl font-bold">{story.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-emerald-950">{story.name}</h4>
                                    <p className="text-emerald-700 font-bold uppercase tracking-tighter text-sm">{story.relationship}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            {/* Soft Human CTA */}
            <section className="bg-emerald-50 py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Heart className="w-12 h-12 text-emerald-700 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 font-serif mb-8 italic">Would you like to see the home for yourself?</h2>
                    <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                        Sometimes the best way to understand the "sigh of relief" our families describe is to walk through the front door. We welcome you to schedule a quiet, private visit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link 
                            to="/schedule-a-tour"
                            className="bg-emerald-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl"
                        >
                            Visit the Home
                        </Link>
                        <Link 
                            to="/contact"
                            className="bg-white text-emerald-950 border border-emerald-100 px-12 py-5 rounded-full font-bold text-lg hover:bg-stone-50 transition-all shadow-md"
                        >
                            Have a Quick Question?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatFamiliesSayPage;
