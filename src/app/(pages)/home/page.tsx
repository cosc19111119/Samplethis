import React from "react";
import SectionNewOn from "./(sections)/SectionNewOn";
import MusicSample from "./(sections)/MusicSimpleSection";
import ArtistSection from "./(sections)/AtristSection";
import SectionOne from "./(sections)/SectionOne";
import SoundCraft from "./(sections)/SoundCraft";
import PlansSection from "./(sections)/PlansSection";
import DiscoverQuestions from "./(sections)/DiscoverQuestions";
import CarouselCardSection from "./(sections)/CarouselCardSection";
import Testimonials from "./(sections)/Testimonials";

const Home = () => {
  return (
    <div className="">
      <div className="lg:px-14 px-4 ">
        <SectionOne />
      </div>
      <div className="lg:px-14 px-4">
        <CarouselCardSection />
      </div>
      <div className="lg:px-14 px-4">
        <SectionNewOn />
      </div>
      <div className="">
        <MusicSample />
      </div>
      <div className="lg:px-14 px-4">
        <ArtistSection />
      </div>
      <div className="lg:px-14 px-4">
        <SoundCraft />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div className="lg:px-14 px-4">
        <PlansSection />
      </div>
      <div className="">
        <DiscoverQuestions />
      </div>
    </div>
  );
};

export default Home;
