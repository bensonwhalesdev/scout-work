import React, { useState } from "react";
import { apiClient } from "@/lib/client";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.patch("/auth/change-password", formData);
      alert("Password updated successfully");
    } catch (err) {
      alert("Failed to change password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Change Password</h3>
      <input name="currentPassword" type="password" value={formData.currentPassword} onChange={handleChange} placeholder="Current Password" className="w-full p-2 border rounded" />
      <input name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} placeholder="New Password" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Change Password</button>
    </form>
  );
};

export default ChangePasswordForm;
