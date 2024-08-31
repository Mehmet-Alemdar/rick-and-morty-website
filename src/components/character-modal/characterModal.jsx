import React from "react";
import StatusDot from "../status-dot/statusDot";
import Image from "next/image";

const CharacterModal = ({ modalData }) => {
  return (
    <div className="flex flex-col bg-[#3c3e44] w-[100%] h-auto overflow-hidden rounded-lg items-center text-center">
      <div className="h-full w-full">
        <Image
          src={modalData.image}
          alt={modalData.name}
          width={220}
          height={220}
          className="object-cover h-full w-full"
          priority
        />
      </div>
      <div className="flex flex-col justify-around gap-4 py-4">
        <div>
          <h2 className="sm:text-3xl text-2xl font-extrabold text-white cursor-pointer hover:text-primary-orange">
            {modalData.name}
          </h2>
          <div className="flex items-center gap-2 justify-center">
            <StatusDot status={modalData.status} />
            <p className="text-white sm:text-xl">
              {modalData.species} - {modalData.status}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 sm:text-xl">Gender</p>
          <p
            className={`text-white font-light sm:text-xl ${
              modalData.gender != "unknown" &&
              "cursor-pointer hover:text-primary-orange"
            }`}
          >
            {modalData.gender}
          </p>
        </div>
        <div>
          <p className="text-gray-500 sm:text-xl">Last known location</p>
          <p
            className={`text-white font-light sm:text-xl ${
              modalData.location.name != "unknown" &&
              "cursor-pointer hover:text-primary-orange"
            }`}
          >
            {modalData.location.name}
          </p>
        </div>
        <div>
          <p className="text-gray-500 sm:text-xl">First seen in</p>
          <p
            className={`text-white font-light sm:text-xl ${
              modalData.origin.name != "unknown" &&
              "cursor-pointer hover:text-primary-orange"
            }`}
          >
            {modalData.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
