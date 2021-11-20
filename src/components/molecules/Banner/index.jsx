import React from "react";
import { Text, Button } from "components";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-hero-pattern w-full h-screen bg-center bg-no-repeat bg-cover">
        <div className="w-full h-screen flex justify-center items-center">
          <div className=" text-center text-white">
            <div className="w-full flex justify-center items-center">
              <Text ownStyle={"text-5xl mr-2"}>{"Cari Kerja"}</Text>
              <Text className="font-medium" ownStyle={"text-5xl"} bold={true}>
                Jauh Lebih Mudah
              </Text>
            </div>
            <div class="w-full flex justify-around items-center mr-80 mt-10">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Cari Posisi atau Perusahaan"
                class="w-11/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mx-4"
              />
              <input
                type="text"
                id="lokasi"
                name="lokasi"
                placeholder="Lokasi"
                class="w-3/6 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />
              <Button
                variant={"search"}
                textStyle={"white"}
                ownStyle={"py-3 px-8 ml-5"}
                rounded={"rounded"}
              >
                Cari
              </Button>
            </div>
            <div className="w-full flex justify-center items-center">
              <Text variant={"subtitle"} bold={false} ownStyle={"mt-6 mr-2"}>
                {
                  "Tersedia ribuan lowongan pekerjaan untuk Kamu saat ini. Lihat lowongan "
                }
              </Text>
              <Text
                variant={"subtitle"}
                bold={true}
                ownStyle={"mt-6 text-yellow-500	hover:text-yellow-600"}
              >
                {"di sini"}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
