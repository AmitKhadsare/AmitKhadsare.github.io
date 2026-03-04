
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ClipboardCheck,
    MessageSquare,
    UserCheck,
    Activity,
    Users,
    Send,
    AlertCircle,
    Shield,
    Star,
    Clock,
    Briefcase,
    ExternalLink
} from 'lucide-react';
import SEOHead from './SEOHead';

const AuditSection = ({ icon: Icon, title, risk, description, current, suggestion, children }:
    { icon: any, title: string, risk: 'Critical' | 'Medium' | 'Low', description: string, current: string, suggestion: string, children?: React.ReactNode }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mb-8">
        <div className="p-6 border-b border-stone-100 bg-stone-50/50 flex items-start justify-between">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${risk === 'Critical' ? 'bg-red-50' : 'bg-emerald-50'}`}>
                    <Icon className={`w-6 h-6 ${risk === 'Critical' ? 'text-red-600' : 'text-emerald-600'}`} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-stone-800">{title}</h3>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mt-1 ${risk === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                        {risk} Priority
                    </span>
                </div>
            </div>
        </div>
        <div className="p-8">
            <p className="text-stone-600 mb-6 text-lg">{description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <h4 className="font-bold text-stone-800 mb-2 text-sm uppercase tracking-wide">Current Website Version</h4>
                    <p className="text-stone-600 italic">"{current}"</p>
                </div>
                <div className="p-5 bg-emerald-50/30 rounded-xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-800 mb-2 text-sm uppercase tracking-wide">Our Recommended Update</h4>
                    <p className="text-stone-700">{suggestion}</p>
                </div>
            </div>

            {children}
        </div>
    </div>
);

const ClientPortalPage: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formsubmit.co/ajax/amitkhadsare@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "Columbia Care Home - Client Feedback Received",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } catch (error) {
            console.error("Submission failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 pt-24">
                <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ClipboardCheck className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-stone-800 mb-4 font-serif">Thank You, Bhargav!</h1>
                    <p className="text-stone-600 mb-8 text-lg">Your feedback and answers have been sent directly to the team. We will begin applying these updates to the website immediately.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition"
                    >
                        Review Audit Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 pb-24 pt-20">
            <SEOHead
                title="SEO & Content Strategy Proposal | Columbia Care Home"
                description="Private proposal and content audit for Columbia Care Home."
                noIndex={true}
            />

            {/* Header Banner */}
            <header className="bg-white border-b border-stone-200 py-12 px-4 shadow-sm">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Strategic Review</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 font-serif mt-2">Columbia Care Home</h1>
                        <p className="text-stone-500 mt-2 text-lg">SEO & Content Quality Proposal — March 2026</p>
                    </div>
                    <div className="bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100">
                        <p className="text-emerald-800 font-bold text-sm uppercase">Business Review Link</p>
                        <div className="flex items-center gap-2 text-emerald-600 mt-1">
                            <Star className="w-4 h-4 fill-emerald-600" />
                            <span className="font-semibold italic text-emerald-700">5.0 Star Presence Online</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 mt-12">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-12">
                    <div className="flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h2 className="text-amber-900 font-bold text-lg leading-tight mb-1">Purpose of this Review</h2>
                            <p className="text-amber-800 opacity-90">Google is now highly sensitive to "AI-generated" content. To rank #1 in Columbia, we must use real stories, real credentials, and real data. Please review the findings below and provide your input to help us refine the site.</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* Section 1: Hero */}
                    <AuditSection
                        icon={UserCheck}
                        title="Differentiating from Competitors"
                        risk="Critical"
                        description="Your current headline is very common across other care homes. We want to highlight your unique position as licensed Physical Therapists."
                        current="Find peace of mind knowing your loved one is in a safe, nurturing home..."
                        suggestion="Expert, therapist-owned senior care in the heart of Columbia. We combine the warmth of family with clinical excellence in physical and occupational therapy."
                    >
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-stone-700 mb-2">Bhargav, do you prefer we use 'Physiotherapist-Owned' or 'Therapist-Owned' in our headlines?</label>
                            <textarea name="headline_preference" rows={3} className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 transition" placeholder="Your preference here..."></textarea>
                        </div>
                    </AuditSection>

                    {/* Section 2: Rehab */}
                    <AuditSection
                        icon={Activity}
                        title="Leveraging At Home Rehabilitation"
                        risk="Critical"
                        description="Your status as a founder of At Home Rehab is a major trust signal. We want to explicitly link the two to show medical credibility."
                        current="Our team provides on-site therapy support."
                        suggestion="Residents at Columbia Care Home have direct access to the clinical expertise of At Home Rehabilitation—providing Physical, Occupational, and Speech therapy on-site."
                    >
                        <div className="mt-4 space-y-4">
                            <label className="block text-sm font-bold text-stone-700">Are there specific therapy machines or equipment you want us to mention on the Rehab page?</label>
                            <textarea name="rehab_equipment" rows={3} className="w-full p-4 rounded-xl border border-stone-200" placeholder="e.g., Parallel bars, resistance bikes, or specific programs..."></textarea>
                        </div>
                    </AuditSection>

                    {/* Section 3: Testimonials */}
                    <AuditSection
                        icon={Users}
                        title="Real Social Proof"
                        risk="Critical"
                        description="We have found 3 real reviews on Google! We want to remove the stock photos currently on the site and replace them with these verified reviews."
                        current="Placeholder Maria Rodriguez / Stock Photos"
                        suggestion="Verified Review Badges (5.0 Stars) linked directly to Google Maps, ensuring total trust for families."
                    >
                        <div className="mt-4 p-4 bg-stone-50 rounded-xl flex items-center gap-3">
                            <ExternalLink className="w-5 h-5 text-emerald-600" />
                            <a href="https://share.google/R93mjMWSOCFljsFlE" target="_blank" className="text-emerald-700 font-bold hover:underline">View Your 3 Real Google Reviews Here</a>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-bold text-stone-700 mb-2">Any specific family story or 'thank you' note you'd like us to feature prominently?</label>
                            <textarea name="special_testimonial" rows={3} className="w-full p-4 rounded-xl border border-stone-200" placeholder="A short sentence or story..."></textarea>
                        </div>
                    </AuditSection>

                    {/* Section 4: History */}
                    <AuditSection
                        icon={Clock}
                        title="Our Story & Years in Service"
                        risk="Medium"
                        description="Adding specific years makes the business feel established and stable. We've framed it as a journey from your therapy practice to the care home."
                        current="Bhargav observes a critical need..."
                        suggestion="Framing the timeline around your years of experience in the Columbia/Maryland area since [Year]."
                    >
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-stone-700 mb-2">In What Year did you start At Home Rehabilitation?</label>
                            <input type="text" name="founding_year" className="w-full p-4 rounded-xl border border-stone-200" placeholder="e.g., 2015" />
                        </div>
                    </AuditSection>

                    {/* Section 5: Careers */}
                    <AuditSection
                        icon={Briefcase}
                        title="Careers & Recruitment"
                        risk="Low"
                        description="We want to ensure your recruitment email is active so you don't miss out on local talent."
                        current="careers@columbiacarehome.com"
                        suggestion="Verification of working email inbox for future growth."
                    >
                        <div className="mt-4">
                            <label className="block text-sm font-bold text-stone-700 mb-2">Is there any other contact method for candidates? (e.g., WhatsApp or Phone)</label>
                            <input type="text" name="recruitment_info" className="w-full p-4 rounded-xl border border-stone-200" placeholder="Optional contact info..." />
                        </div>
                    </AuditSection>

                    {/* Submission Footer */}
                    <div className="sticky bottom-8 left-0 right-0 max-w-2xl mx-auto px-4 z-50">
                        <div className="bg-stone-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10 flex items-center justify-between gap-6 backdrop-blur-md bg-opacity-95">
                            <div className="hidden md:block">
                                <p className="font-bold">Ready to proceed?</p>
                                <p className="text-xs text-stone-400">Your answers will be sent to the agency team.</p>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 md:flex-none py-4 px-10 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-400 transition flex items-center justify-center gap-3 disabled:bg-stone-700"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Feedback & Authorize'}
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </form>

                <footer className="mt-24 text-center text-stone-400 text-sm pb-12">
                    <p>© 2026 Columbia Care Home Web Strategy. Private & Confidential.</p>
                </footer>
            </main>
        </div>
    );
};

export default ClientPortalPage;
