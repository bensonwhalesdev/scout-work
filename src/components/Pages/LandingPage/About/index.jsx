import React from "react";
import "animate.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-200 mt-15 text-[#195A22] min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto animate__animated animate__fadeInUp animate__slow">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Welcome to ScoutWork
            </h1>
            <p className="text-lg sm:text-xl text-[#195A22]/80 max-w-2xl mx-auto">
              Connecting talented freelancers with visionary employers — securely, simply, and smartly.
            </p>
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative animate__animated animate__fadeInLeft animate__delay-1s">
              <div className="bg-[#195A22] backdrop-blur-md p-8 rounded-md border border-[#195A22]/10 shadow-xl">
                <h2 className="text-2xl text-white font-semibold mb-4">Our Mission</h2>
                <p className="text-[#fff] leading-relaxed">
                  At ScoutWork, we believe that talent knows no boundaries. Our platform empowers freelancers and
                  employers by simplifying the job discovery, application, and hiring process — all in one elegant
                  solution.
                </p>
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#195A22] opacity-10 rounded-full blur-2xl" />
            </div>

            <div className="animate__animated animate__fadeInRight animate__delay-1s">
              <img
                src="/team.avif"
                alt="Teamwork illustration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 animate__animated animate__fadeInUp animate__delay-2s">
            {[
              {
                title: "For Freelancers",
                desc: "Create a stunning profile, showcase your skills, and apply to jobs that match your passion and expertise.",
              },
              {
                title: "For Employers",
                desc: "Post jobs with ease, receive quality applications, and hire the best freelancers for your projects.",
              },
              {
                title: "Seamless Experience",
                desc: "User-friendly interface, fast performance, and secure file upload to make collaboration frictionless.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#195A22] backdrop-blur-lg rounded-2xl p-6 border border-[#195A22]/10 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#fff] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
            <h2 className="text-2xl font-semibold mb-4">Join the Future of Work</h2>
            <p className="text-[#195A22]/70 mb-6">
              Whether you're hiring or job-seeking — ScoutWork is your gateway.
            </p>
            <Link
              to="/auth"
              className="inline-block px-8 py-3 rounded-md bg-[#195A22] text-white font-medium hover:bg-green-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
