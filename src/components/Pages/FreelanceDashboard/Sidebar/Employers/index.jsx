import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import { Link } from "react-router-dom";
import { UserCircle2 } from "lucide-react";
import PreLoad from "@/components/Reuseables/PreLoad";

const AllUsersGrid = () => {
  const { user } = useGetUserStore();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiClient.get("/user/all");
        // Filter based on opposite role
        const filtered = res.data.filter((u) => u.role !== user?.role);
        setUsers(filtered);
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  
  

  if (loading) return <div className="flex justify-center items-center mt-50" ><PreLoad /></div>;

  return (
    <section className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-700 mb-12 animate-fade-in-down">
    Explore {user?.role === "freelancer" ? "Employers" : "Freelancers"}
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {users.map((userdetails, index) => (
      <div
        key={userdetails._id}
        className="bg-white/30 backdrop-blur-md border border-green-100 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-[1.03] group animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
      >
        {/* Floating green glow */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition duration-300"></div>

        <div className="flex items-center gap-4">
          <img
            src={userdetails.avatar || "/avatar.avif"}
            alt={userdetails.firstName}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h3 className="text-lg font-bold text-green-800">{userdetails.firstName}</h3>
            <p className="text-sm text-gray-500 italic">
              {userdetails.position || "No title provided"}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 line-clamp-3">
          {userdetails.aboutMe || "No bio available"}
        </p>

        <Link
          to={
            user?.role === "freelancer"
              ? `/freelancerdashboard/employers/${userdetails._id}`
              : `/dashboard/freelancers/${userdetails._id}`
          }
          className="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
        >
          View Profile
        </Link>
      </div>
    ))}
  </div>
</section>

  );
};

export default AllUsersGrid;
