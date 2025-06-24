import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      relationship: 'Daughter of Resident',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Columbia Care Home has been a blessing for our family. The staff treats my mother with such kindness and respect. She\'s happier here than she\'s been in years, and I have complete peace of mind knowing she\'s in such caring hands.'
    },
    {
      name: 'James Thompson',
      relationship: 'Son of Resident',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The level of care and attention my father receives is exceptional. The diverse staff understands different cultural needs, and they\'ve made him feel truly at home. The medical care is top-notch, and the activities keep him engaged and social.'
    },
    {
      name: 'Sarah Chen',
      relationship: 'Daughter of Resident',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I was worried about finding a care facility that would respect my mother\'s cultural background. Columbia Care Home exceeded all expectations. They celebrate diversity and make every resident feel valued. The communication with families is outstanding.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            What Families Say About Us
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families have to say about 
            their experience with Columbia Care Home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 text-emerald-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                  <p className="text-sm text-stone-600">{testimonial.relationship}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-stone-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-stone-800">
              <span className="font-bold text-xl">4.9/5</span>
              <span className="text-stone-600 ml-2">from 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;