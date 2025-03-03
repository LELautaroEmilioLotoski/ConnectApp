"use client";
import React from "react";
import PublicationComponent from "@/components/common/publications/PublicationComponent";
import UserButtonsCommon from "@/components/common/userDashboard/UserButtonsCommon";
import AsideUserLeft from "@/components/specific/aside/AsideUserLeft";
import AsideUserRight from "@/components/specific/aside/AsideUserRight";
import CoverPhotoComponent from "@/components/specific/userDashboard/coverPhoto/CoverPhotoComponent";
import Friends from "@/components/specific/userDashboard/friends/Friends";
import Photos from "@/components/specific/userDashboard/photos/Photos";
import UserData from "@/components/specific/userDashboard/userDataDashboard/UserData";
import UserDataDashboard from "@/components/specific/userDashboard/userDataDashboard/UserDataDashboard";
import UserNav from "@/components/specific/userDashboard/userDataDashboard/UserNav";
import { useUserContext } from "@/context/user/UserContext";

const UserDashboard = () => {
  const { token, user } = useUserContext();

  return (
    <>
      {token && user ? (
        <section className="bg-gray-200 relative overflow-x-hidden">
          <AsideUserLeft />
          <div className="min-w-[940px] max-w-[1020px] m-auto bg-white relative">
            <div className="relative flex justify-center items-center">
              <CoverPhotoComponent />
            </div>
            <div className="flex gap-12 items-center justify-between m-5">
              <div className="flex justify-center pl-24 gap-8">
                <div className="flex justify-around items-center gap-4">
                  <UserDataDashboard />
                </div>
                <UserData />
              </div>
              <UserButtonsCommon />
            </div>
            <div className="relative flex justify-center pt-4">
              <UserNav />
            </div>
          </div>
          <section className="min-w-[940px] max-w-[1020px] m-auto">
            <aside className="flex justify-evenly items-start gap-4">
              <PublicationComponent />
              <div className="pt-8">
                <Friends />
                <div className="pt-8">
                  <Photos />
                </div>
              </div>
            </aside>
          </section>
          <AsideUserRight />
        </section>
      ) : (
        <h2>No hay un usuario</h2>
      )}
    </>
  );
};

export default UserDashboard;
