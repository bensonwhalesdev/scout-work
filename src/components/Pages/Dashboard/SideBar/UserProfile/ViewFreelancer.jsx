import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "@/lib/client";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  BadgeCheck,
} from "lucide-react";
import PreLoad from "@/components/Reuseables/PreLoad";

const ViewFreelancer = () => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;
  }

  if (!freelancer) {
    return <div className="text-center py-20 text-red-500">Freelancer not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-10 space-y-10">
        {/* Avatar and Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          <img
            src={freelancer.avatar || "/avatar.jpeg"}
            alt={freelancer.firstName}
            className="w-36 h-36 rounded-full border-4 border-green-500 object-cover shadow-lg hover:scale-105 transition-transform"
          />
          <div className="text-center md:text-left space-y-1">
            <h1 className="text-4xl font-extrabold text-green-700 tracking-tight">
              {freelancer.firstName}
            </h1>
            <p className="text-md text-gray-600 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-green-500" />
              {freelancer.position || "No title set"}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {freelancer.location || "Unknown Location"}
            </p>
          </div>
        </div>

        {/* Grid Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Info label="Email" icon={<Mail className="w-4 h-4" />} value={freelancer.email} />
          <Info label="Phone" icon={<Phone className="w-4 h-4" />} value={freelancer.phone} />
          <Info label="Experience" icon={<Briefcase className="w-4 h-4" />} value={freelancer.experience} />
          <Info label="Skill" icon={<Star className="w-4 h-4 text-yellow-500" />} value={freelancer.skill} />
          <Info label="Certification" value={freelancer.certification} />
          <Info label="Education" icon={<GraduationCap className="w-4 h-4" />} value={freelancer.education} />
          <Info label="Rate (₦/hr)" value={`₦${freelancer.rate || 0}`} />
          <Info label="Portfolio" value={freelancer.portfolio} />
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-2xl p-6 shadow-inner">
          <h3 className="text-xl font-semibold text-green-600 mb-2">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            {freelancer.aboutMe || "No bio provided."}
          </p>
        </div>

        {/* Work History */}
        <div className="bg-white rounded-2xl p-6 shadow-inner">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Work History</h3>
          <p className="text-gray-700 leading-relaxed">
            {freelancer.history || "No work history yet."}
          </p>
        </div>
      </div>
    </section>
  );
};

const Info = ({ label, value, icon }) => (
  <div className="bg-white/80  p-4 rounded-xl shadow-sm hover:shadow-md transition">
    <p className="text-xs text-gray-500 flex items-center gap-2 font-medium">
      {icon} {label}
    </p>
    <p className="text-md font-semibold text-green-700 mt-1 truncate">
      {value || "N/A"}
    </p>
  </div>
);

export default ViewFreelancer;
