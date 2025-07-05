import { apiClient } from "@/lib/client";
import useGetUserStore from "@/store/useGetUserStore";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useOffers = () => {
    const { user } = useGetUserStore();
      const [offers, setOffers] = useState([]);
    
      useEffect(() => {
        const fetchOffers = async () => {
          try {
            const res = await apiClient.get(`/joboffer/freelancer/${user._id}`);
            setOffers(res.data);
          } catch (err) {
            toast.error("Failed to fetch offers");
          }
        };
    
        if (user) fetchOffers();
      }, [user]);
    
      const handleAction = async (offerId, status) => {
        try {
          await apiClient.patch(`/joboffer/${offerId}`, { status });
          toast.success(`Offer ${status}`);
          setOffers((prev) =>
            prev.map((offer) =>
              offer._id === offerId ? { ...offer, status } : offer
            )
          );
        } catch {
          toast.error("Failed to update offer");
        }
      };

      return { offers, handleAction };
}

export default useOffers;