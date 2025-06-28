import React from "react";
import ReuseableButton from "@/components/Reuseables/ResuableButton";
import { Upload, Users, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "animate.css";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true,
  });

  const steps = [
    {
      title: "Showcase Your Skills",
      description:
        "Create your profile and list your services to connect with clients actively searching for experts like you.",
      icon: <Upload className="w-8 h-8 text-green-600" />,
      buttonText: "Post Your Skill",
    },
    {
      title: "Hire a Professional",
      description:
        "Browse thousands of freelancers, view their profiles, and hire the right expert for your project in just a few clicks.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      buttonText: "Hire",
    },
    {
      title: "Free to Join",
      description:
        "Sign up and start your journey for free. Whether you're hiring or offering services, there are no upfront costs.",
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      buttonText: "Join For Free",
      link: "/auth",
    },
  ];

  return (
    <section className={`py-16 px-4 bg-[#195A22]`}>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </h1>
        <h3 className="text-lg md:text-xl text-white mb-2">
          Find top talent or showcase your expertise at your own pace
        </h3>
        <p className="text-white">
          Work with trusted professionals or become one. It's simple, safe, and
          effective.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-opacity duration-1000 ${
          inView ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
          >
            <div className="mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{step.description}</p>
            <Link to={step.link}>
              <ReuseableButton
                classStyle={
                  "bg-[#26AE61] hover:bg-[#195A22] text-white px-6 py-3 rounded-md w-full text-sm flex items-center justify-center gap-2 cursor-pointer"
                }
                text={step.buttonText}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
