import { Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        initials: 'RS',
        name: 'Rachel Schwarzschild',
        relationship: 'Home Therapist',
        rating: 5,
        text: 'As a therapist who goes into many assisted living facilities throughout the Howard County region, I wanted to take a moment to recognize the exemplary care provided at Columbia Care Home. The residents always appear well kept, caregivers genuinely care about the residents and are actively engaged in the residents’ care. I have found the owners to be approachable, receptive, and readily available for questions.'
    },
    {
        initials: 'AB',
        name: 'Anita Belkowitz',
        relationship: 'Daughter of Resident',
        rating: 5,
        text: 'The care my father, who has been diagnosed with late stage Parkinson’s, is receiving at Columbia Care Home is phenomenal. Bhargav, the owner, along with his wife and aides have been a blessing to our family. The attention to detail in both the patient care and the facility setup is like no other. A holistic approach to care is provided by team of clinical providers, various therapies and medication management.'
    },
    {
        initials: 'SV',
        name: 'Stephanie Vitrano',
        relationship: 'Family Member',
        rating: 5,
        text: 'The caring and supportive team at Columbia Care Home is beyond amazing. The founding principles of the home are evident in their approach and they are also very calming and helpful to us as a family. The attention to detail and warmth in the updated environment are a comfort to the family. The team responds promptly to calls, texts, emails and help navigate changes.'
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                        <Star className="w-4 h-4 fill-emerald-800" />
                        Family Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 font-serif mb-6 italic text-center">
                        What Columbia Families Are Saying
                    </h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto italic leading-relaxed">
                        Read why families and local professionals recommend Columbia Care Home for high-trust residential care.
                    </p>
                </div>

                {/* Spotlight Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] shadow-sm border border-stone-200 p-8 lg:p-10 flex flex-col relative group hover:shadow-xl transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-emerald-50 group-hover:text-emerald-100 transition-colors" />
                            
                            {/* Stars */}
                            <div className="flex space-x-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Teaser Text */}
                            <p className="text-stone-700 leading-relaxed flex-1 mb-8 text-base md:text-lg line-clamp-5">
                                "{t.text}"
                            </p>

                            {/* Reviewer Identity */}
                            <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                                    <span className="font-bold text-base transition-colors">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-emerald-950 text-sm">{t.name}</p>
                                    <p className="text-emerald-700 text-[10px] uppercase tracking-widest font-bold">{t.relationship}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main CTA & Google Verification */}
                <div className="text-center flex flex-col items-center gap-8">
                    <Link
                        to="/family-stories"
                        className="inline-flex items-center gap-3 bg-emerald-900 text-white px-10 py-5 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-2xl group"
                    >
                        Read the Full Family Experiences
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 bg-white border border-stone-200 rounded-full shadow-md text-stone-600">
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase whitespace-nowrap">Verified 5.0 Rating on Google</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
