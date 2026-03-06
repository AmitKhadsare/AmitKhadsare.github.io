import React, { useState, useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://share.google/R93mjMWSOCFljsFlE';

const testimonials = [
    {
        initials: 'SV',
        name: 'Stephanie Vitrano',
        relationship: 'Family Member',
        rating: 5,
        text: 'The caring and supportive team at Columbia Care Home is beyond amazing. The founding principles of the home are evident in their approach and they are also very calming and helpful to us as a family.'
    },
    {
        initials: 'AB',
        name: 'Anita Belkowitz',
        relationship: 'Daughter of Resident',
        rating: 5,
        text: 'The care my father, who has been diagnosed with late stage Parkinson’s, is receiving at Columbia Care Home is phenomenal. Bhargav, the owner, along with his wife and aides have been a blessing to our family. The attention to detail is exceptional.'
    },
    {
        initials: 'JH',
        name: 'Janet Henschke',
        relationship: 'Family Member',
        rating: 5,
        text: "What a blessing!! After multiple hospital stays and in home care, we found Columbia Care Homes..our familys first impression was one of a sigh of relief ....they've captured the essence of a true home away from home."
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-stone-100 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">Verified Google Reviews</p>
                    <h2 className="text-4xl font-bold text-stone-800 font-serif mb-4">
                        What Columbia Families Are Saying
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        We are honored to share these genuine experiences from the families who have found professional support and a true sense of belonging at Columbia Care Home.
                    </p>
                </div>

                {/* Cards Container with Mobile Carousel */}
                <div className="relative mb-12">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
                    >
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[82vw] md:w-auto snap-center bg-white rounded-2xl shadow-sm border border-stone-100 p-8 hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                {/* Stars */}
                                <div className="flex space-x-1 mb-5">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-stone-700 leading-relaxed italic flex-1 mb-6 text-base md:text-lg">
                                    "{t.text}"
                                </p>

                                {/* Reviewer Identity */}
                                <div className="flex items-center gap-4 border-t border-stone-100 pt-5">
                                    <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-700 font-bold text-sm">{t.initials}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 text-sm">{t.name}</p>
                                        <p className="text-stone-500 text-[10px] uppercase tracking-wider font-semibold">{t.relationship}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots (Mobile Only) */}
                    <div className="flex md:hidden justify-center gap-2 mt-4">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 bg-emerald-600' : 'w-2 bg-stone-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Google Verification Badge */}
                <div className="text-center">
                    <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        aria-label="Read our reviews on Google Maps"
                    >
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-stone-800">
                            <span className="font-bold text-xl">5.0</span>
                            <span className="text-stone-500 ml-2 text-sm">Stars on Google</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
