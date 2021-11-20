import React from "react";
import { Text, Button } from "components";

const Loker = () => {
  return (
    <section className="bg-gray-100 text-gray-600 body-font">
      <div className="px-20 py-24 mx-auto">
        <Text
          ownStyle={"text-center text-gray-600 text-3xl mb-2"}
          variant={"title"}
          bold={true}
        >
          Lowongan pilihan untuk kamu
        </Text>
        <Text
          ownStyle={"text-center text-gray-400 text-lg mb-20"}
          variant={"subtitle"}
        >
          Buruan lamar lowongannya, biar kamu cepet dapet kerja
        </Text>
        <div className="flex flex-wrap -m-4">
          {/* Card Fix */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="card  min-w-sm border border-gray-100 bg-white  transition-shadow shadow-xl hover:shadow-xl min-w-max">
              <div className="w-full card__media">
                <div className="h-32 w-full bg-gray-100 opacity-80"></div>
              </div>
              <div className="  card__media--aside "></div>
              <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                  <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-white min-w-max  -top-16  bg-white row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                    <img
                      className="h-24 w-24 md rounded-full relative"
                      src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      alt=""
                    />
                    <div className="absolute"></div>
                  </div>
                  <div className="flex flex-col  justify-center items-center -mt-12 w-full">
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-lg tex-black"}
                    >
                      PT Maju Terus (SEMANGAT TERUS)
                    </Text>
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-sm tex-black"}
                    >
                      PT Maju Terus{" "}
                    </Text>
                    <Text ownStyle={"text-sm text-gray-500"}>
                      Penempatan Mandalika Lombok
                    </Text>
                    <Text ownStyle={"text-sm text-blue-400 mb-6"}>
                      Gaji Negosiasi
                    </Text>
                    <Button
                      variant={"dark"}
                      rounded={"rounded-full"}
                      ownStyle={"py-2 px-6 mb-6 text-white"}
                    >
                      Lamar Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="card  min-w-sm border border-gray-100 bg-white  transition-shadow shadow-xl hover:shadow-xl min-w-max">
              <div className="w-full card__media">
                <div className="h-32 w-full bg-gray-100 opacity-80"></div>
              </div>
              <div className="  card__media--aside "></div>
              <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                  <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-white min-w-max  -top-16  bg-white row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                    <img
                      className="h-24 w-24 md rounded-full relative"
                      src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      alt=""
                    />
                    <div className="absolute"></div>
                  </div>
                  <div className="flex flex-col  justify-center items-center -mt-12 w-full">
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-lg tex-black"}
                    >
                      PT Maju Terus (SEMANGAT TERUS)
                    </Text>
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-sm tex-black"}
                    >
                      PT Maju Terus{" "}
                    </Text>
                    <Text ownStyle={"text-sm text-gray-500"}>
                      Penempatan Mandalika Lombok
                    </Text>
                    <Text ownStyle={"text-sm text-blue-400 mb-6"}>
                      Gaji Negosiasi
                    </Text>
                    <Button
                      variant={"dark"}
                      rounded={"rounded-full"}
                      ownStyle={"py-2 px-6 mb-6 text-white"}
                    >
                      Lamar Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="card  min-w-sm border border-gray-100 bg-white  transition-shadow shadow-xl hover:shadow-xl min-w-max">
              <div className="w-full card__media">
                <div className="h-32 w-full bg-gray-100 opacity-80"></div>
              </div>
              <div className="  card__media--aside "></div>
              <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                  <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-white min-w-max  -top-16  bg-white row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                    <img
                      className="h-24 w-24 md rounded-full relative"
                      src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      alt=""
                    />
                    <div className="absolute"></div>
                  </div>
                  <div className="flex flex-col  justify-center items-center -mt-12 w-full">
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-lg tex-black"}
                    >
                      PT Maju Terus (SEMANGAT TERUS)
                    </Text>
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-sm tex-black"}
                    >
                      PT Maju Terus{" "}
                    </Text>
                    <Text ownStyle={"text-sm text-gray-500"}>
                      Penempatan Mandalika Lombok
                    </Text>
                    <Text ownStyle={"text-sm text-blue-400 mb-6"}>
                      Gaji Negosiasi
                    </Text>
                    <Button
                      variant={"dark"}
                      rounded={"rounded-full"}
                      ownStyle={"py-2 px-6 mb-6 text-white"}
                    >
                      Lamar Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="card  min-w-sm border border-gray-100 bg-white  transition-shadow shadow-xl hover:shadow-xl min-w-max">
              <div className="w-full card__media">
                <div className="h-32 w-full bg-gray-100 opacity-80"></div>
              </div>
              <div className="  card__media--aside "></div>
              <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                  <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-white min-w-max  -top-16  bg-white row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                    <img
                      className="h-24 w-24 md rounded-full relative"
                      src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      alt=""
                    />
                    <div className="absolute"></div>
                  </div>
                  <div className="flex flex-col  justify-center items-center -mt-12 w-full">
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-lg tex-black"}
                    >
                      PT Maju Terus (SEMANGAT TERUS)
                    </Text>
                    <Text
                      variant="subtitle"
                      bold={true}
                      ownStyle={"text-sm tex-black"}
                    >
                      PT Maju Terus{" "}
                    </Text>
                    <Text ownStyle={"text-sm text-gray-500"}>
                      Penempatan Mandalika Lombok
                    </Text>
                    <Text ownStyle={"text-sm text-blue-400 mb-6"}>
                      Gaji Negosiasi
                    </Text>
                    <Button
                      variant={"dark"}
                      rounded={"rounded-full"}
                      ownStyle={"py-2 px-6 mb-6 text-white"}
                    >
                      Lamar Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center place-items-center mx-auto">
          <Text
            ownStyle={"text-center text-gray-400 text-lg mb-8 mt-20"}
            variant={"subtitle"}
          >
            Lihat lowongan lainnya
          </Text>
          <Text
            ownStyle={"text-center text-blue-400 hover:text-blue-500 text-lg ml-2 mb-8 mt-20"}
            variant={"subtitle"}
          >
            di sini
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Loker;
