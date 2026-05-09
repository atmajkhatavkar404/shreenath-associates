"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const rules = [
  "कागदपत्रे (फाईल) देते वेळी प्रोसेसिंग फी आवश्यक आहे Fee (non-refundable) राहील.",
  "सर्व कागदपत्रांची पूर्तता वेळेवर करणे आवश्यक राहील.",
  "फाईल प्रोसेस करतेवेळी CIBIL SCORE मध्ये फाईल रिजेक्ट झाली तर त्याची जबाबदारी आमच्यावर नाही.",
  "फाईल प्रोसेस बँकेच्या ऑफिशियल वेळेतच होईल.",
  "आपण दिलेल्या अपुऱ्या किंवा चुकीच्या माहितीमुळे आपली फाईल रखडल्यास किंवा रद्द (रोजेक्ट) झाल्यास ही सर्वस्वी कस्टमरची जबाबदारी असेल.",
  "बँकेच्या अधिकाऱ्यांनी बँकेच्या कामी जर काही फी मागितली (d.d. login fee/ morgadge) ही कस्टमरला pay करावी लागेल.",
  "फाईल प्रोसेस वेळी जे 3 चेक घेतले जातील ते कस्टमरने पूर्ण फी दिल्ल्यानंतर आमच्याकडून 15 दिवसाच्या आतमध्ये घेऊन जाणे बंधनकारक राहील.",
  "फाईल प्रोसेस करतेवेळी जर कस्टमरची काही डॉक्युमेंट्स ऑफिस कडून तयार केलीत तर त्याची फी वेगळी आकारण्यात येईल.",
  "आपण करत असलेले काम हे बँकेशी संबंधित असल्यामुळे यासाठी काही कालावधी जोड राहू शकतो याची कस्टमरने नोंद घेणे आवश्यक राहील."
];

export default function RulesPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            नियम व <span className="text-[#D32F2F]">अटी</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            कृपया पुढील नियम आणि अटी काळजीपूर्वक वाचा.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <AlertCircle className="text-[#D32F2F] mr-4" size={36} />
              <h2 className="text-2xl font-bold text-[#111111]">महत्त्वाच्या सूचना</h2>
            </div>
            
            <ul className="space-y-6">
              {rules.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {rule}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
