import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services.
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

            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website at https://www.columbiacarehome.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Columbia Care Home's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            
            <h2>3. Disclaimer</h2>
            <p>The materials on Columbia Care Home's website are provided on an 'as is' basis. Columbia Care Home makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2>4. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of South Carolina and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            
             <p className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"><strong>Disclaimer:</strong> This is a template Terms of Service and is not legal advice. Please consult with a legal professional to tailor this document to your specific needs.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 