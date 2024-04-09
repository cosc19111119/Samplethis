import React from "react";
import Breadcrums from "@/components/shared/Breadcrums";
import ProfileSidebar from "@/components/profileSidebar";
import HeadingText from "./HeadingText";
import InformationCard from "./InformationCard";
import AccountSignUpForm from "./AccountSignUpForm";
const profileAccount = () => {
  const InformationCardData = [
    {
      icon: "🎵",
      txt: "Unlimited Access",
      txt1: "Dive into our extensive library of premium Samples. Find the perfect sound for your next project without any limitations.",
    },
    {
      icon: "💾",
      txt: " Save Your Favorites: ",
      txt1: "Dive into our extensive library of premium Samples. Find the perfect sound for your next project without any limitations.",
    },
    {
      icon: "🔔",
      txt: " Stay Updated:",
      txt1: "Dive into our extensive library of premium Samples. Find the perfect sound for your next project without any limitations.",
    },
    {
      icon: "🤝",
      txt: "Connect with Creators:",
      txt1: "Dive into our extensive library of premium Samples. Find the perfect sound for your next project without any limitations.",
    },
  ];
  return (
    <div className="px-14 mb-10">
      <div>
        <Breadcrums />
      </div>
      <div className="md:flex gap-10">
        <div className="flex justify-center md:h-[340px]">
          <ProfileSidebar />
        </div>
        <div className="mt-4 md:mt-0">
          <div>
            <HeadingText />
          </div>
          <div className="lg:flex-row flex-col flex gap-4 mt-4">
            {InformationCardData.map((card, index) => (
              <div className="" key={index}>
                <InformationCard
                  icon={card.icon}
                  txt={card.txt}
                  txt1={card.txt1}
                />
              </div>
            ))}
          </div>
          <div>
            <AccountSignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileAccount;
