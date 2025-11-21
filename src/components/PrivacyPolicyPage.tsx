import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Privacy Policy | Columbia Care Home"
        description="Read our Privacy Policy to understand how Columbia Care Home collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, senior care privacy, columbia care legal"
        url="/privacy-policy"
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="prose lg:prose-lg max-w-none">
            <p className="lead">Last updated: June 29, 2025</p>

            <p>Columbia Care Home ("us", "we", or "our") operates the https://www.columbiacarehome.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, information provided through our contact and tour scheduling forms.</p>

            <h2>Use of Data</h2>
            <p>Columbia Care Home uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to allow you to participate in interactive features of our Service when you choose to do so, to provide customer care and support, and to gather analysis or valuable information so that we can improve the Service.</p>

            <h2>Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us by email at columbiacarehomes@gmail.com.</p>

            <p className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"><strong>Disclaimer:</strong> This is a template Privacy Policy and is not legal advice. Please consult with a legal professional to ensure your policy is compliant with all applicable laws and regulations.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 
