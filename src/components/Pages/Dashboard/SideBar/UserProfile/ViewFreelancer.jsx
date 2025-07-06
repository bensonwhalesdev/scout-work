import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "@/lib/client";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, BadgeCheck, BriefcaseBusiness, } from "lucide-react";
import PreLoad from "@/components/Reuseables/PreLoad";
import OfferJobModal from "../EmployerApplications/OfferjobModal";
import useGetUserStore from "@/store/useGetUserStore";

const ViewFreelancer = ({freelancerId}) => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useGetUserStore(); 

  useEffect(() => {
    const fetchFreelancer = async () => {
      try {
        const res = await apiClient.get(`/user/${id}`);
        setFreelancer(res.data);
      } catch (err) {
        console.error("Failed to fetch freelancer:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancer();
  }, [id]);


  useEffect(() => {
    const recordView = async () => {
      if (user?.role === "employer") {
        try {
          await apiClient.post("/profile-views", {
            employerId: user._id,
            freelancerId: id,
          });
          
        } catch (err) {
          console.error("Failed to record view:", err);
        }
      }
    };

    recordView();
  }, [id, user]);

  if (loading) {
    return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  }

  if (!freelancer) {
    return <div className="text-center py-20 text-red-500">Freelancer not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
  <div className="bg-gradient-to-tr from-white to-green-50 rounded-3xl shadow-xl p-10 space-y-12">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      <img
        src={freelancer.avatar || "/avatar.jpeg"}
        alt={freelancer.firstName}
        className="w-36 h-36 rounded-full border-4 border-green-400 object-cover shadow-md hover:scale-105 transition duration-300"
      />
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-4xl font-bold text-green-500">{freelancer.firstName}</h1>
        <p className="flex items-center justify-center md:justify-start text-sm text-gray-600 gap-2">
          <BadgeCheck className="text-green-500 w-4 h-4" />
          {freelancer.position || "No title set"}
        </p>
        <p className="flex items-center justify-center md:justify-start text-sm text-gray-600 gap-2">
          <MapPin className="text-green-500 w-4 h-4" />
          {freelancer.location || "Unknown Location"}
        </p>
        <p className="flex items-center justify-center md:justify-start text-sm text-gray-600 gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          {freelancer.skill}
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <OfferJobModal freelancerId={freelancer._id} />
      </div>
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { label: "Email", value: freelancer.email },
        { label: "Phone Number", value: freelancer.phone },
        { label: "Rate (₦/hr)", value: freelancer.rate || "N/A" },
        {
          label: "Portfolio",
          value: freelancer.portfolio ? (
            <a
              href={
                freelancer.portfolio.startsWith("http")
                  ? freelancer.portfolio
                  : `https://${freelancer.portfolio}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition text-sm"
            >
              {freelancer.portfolio}
            </a>
          ) : (
            "N/A"
          ),
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-green-100 p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition duration-300"
        >
          <h3 className="text-green-600 font-semibold text-md mb-1">{item.label}</h3>
          <p className="text-gray-700 text-sm">{item.value}</p>
        </div>
      ))}
    </div>

    {/* Details Sections */}
    {[
      { title: "Education", value: freelancer.education },
      { title: "Certification", value: freelancer.certification },
      { title: "About Me", value: freelancer.aboutMe },
      { title: "Experience", value: freelancer.experience, icon: <BriefcaseBusiness className="w-4 h-4 text-green-600" /> },
      { title: "Work History", value: freelancer.history },
    ].map((item, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 shadow-inner border border-green-100">
        <h3 className="text-xl font-semibold text-green-600 mb-2 flex items-center gap-2">
          {item.icon} {item.title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">{item.value || "N/A"}</p>
      </div>
    ))}
  </div>
</section>
  );
};


export default ViewFreelancer;
