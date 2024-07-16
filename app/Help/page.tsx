// pages/HelpPage.js
'use client';
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'; 

const HelpPage = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      section: 'Booking related issue',
      questions: [
        {
          question: 'How do I book a scooter?',
          answer: 'Our website offers a simple booking process. You can select your preferred scooter, pick-up location, and rental duration. Follow the on-screen instructions for a smooth booking experience.',
        },
        {
          question: 'What are the requirements to book a scooter?',
          answer: 'To rent a scooter, you must be at least 16 years old and possess a valid driver\'s license. If you are a college student, you will also be required to show a valid college student ID card.',
        },
        {
          question: 'Can I cancel my booking?',
          answer: 'Yes, you can cancel your booking by logging into your account within a specific time. You can also read the refund & cancellation policy for full details.',
        },
        {
          question: 'What happens if I miss my pick-up time?',
          answer: 'We recommend arriving on time to ensure a smooth rental experience. There is a buffer time of 10 minutes provided to you in addition to your actual ride duration.',
        },
        {
          question: 'Can I view or modify my booking details after confirmation?',
          answer: 'Yes, you can access and manage your existing bookings anytime before half an hour start of ride time by canceling the current ride and booking a new one.',
        },
        {
          question: 'What safety measures do you have in place?',
          answer: 'We prioritize rider’s safety. Our scooters undergo regular maintenance, and we offer complimentary helmets for riders. Please check our terms and conditions for details on insurance options. Our scooters are also equipped with advanced safety device beacon.',
        },
        {
          question: 'I accidentally entered the wrong bank account details during checkout. Can I change it?',
          answer: 'Yes, you can update your billing information within the payments page of the Gyrate website.',
        },
        {
          question: 'What happens if I go over my estimated rental time?',
          answer: 'We encourage booking a ride according to your needs. If you exceed your booked rental duration, you will be charged for the additional time accordingly, depending on the timing of the day.',
        },
        {
          question: 'I am not able to book my next ride as it\'s showing some penalty charges on the payment page. What should I do?',
          answer: 'These charges are shown because you may have violated the ride booking rules under the privacy policy of Gyrate. You need to pay the additional amount to start your journey with Gyrate again.',
        },
      ],
    },
    {
      section: 'Payment related issue',
      questions: [
        {
          question: 'What if money got deducted from my bank account, but the ride wasn\'t booked?',
          answer: '1. Wait a Few Days: In most cases, the temporary hold or failed booking refund will automatically reappear in your account within 5 business days (depending on your bank). 2. Check Booking Status: Before contacting support, log in to your Gyrate account on the website or app and check your booking history. If there\'s no booking confirmation but your money was deducted, proceed to the next step. 3. Contact Gyrate Customer Support: If the money hasn\'t reappeared in your account after 5 business days, contact Gyrate customer support at gyrateone@gmail.com.',
        },
        {
          question: 'Are there any discounts available for longer rentals?',
          answer: 'We may offer discounts or promotions for extended rentals. Check our website and social media pages for the latest deals and offers.',
        },
        {
          question: 'What additional fees might I incur during my rental?',
          answer: 'We don’t charge any additional fee for booking. Please review our terms & conditions for details on potential fees you might incur in some unfortunate cases.',
        },
        {
          question: 'I had canceled my ride but didn’t receive a refund in my bank account?',
          answer: 'Don\'t worry, your money is safe. It usually takes 3 business days to reflect back in your bank account.',
        },
      ],
    },
    {
      section: 'Scooter breakdown during ride',
      questions: [
        {
          question: 'What happens if the scooter stops during my ride?',
          answer: 'We take measures to ensure scooters are well-maintained and charged. However, in the unlikely event that the scooter runs out of battery during your rental or stops due to any other malfunction, please immediately contact Gyrate customer support by dialing the number mentioned on my rides page under the currently booked rides section.',
        },
        {
          question: 'Scooter breakdown because I met with an accident?',
          answer: 'If your scooter breaks down due to an unfortunate accident, you may be responsible for the damages incurred. The company is not liable until we identify any specific predominant fault in the vehicle. In case of an accident involving another person or property, legal jurisdiction will handle the matter according to applicable laws. Please read our terms and conditions for more details.',
        },
      ],
    },
    {
      section: 'Complaint related to service',
      questions: [
        {
          question: 'I had a bad experience with Gyrate. How can I file a complaint?',
          answer: 'For grievances and complaints regarding our service, you can mention them in the feedback section available under my rides page. We monitor each and every feedback individually and work on improving our services immediately.',
        },
      ],
    },
    {
      section: 'My issues not listed here',
      questions: [
        {
          question: 'Feel free to mail us at:',
          answer: 'gyrateone@gmail.com',
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-black bg-gradient-to-r from-blue-500 via-green-500 to-orange-600 text-transparent bg-clip-text drop-shadow-lg">{section.section}</h2>

          <div className="space-y-6 w-full">
            {section.questions.map((faq, questionIndex) => (
              <div
                key={questionIndex}
                className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 ${
                  openQuestionIndex === `${sectionIndex}-${questionIndex}` ? 'mb-4' : 'mb-1'
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(`${sectionIndex}-${questionIndex}`)}
                >
                  <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600">{faq.question}</h3>
                  {openQuestionIndex === `${sectionIndex}-${questionIndex}` ? (
                    <ChevronUpIcon className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                {openQuestionIndex === `${sectionIndex}-${questionIndex}` && (
                  <div className="mt-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HelpPage;
