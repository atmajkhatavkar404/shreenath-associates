"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "गणेश पाटील",
    role: "शेतकरी",
    text: "श्री नाथ असोसिएट्स मुळे मला माझ्या पोल्ट्री फार्मसाठी खूप कमी वेळेत कर्ज मिळाले. त्यांची टीम खूप मदतगार आहे.",
    rating: 5,
    location: "पुणे",
  },
  {
    id: 2,
    name: "संदीप कदम",
    role: "व्यावसायिक",
    text: "माझ्या नवीन व्यवसायासाठी मुद्रा लोन मिळवण्यात त्यांनी योग्य मार्गदर्शन केले. जलद सेवा आणि उत्तम प्रतिसाद.",
    rating: 5,
    location: "सातारा",
  },
  {
    id: 3,
    name: "अमित जोशी",
    role: "नोकरदार",
    text: "गृह कर्जासाठी अनेक ठिकाणी प्रयत्न केले, पण इथून मला सर्वात कमी व्याजदरात कर्ज मिळाले. धन्यवाद!",
    rating: 5,
    location: "मुंबई",
  },
  {
    id: 4,
    name: "सुनीता देशमुख",
    role: "लघु उद्योजिका",
    text: "अण्णासाहेब पाटील योजनेतून कर्ज मिळवण्यासाठी मला श्री नाथ असोसिएट्सने खूप मोठी मदत केली.",
    rating: 5,
    location: "कोल्हापूर",
  },
  {
    id: 5,
    name: "रमेश चौधरी",
    role: "वाहन चालक",
    text: "कमर्शियल व्हेईकल लोन घ्यायचे होते, प्रक्रिया इतकी सोपी होईल वाटले नव्हते. उत्कृष्ट सेवा!",
    rating: 5,
    location: "नाशिक",
  },
  {
    id: 6,
    name: "प्रशांत जाधव",
    role: "दुकानदार",
    text: "शॉप ॲक्ट लायसन्स आणि बिझनेस लोन एकाच छताखाली मिळाले. खूप वेळ वाचला.",
    rating: 4,
    location: "सांगली",
  },
];

export default function ReviewsPage() {
  return (
    <div className="py-20 bg-white">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ग्राहकांचे <span className="text-[#D32F2F]">अभिप्राय</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            आमच्या कामाची पावती म्हणजेच ग्राहकांनी दिलेला हा विश्वास.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={80} className="text-[#D32F2F]" />
                </div>
                
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg mb-8 italic relative z-10 min-h-[80px]">
                  "{review.text}"
                </p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center font-bold text-[#D32F2F] text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111111]">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role} • {review.location}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
