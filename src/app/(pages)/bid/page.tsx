import Breadcrums from "@/components/shared/Breadcrums";
import React from "react";
import PremiumBeats from "./PremiumBeats";
import ClosingSoon from "./ClosingSoon";
import UpcomingAuction from "./UpcomingAuction";
import PastAuction from "./PastAuctions";
import OngoingAcutionCarousel from "./OngoingAuction/page";

const Bids = () => {
  return (
    <div className="px-16">
      <div>
        <Breadcrums />
      </div>
      <div>
        <PremiumBeats />
      </div>
      <div>
        <OngoingAcutionCarousel />
      </div>

      <div>
        <ClosingSoon />
      </div>
      <div>
        <UpcomingAuction />
      </div>
      <div>
        <PastAuction />
      </div>
    </div>
  );
};

export default Bids;
