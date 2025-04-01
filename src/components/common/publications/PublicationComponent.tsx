import GetPublications from "@/components/specific/publications/GetPublications";
import Publication from "@/components/specific/publications/Publication";
import React from "react";

const PublicationComponent = () => {
  return (
    <div className="pt-8">
      <Publication />
      <section className="m-auto pt-[32px]">
        <section className="flex justify-evenly items-start gap-4">
          <GetPublications />
        </section>
      </section>
    </div>
  );
};

export default PublicationComponent;
