import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import { Link } from "react-router-dom";
import { UserCircle2 } from "lucide-react";

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

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading users...</p>;

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore {user?.role === "freelancer" ? "Employers" : "Freelancers"}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white/90 border rounded-xl shadow hover:shadow-lg p-6 transition-all">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar || "/avatar.avif"}
                alt={user.firstName}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-700">{user.firstName}</h3>
                <p className="text-sm text-gray-500">{user.position || "No title provided"}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600 truncate">{user.aboutMe || "No bio available"}</p>
            <Link to={`/freelancerdashboard/employers/${user._id}`}
              className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">View Profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllUsersGrid;
