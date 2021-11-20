import React from "react";
import { Text, Image } from "../../atoms";

const Kriteria = () => {
  return (
    <section className="bg-gray-100 text-gray-600 body-font">
      <div className="px-20 py-24 mx-auto">
        <Text
          ownStyle={"text-center text-gray-600 text-3xl mb-2"}
          variant={"title"}
          bold={true}
        >
          Kriteria Lowongan Pilihan Untuk Kamu
        </Text>
        <Text
          ownStyle={"text-center text-gray-400 text-lg mb-20"}
          variant={"subtitle"}
        >
          Di bawah ini beberapa kriteria yang mungkin cocok untuk Kmau. Silahkan
          pilih kriterianya ya!
        </Text>
        <div className="flex flex-wrap -m-4">
          {/* Card Fix */}
          <div class="lg:w-1/4 md:w-1/2 p-8 w-48 items-center justify-center">
            <div class="block relative h-48 rounded overflow-hidden">
              <Image
                alias={"ecommerce"}
                ownStyle={"object-cover object-center w-full h-full block"}
                linkPath={"https://dbijapkm3o6fj.cloudfront.net/resources/16648,1004,1,6,4,0,600,450/-4601-/20190405211241/paket-graduation.jpeg"}
              />
            </div>
            <div className="w-full justify-center items-center flex flex-col">
              <Text variant={"title"} bold={true} ownStyle={"text-2xl mt-4"}>
                Fresh Graduate
              </Text>
              <Text
                variant={"subtitle"}
                ownStyle={"text-gray-400 text-lg text-center mt-2"}
              >
                Baru lulus? Cocok banget nih lowongan buat kamu yang mau mulai
                berkarir.
              </Text>
              <Text variant={"subtitle"} ownStyle={"text-blue-400 mt-4"}>
                Lihat Lowongan
              </Text>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-8 w-48 items-center justify-center">
            <div class="block relative h-48 rounded overflow-hidden">
              <Image
                alias={"ecommerce"}
                ownStyle={"object-cover object-center w-full h-full block"}
                linkPath={"https://www.internationalschoolofmilan.it/sites/school11/files/styles/ins_text_and_image/public/2021-04/Our-School-High-School-Students-Walking.png.jpeg?itok=Vy5czovE"}
              />
            </div>
            <div className="w-full justify-center items-center flex flex-col">
              <Text variant={"title"} bold={true} ownStyle={"text-2xl mt-4"}>
               Lulusan SMA
              </Text>
              <Text
                variant={"subtitle"}
                ownStyle={"text-gray-400 text-lg text-center mt-2"}
              >
               Jangan pesimis buat yang lulusan SMA, banyak kok lowongan buat kamu.
              </Text>
              <Text variant={"subtitle"} ownStyle={"text-blue-400 mt-4"}>
                Lihat Lowongan
              </Text>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-8 w-48 items-center justify-center">
            <div class="block relative h-48 rounded overflow-hidden">
              <Image
                alias={"ecommerce"}
                ownStyle={"object-cover object-center w-full h-full block"}
                linkPath={"https://cdn-2.tstatic.net/bali/foto/bank/images/ilustrasi-pekerja-lepas-alias-freelance-1.jpg"}
              />
            </div>
            <div className="w-full justify-center items-center flex flex-col">
              <Text variant={"title"} bold={true} ownStyle={"text-2xl mt-4"}>
                Berpengalaman
              </Text>
              <Text
                variant={"subtitle"}
                ownStyle={"text-gray-400 text-lg text-center mt-2"}
              >
               Buat kamu yang sudah memiliki pengalaman di bidangnya, silahkan lihat disini ya!
              </Text>
              <Text variant={"subtitle"} ownStyle={"text-blue-400 mt-4"}>
                Lihat Lowongan
              </Text>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-8 w-48 items-center justify-center">
            <div class="block relative h-48 rounded overflow-hidden">
              <Image
                alias={"ecommerce"}
                ownStyle={"object-cover object-center w-full h-full block"}
                linkPath={"https://kangmasian.com/wp-content/uploads/2020/09/apa-itu-freelance.jpg"}
              />
            </div>
            <div className="w-full justify-center items-center flex flex-col">
              <Text variant={"title"} bold={true} ownStyle={"text-2xl mt-4"}>
                Lowongan Sarjana
              </Text>
              <Text
                variant={"subtitle"}
                ownStyle={"text-gray-400 text-lg text-center mt-2"}
              >
               Banyak lowongan untuk kamu yang baru lulus sebagai sarjana muda
              </Text>
              <Text variant={"subtitle"} ownStyle={"text-blue-400 mt-4"}>
                Lihat Lowongan
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kriteria;
