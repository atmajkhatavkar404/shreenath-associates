"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-white">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            आमच्याशी <span className="text-[#D32F2F]">संपर्क</span> साधा
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            कर्ज विषयक कोणत्याही माहितीसाठी आम्हाला संपर्क करा. आम्ही तुम्हाला मदत करण्यास नेहमी तयार आहोत.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 space-y-8"
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-8">संपर्क माहिती</h2>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-1">मोबाईल नंबर</h4>
                  <a href="tel:+919860946943" className="block text-gray-600 hover:text-[#D32F2F] transition-colors text-lg">९८६०९४६९४३</a>
                  <a href="tel:+919112421191" className="block text-gray-600 hover:text-[#D32F2F] transition-colors text-lg">९११२४२११९१</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-1">कार्यालय</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    श्रीनाथ Associates<br />
                    मेन रोड, जवळचे लँडमार्क,<br />
                    तुमचे शहर, महाराष्ट्र
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-1">कामाची वेळ</h4>
                  <p className="text-gray-600 text-lg">
                    सोमवार - शनिवार: १०:०० AM - ६:०० PM<br />
                    रविवार: सुट्टी
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#111111] mb-8">आम्हाला संदेश पाठवा</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">तुमचे नाव</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all" placeholder="उदा. रमेश जाधव" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">मोबाईल नंबर</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all" placeholder="९८७६५४३२१०" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="service">कर्जाचा प्रकार</label>
                    <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all">
                      <option value="">निवडा...</option>
                      <option value="गृह कर्ज">गृह कर्ज</option>
                      <option value="व्यवसाय कर्ज">व्यवसाय कर्ज</option>
                      <option value="पोल्ट्री लोन">पोल्ट्री लोन</option>
                      <option value="वाहन कर्ज">वाहन कर्ज</option>
                      <option value="इतर">इतर</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">तुमचा संदेश</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all" placeholder="तुमची गरज किंवा प्रश्न येथे लिहा..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#111111] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D32F2F] transition-colors">
                    संदेश पाठवा
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.261274198124!2d73.84061211536785!3d18.5171120741122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAxLjYiTiA3M8KwNTAnMzQuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
