"use client";
import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/icons/hero";
import Image from "next/image";
import { fetchCharacters, fetchSingleCharacter } from "@/api/api";
import Pagination from "@/ui/pagination/pagination";
import SearchBox from "../searchBox/searchBox";
import Modal from "@/ui/modal/modal";
import StatusDot from "@/components/status-dot/statusDot";
import CharacterCardSkeleton from "@/components/skeleton/characterCardSkeleton";
import { BsChevronUp } from "react-icons/bs";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState({ val: "", by: "name" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const topDivRef = useRef(null);

  const scrollToTop = () => {
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = async (id) => {
    fetchSingleCharacter({ id }).then((res) => {
      setModalData(res);
      setIsModalOpen(true);
    });
  };
  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCharacters({ page: 1 }).then((res) => {
      setData(res);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });
  }, []);

  const onPageChange = async (page) => {
    setIsLoading(true);
    const res = await fetchCharacters({ page });
    setData(res);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleSearch = async (val, by) => {
    setSearch({ val, by });
  };

  return (
    <div className="flex flex-col items-center gap-0 bg-white">
      <div className="min-h-[400px] relative flex items-center text-center">
        <h1 className="relative z-10 md:text-8xl sm:text-6xl text-5xl font-black text-primary-black">
          The Rick and Morty API
        </h1>
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Hero />
        </div>
      </div>
      <div
        ref={topDivRef}
        className="flex-1 flex flex-col justify-center bg-[#272b33] w-full"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 sm:py-[81px] py-[40px] h-full">
          {isLoading ? (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <CharacterCardSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              <div className="w-full flex items-center justify-center">
                <SearchBox handleSearch={handleSearch} />
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <>
                  {modalData && (
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
                            {/* <div className={`h-3 w-3 rounded-full sm:text-xl ${statusDot(modalData.status)}`}></div> */}
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
                          <p className="text-gray-500 sm:text-xl">
                            Last known location
                          </p>
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
                          <p className="text-gray-500 sm:text-xl">
                            First seen in
                          </p>
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
                  )}
                </>
              </Modal>
              {data &&
                data.results &&
                data.results.length > 0 &&
                data.results
                  .filter((item) =>
                    item[search.by]
                      .toLowerCase()
                      .includes(search.val.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row bg-[#3c3e44] sm:w-[600px] w-[85%]  h-auto sm:h-[210px] rounded-lg overflow-hidden shadow-lg"
                    >
                      <div className="h-[300px] sm:h-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={220}
                          height={220}
                          className="object-cover h-full w-full sm:w-auto"
                          priority
                        />
                      </div>
                      <div className="flex flex-col justify-around ml-0 sm:ml-4 p-4 sm:p-0">
                        <div>
                          <h2
                            onClick={() => openModal(item.id)}
                            className="text-2xl font-extrabold text-white cursor-pointer hover:text-primary-orange"
                          >
                            {item.name}
                          </h2>
                          <div className="flex items-center gap-2">
                            <StatusDot status={item.status} />
                            <p className="text-white">
                              {item.species} - {item.status}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-500">Last known location:</p>
                          <p
                            className={`text-white font-light text-md ${
                              item.location.name != "unknown" &&
                              "cursor-pointer hover:text-primary-orange"
                            }`}
                          >
                            {item.location.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">First seen in:</p>
                          <p
                            className={`text-white font-light text-md ${
                              item.origin.name != "unknown" &&
                              "cursor-pointer hover:text-primary-orange"
                            }`}
                          >
                            {item.origin.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              <div className="w-full flex items-center justify-center">
                <Pagination
                  info={data.info}
                  onPageChange={onPageChange}
                  totalResult={data.results.length}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <button
        className="fixed bottom-5 right-5 border-gray-300 shadow-xl border-2 p-4 bg-white rounded-full inset-border hover:bg-gray-300 transition-all duration-150"
        onClick={scrollToTop}
      >
        <BsChevronUp />
      </button>
    </div>
  );
};

export default HomePage;
