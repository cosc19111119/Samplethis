"use client";
import React, { useState } from "react";
import OurCollection from "./OurCollection";
import LatestVideos from "./LatestVideos";
import Pagination from "@/components/shared/Pagination";
import Breadcrums from "@/components/shared/Breadcrums";

const VideoLibrary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Example total number of pages

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    // You can add additional logic here, such as fetching data for the new page.
  };
  return (
    <div className="px-14 w-full">
      <Breadcrums />
      <OurCollection />
      <LatestVideos />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default VideoLibrary;
