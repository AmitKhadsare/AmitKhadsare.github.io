import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BedDouble, Sofa, Sun, Wind } from 'lucide-react';

// Using a single placeholder image as requested
const placeholderImage = 'https://placehold.co/800x600/E2E8F0/A0AEC0?text=Photo+Coming+Soon';

const facilitySections = [
  {
    title: "Resident Rooms",
    description: "Comfortable, safe, and personal spaces our residents are proud to call their own.",
    icon: BedDouble,
    photos: [
      { caption: "Bright and airy private suite" },
      { caption: "Space for personal keepsakes and furniture" },
      { caption: "Accessible, private bathroom" },
    ]
  },
  {
    title: "Common Areas",
    description: "Vibrant, shared spaces designed for socializing, dining, and relaxation.",
    icon: Sofa,
    photos: [
      { caption: "Community dining hall during lunch" },
      { caption: "Cozy living room with fireplace" },
      { caption: "Activity and game room" },
    ]
  },
  {
    title: "Outdoor Spaces",
    description: "Secure and beautifully maintained gardens and patios for fresh air and gentle strolls.",
    icon: Sun,
    photos: [
      { caption: "Secure walking paths and garden" },
      { caption: "Covered patio with comfortable seating" },
      { caption: "Resident gardening area" },
    ]
  },
  {
    title: "Therapy Areas",
    description: "Professional, on-site facilities to support the health and mobility of our residents.",
    icon: Wind,
    photos: [
      { caption: "On-site physical therapy center" },
      { caption: "State-of-the-art rehabilitation equipment" },
      { caption: "Space for group exercise classes" },
    ]
  }
];

const PhotoCard = ({ caption }: { caption: string }) => (
  <motion.div
    className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <img src={placeholderImage} alt={caption} className="w-full h-48 object-cover" />
    <p className="text-center p-3 text-sm text-gray-600">{caption}</p>
  </motion.div>
);

const FacilityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 overflow-hidden">
        {/* Background Image with higher opacity for mobile visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')`
          }}
        />
        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 to-teal-700/70" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Explore Our Home</h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              A gallery of our warm, safe, and welcoming environment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {facilitySections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.photos.map(photo => (
                    <PhotoCard key={photo.caption} caption={photo.caption} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacilityPage; 