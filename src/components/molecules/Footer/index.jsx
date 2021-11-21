import React from "react";
import { Text} from "../../atoms";

const Footer = () => {
  return (
    <footer class="bg-gray-700 text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <Text
          ownStyle={"text-center text-gray-200 text-3xl mb-2 "}
          variant={"title"}
          bold={true}
        >
          Customer Service
        </Text>

        <div className="flex-1 flex row w-full justify-center items-center">
          <div className="flex flex-col w-full px-10 py-16">
            <Text
              ownStyle={"text-right text-gray-200"}
              variant={"subtitle"}
              bold={true}
            >
              Untuk Pencari Kerja
            </Text>
            <Text ownStyle={"text-right text-gray-100 text-base"}>
              email : cs@karirpad.com Whatsapp : +62 591 2377927
            </Text>
          </div>
          <div className="flex flex-col w-full px-10 py-16">
            <Text
              ownStyle={"text-left text-gray-200"}
              variant={"subtitle"}
              bold={true}
            >
              Untuk Perusahaan
            </Text>
            <Text ownStyle={"text-left text-gray-100 text-base"}>
              email : cs@karirpad.com Whatsapp : +62 591 2377927
            </Text>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="lg:w-full md:w-1/2 w-full px-4 ml-48">
            <Text
              ownStyle={"text-gray-200 mb-6"}
              variant={"subtitle"}
              bold={true}
            >
              Pencari Kerja
            </Text>
            <nav class="list-none mb-10">
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>
                  Testimoni Pencari kerja
                </Text>
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>Karir</Text>
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>Media Parner</Text>{" "}
              </li>
            </nav>
          </div>
          <div class="lg:w-full md:w-1/2 w-full px-4 ml-48">
            <Text
              ownStyle={"text-gray-200 mb-6"}
              variant={"subtitle"}
              bold={true}
            >
              Perusahaan
            </Text>
            <nav class="list-none mb-10">
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>
                  Aplicant Tracking System
                </Text>{" "}
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>
                  Recruitment Managament System
                </Text>{" "}
              </li>
            </nav>
          </div>
          <div class="lg:w-full md:w-1/2 w-full px-4 ml-48">
            <Text
              ownStyle={"text-gray-200 mb-6"}
              variant={"subtitle"}
              bold={true}
            >
              Lainnya
            </Text>
            <nav class="list-none mb-10">
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>Tentang Karirpad</Text>{" "}
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>Kontak Kami</Text>{" "}
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>
                  Syarat dan Ketentuan
                </Text>{" "}
              </li>
              <li>
                <Text ownStyle={"text-gray-100 text-sm"}>
                  Kebijakan Privasi
                </Text>{" "}
              </li>
            </nav>
          </div>
        </div>
      </div>
    
      <div class="bg-gray-600 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <p class="mb-8  mt-10 text-sm text-white">
          Copyright © 2021 PT. Karir Pad Internasional - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
