import PublicationComponent from "@/components/common/publications/PublicationComponent";
import CoverPhotoComponent from "@/components/specific/userDashboard/coverPhoto/CoverPhotoComponent";
import Friends from "@/components/specific/userDashboard/friends/Friends";
import UserData from "@/components/specific/userDashboard/userDataDashboard/UserData";
import UserDataDashboard from "@/components/specific/userDashboard/userDataDashboard/UserDataDashboard";
import UserNav from "@/components/specific/userDashboard/userDataDashboard/UserNav";
import { users } from "@/mocks/usersMock";
import React from "react";

const UserDashboard = () => {
  const usersData = users[2];

  return (
    <>
      <section className="bg-gray-200">
        <div className="min-w-[940px] max-w-[1020px] m-auto bg-white">
          <div className="relative flex justify-center items-center">
            <CoverPhotoComponent />
          </div>
          <div className="flex justify-center items-center gap-4">
            <UserDataDashboard />
          </div>
          <div className="flex justify-center items-center gap-4 pt-[5rem]">
            <UserData />
          </div>
          <div className="relative flex justify-center pt-4">
            <UserNav />
          </div>
        </div>
        <section className="min-w-[940px] max-w-[1020px] m-auto">
          <div className="flex justify-evenly items-start gap-4">
            <PublicationComponent />
            <div className="pt-8">
              <Friends />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default UserDashboard;
