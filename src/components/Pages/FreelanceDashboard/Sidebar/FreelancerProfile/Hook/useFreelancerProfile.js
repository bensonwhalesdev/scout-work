// hooks/useFreelancerProfile.js
import { useState } from "react";
import useGetUserStore from "@/store/useGetUserStore";
import { apiClient } from "@/lib/client";
import { toast } from "sonner";

const useFreelancerProfile = () => {
  const { user, setUser, loading } = useGetUserStore();
  const [formData, setFormData] = useState({ ...user });

  // Update form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit profile update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiClient.patch(`/user/${user._id}`, formData);
      setUser(res.data);
      toast.success("Profile updated successfully");
      window.location.reload();
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  // Handle avatar change and convert to base64
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;
      try {
        const res = await apiClient.patch(`/user/${user._id}`, { avatar: base64String });
        setUser(res.data);
        toast.success("Profile picture updated!");
        window.location.reload();
      } catch (err) {
        toast.error("Failed to update avatar");
      }
    };
    reader.readAsDataURL(file);
  };

  return {
    user,
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleAvatarChange,
  };
};

export default useFreelancerProfile;
