import React from 'react';
import { CheckCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-white">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/team.avif" // <- Replace with your actual image
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 bg-green-800 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start your freelance journey in seconds
          </h2>
          <p className="mb-6 text-gray-100 text-sm">
            Whether you're hiring top talent or offering your expertise, it's fast, easy, and free to get started.
          </p>

          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              Create your profile and list your skills
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              Post a task or find professionals that match your needs
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              Connect, collaborate, and grow — all in one place
            </li>
          </ul>

          <button className="bg-white text-green-800 font-medium py-2 px-5 rounded-md hover:bg-gray-100 transition-all w-fit">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
