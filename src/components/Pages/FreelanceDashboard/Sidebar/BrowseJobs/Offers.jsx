import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useOffers from "./Hook/useOffers";

const Offers = () => {
  const { offers, handleAction } = useOffers();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Job Offers</h2>

      {offers.length === 0 ? (
        <p className="text-gray-500 italic">No job offers yet.</p>
      ) : (
        <div className="space-y-4">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="p-4 border border-gray-200 bg-white rounded-xl shadow"
            >
              <h3 className="font-semibold text-green-700">{offer?.jobId?.title || "Untitled Job"}</h3>
              <p className="text-gray-700 mt-1">{offer.message}</p>
              <div className="mt-3 space-x-3">
                {offer.status === "pending" ? (
                  <>
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAction(offer._id, "accepted")}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500"
                      onClick={() => handleAction(offer._id, "declined")}
                    >
                      Decline
                    </Button>
                  </>
                ) : (
                  <span className={`text-sm font-medium ${offer.status === "accepted" ? "text-green-600" : "text-red-500"}`}>
                    {offer.status.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Offers;
