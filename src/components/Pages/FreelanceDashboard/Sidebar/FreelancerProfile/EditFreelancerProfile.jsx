import React, { useState } from "react";
import useGetUserStore from "@/store/useGetUserStore";
import { apiClient } from "@/lib/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EditFrelancerProfile = () => {
  const { user, setUser } = useGetUserStore();
  const [formData, setFormData] = useState({ ...user });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiClient.patch(`/user/${user._id}`, formData);
      setUser(res.data);
      toast.success("Profile updated!");
      navigate("/freelancerdashboard/userprofile");
    } catch (err) {
      toast.error("Update failed.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md shadow-lg rounded-3xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-green-700">Edit Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "firstName",
            "email",
            "phone",
            "position",
            "location",
            "experience",
            "skill",
            "certification",
            "education",
            "portfolio",
            "history",
            "aboutMe",
          ].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm text-gray-600 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Rate</label>
            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md shadow-sm"
            />
          </div>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditFrelancerProfile;
