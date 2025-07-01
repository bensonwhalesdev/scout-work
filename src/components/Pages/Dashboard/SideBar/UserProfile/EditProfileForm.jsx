import React, { useState } from "react";
import useGetUserStore from "@/store/useGetUserStore";
import { apiClient } from "@/lib/client";
import { toast } from "sonner";

const EditProfileForm = () => {
  const { user, setUser } = useGetUserStore();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    phone: user?.phone || "",
    position: user?.position || "",
    aboutMe: user?.aboutMe || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await apiClient.patch(`/user/${user._id}`, formData);
      setUser(res.data);
      toast.success("Profile updated successfully!");
      window.location.reload();
    } catch (err) {
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Edit Profile</h3>
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" />
      <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
      <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" className="w-full p-2 border rounded" />
      <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChange} placeholder="About Me" className="w-full p-2 border rounded" />
      <button  type="submit" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">{ loading ? "Saving..." : "Save Changes"}</button>
    </form>
  );
};

export default EditProfileForm;
