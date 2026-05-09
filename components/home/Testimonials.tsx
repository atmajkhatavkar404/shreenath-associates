"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "गणेश पाटील",
    role: "शेतकरी",
    text: "श्री नाथ असोसिएट्स मुळे मला माझ्या पोल्ट्री फार्मसाठी खूप कमी वेळेत कर्ज मिळाले. त्यांची टीम खूप मदतगार आहे.",
    rating: 5,
  },
  {
    id: 2,
    name: "संदीप कदम",
    role: "व्यावसायिक",
    text: "माझ्या नवीन व्यवसायासाठी मुद्रा लोन मिळवण्यात त्यांनी योग्य मार्गदर्शन केले. जलद सेवा आणि उत्तम प्रतिसाद.",
    rating: 5,
  },
  {
    id: 3,
    name: "अमित जोशी",
    role: "नोकरदार",
    text: "गृह कर्जासाठी अनेक ठिकाणी प्रयत्न केले, पण इथून मला सर्वात कमी व्याजदरात कर्ज मिळाले. धन्यवाद!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-4"
          >
            ग्राहकांचे <span className="text-[#D32F2F]">अभिप्राय</span>
          </motion.h2>
          <p className="text-lg text-gray-600">आमच्या समाधानी ग्राहकांच्या प्रतिक्रिया</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl relative transition-shadow duration-300 hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-8 text-gray-200" size={60} />
              <div className="flex text-yellow-400 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#111111]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
