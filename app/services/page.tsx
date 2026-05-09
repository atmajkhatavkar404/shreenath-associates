"use client";

import { motion } from "framer-motion";
import { FileCheck, Phone } from "lucide-react";
import Image from "next/image";

const servicesList = [
  {
    title: "शॉप ॲक्ट लायसन्स",
    docs: [
      "१ पासपोर्ट साईज फोटो",
      "लाईट बिल",
      "आधार कार्ड",
      "पॅन कार्ड",
      "दुकानदाराच्या नावाचे बोर्डचा फोटो",
    ],
    image: "/images/shop-act.jpg"
  },
  {
    title: "फूड लायसनस",
    docs: [
      "आधार कार्ड",
      "१ पासपोर्ट साईज फोटो",
      "लाईट बिल (दुकानाचे)",
      "७/१२ किंवा ८ अ/भाडे करार",
    ],
    image: "/images/food-liscence.png"
  },
  {
    title: "वसंतराव नाईक आर्थिक विकास महामंडळ (L.O.I)",
    docs: [
      "आधार कार्ड", "रहिवाशी दाखला", "पॅन कार्ड", "रेशन कार्ड", "वीज बिल",
      "मोबाईल नंबर", "२ पासपोर्ट साईज फोटो", "प्रतिज्ञापत्र", "डोमासाईल",
      "जातीचा दाखला", "जन्म प्रमाणपत्र", "शाळा सोडल्याचा दाखला",
      "व्यवसाय सुरु करणार त्याचे कोटेशन", "बँक खात्याची माहिती"
    ],
    image: "/images/vasantrao.jpg"
  },
  {
    title: "अण्णासाहेब पाटील (L.O.I)",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा दाखला", "रेशन कार्ड",
      "शाळा सोडल्याचा दाखला", "कास्ट सर्टिफिकेट", "प्रकल्प अहवाल"
    ],
    image: "/images/annasaheb-patil.png"
  },
  {
    title: "उद्योग आधार",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "बँकेचे पासबुक", "लाईट बिल"
    ],
    image: "/images/udyog-aadhar.png"
  },
  {
    title: "महात्मा फुले आर्थिक विकास महामंडळ (L.O.I)",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "लाईट बिल", "मतदान कार्ड", "जातीचा दाखला",
      "उत्पन्नाचा दाखला", "बँक खात्याचे माहिती", "व्यवसायाची कोटेशन"
    ],
    image: "/images/mahatmaphule.jpg"
  },
  {
    title: "OBC आर्थिक विकास महामंडळ (L.O.I)",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "जातीचा दाखला", "रेशन कार्ड", "लाईट बिल",
      "२ फोटो", "भाडे करार पत्र", "प्रोजेक्ट रिपोर्ट", "तांत्रिक व्यवसायाच्या आवश्यक प्रमाणपत्र", "बँक खात्याची माहिती"
    ],
    image: "/images/OBC-Yojana.jpg"
  },
  {
    title: "व्यावसायिक वाहन कर्ज (Commercial Vehicle Loan)",
    docs: [
      "आधार कार्ड / मतदान कार्ड", "योजना मंजुरी प्रमाणपत्र", "७ / १२", "पॅन कार्ड",
      "शोरूम कोटेशन", "मार्जिन मनी रिसीट", "डिलेवरी चलन",
      "Other Income Proof (दूध बिल, ऊस बिल पावती, Bank Statement, ITR)"
    ],
    image: "/images/vehical-loan.png"
  },
  {
    title: "पोल्ट्री लोन",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "७/१२ / ८ अ", "२ वर्ष ITR", "पोल्ट्री Vaccinated सर्टिफिकेट",
      "सोसायटी NOC", "एक वर्षाचे बँक स्टेटमेंट", "पोल्ट्री उभा करण्यासाठी ग्रामपंचायत NOC",
      "पोल्ट्री प्रोजेक्ट रिपोर्ट", "उद्योग आधार", "२ फोटो"
    ],
    image: "/images/poultry-loan.png"
  },
  {
    title: "गाय व म्हैस कर्ज",
    docs: [
      "आधार कार्ड", "पॅन कार्ड", "फोटो", "७/१२ खाते उतारा", "दुधाची बिले १२ महिन्याची",
      "एक वर्षाचे बँक स्टेटमेंट", "डेअरीची हमीपत्र", "मागील कर्जाचा खाते उतारा",
      "कमीत कमी ३० हजार कर्ज परतफेडीचा अनुभव आवश्यक", "इतर कोणतेही कर्ज असेल तर त्याचे स्टेटमेंट"
    ],
    image: "/images/poultry_loan.png"
  },
  {
    title: "वैयक्तिक कर्ज (Personal Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा पुरावा", "बँक स्टेटमेंट"],
    image: "/images/personal-loan.png"
  },
  {
    title: "व्यवसाय कर्ज (Business Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उद्योग आधार", "ITR", "बँक स्टेटमेंट"],
    image: "/images/business_loan.png"
  },
  {
    title: "गृह कर्ज (Home Loan)",
    docs: ["आधार कार्ड", "पॅन कार्ड", "उत्पन्नाचा पुरावा", "मालमत्तेची कागदपत्रे"],
    image: "/images/home_loan.png"
  },
  {
    title: "यंत्रसामग्री कर्ज (Machinery Loan)",
    docs: ["मशिनरीचे कोटेशन", "व्यवसाय पुरावा", "KYC कागदपत्रे"],
    image: "/images/machinery.jpg"
  },
  {
    title: "मॉर्टगेज कर्ज (Mortgage Loan)",
    docs: ["मालमत्तेची मूळ कागदपत्रे", "KYC", "उत्पन्नाचा पुरावा"],
    image: "/images/mortgage.png"
  },
  {
    title: "मुद्रा योजना (Mudra Loan)",
    docs: ["व्यवसायाचा प्रस्ताव (Project Report)", "कोटेशन", "आधार कार्ड", "पॅन कार्ड"],
    image: "/images/mudra_loan.png"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <section className="bg-[#111111] text-white py-24 px-4 sm:px-6 lg:px-8 mt-[-80px] pt-[120px]">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            आमच्या <span className="text-[#D32F2F]">सेवा</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-300"
          >
            तुमच्या सर्व गरजांसाठी आम्ही खालील सेवा पुरवतो. प्रत्येक सेवेसाठी आवश्यक कागदपत्रांची यादी पहा.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">{service.title}</h2>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#D32F2F] flex items-center mb-4">
                    <FileCheck size={24} className="mr-2" /> आवश्यक कागदपत्रे:
                  </h3>

                  <ul className="text-lg text-gray-700 space-y-2 mb-8 flex-grow">
                    {service.docs.map((doc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#D32F2F] font-bold mr-2">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/919860946943?text=नमस्कार,%20मला%20${encodeURIComponent(service.title)}%20विषयी%20माहिती%20हवी%20आहे.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1fae54] transition-colors text-lg"
                    >
                      <Phone size={20} className="mr-2" /> WhatsApp वर चौकशी करा
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
