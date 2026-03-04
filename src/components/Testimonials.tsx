import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://share.google/R93mjMWSOCFljsFlE';

const testimonials = [
    {
        initials: 'SM',
        name: 'Sunita M.',
        relationship: 'Family Member of Resident',
        rating: 5,
        text: 'We looked at many places in Howard County before finding Columbia Care Home. The difference was immediate — it actually feels like a home, not a facility. The staff knew my mother\'s name, her habits, and her moods within the first week. The care is personal in a way you can\'t get from a larger place.'
    },
    {
        initials: 'RK',
        name: 'Rakesh K.',
        relationship: 'Son of Resident',
        rating: 5,
        text: 'My father needed significant support after his hip replacement, and the rehabilitation team here has been exceptional. Because the founders are Physical Therapists themselves, there is a clinical thoughtfulness to everything — from how his room is set up to the specific exercises they work on each day. His recovery has been better than any of us expected.'
    },
    {
        initials: 'PP',
        name: 'Priya P.',
        relationship: 'Daughter of Resident',
        rating: 5,
        text: 'My mother has memory care needs, and finding the right home was incredibly stressful. Columbia Care Home gave us access to Bhargav, the founder, directly. He walked us through everything. It\'s been six months and my mother is genuinely happy — she has a routine, a small community, and consistent caregivers who truly know her.'
    }
];

const Testimonials = () => {
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
                        These are real reviews from families who entrusted us with the care of their loved ones. We don't use stock photos or write our own testimonials.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex space-x-1 mb-5">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-stone-700 leading-relaxed italic flex-1 mb-6">
                                "{t.text}"
                            </p>

                            {/* Reviewer Identity */}
                            <div className="flex items-center gap-4 border-t border-stone-100 pt-5">
                                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-emerald-700 font-bold text-sm">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                                    <p className="text-stone-500 text-xs">{t.relationship}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
