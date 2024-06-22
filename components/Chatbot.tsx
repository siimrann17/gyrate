"use client";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleQuestionClick = (question) => {
    setActiveQuestion(question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Having trouble? Ask Aida
      </button>

      {isOpen && (
        <div className="mt-2 bg-white p-5 rounded-lg shadow-lg w-80">
          <button
            onClick={toggleChatbot}
            className="bg-red-500 text-white px-2 py-1 rounded-full float-right"
          >
            Close
          </button>

          <h2 className="text-lg font-bold mb-4">How can we help you?</h2>

          <ul className="space-y-2">
            {[
              "Booking related issue",
              "Payment related issue",
              "Scooter breakdown during ride",
              "Complaint related to service",
              "My concern is not listed here",
            ].map((question, index) => (
              <li key={index}>
                <button
                  onClick={() => handleQuestionClick(question)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
                >
                  {question}
                </button>
              </li>
            ))}
          </ul>

          {activeQuestion && (
            <div className="mt-4 p-2 bg-gray-100 rounded-md">
              <p className="font-semibold">You selected:</p>
              <p>{activeQuestion}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
