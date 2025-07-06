import { Share2 } from "lucide-react";
import { toast } from "sonner";

const ShareProfile = ({ freelancer }) => {
  const profileUrl = `${window.location.origin}/dashboard/freelancers/${freelancer._id}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${freelancer.firstName}'s Profile on ScoutWork`,
          text: `Check out ${freelancer.firstName}'s freelancer profile on ScoutWork.`,
          url: profileUrl,
        });
      } else {
        await navigator.clipboard.writeText(profileUrl);
        toast.success("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
      toast.error("Failed to share the profile.");
    }
  };

  return (
    <button onClick={handleShare} className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"><Share2 className="w-5 h-5" />Share Your Profile</button>
  );
};
export default ShareProfile;
