import React from "react";
import { Text, Image, Button } from "components";

import ats from "../../../assets/logo-ats-trans.png";
import rms from "../../../assets/logo-rms-trans.png";

const Faq = () => {
  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Text
          ownStyle={"text-center text-gray-600 text-3xl mb-2"}
          variant={"title"}
          bold={true}
        >
          Apa yang di butuhkan perusahaan untuk mendapatkan talent berbakat?
        </Text>
        <Text
          ownStyle={"text-center text-gray-400 text-4xl mb-20"}
          variant={"subtitle"}
        >
          Kami memberi solusi
        </Text>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center items-center w-full">
          <div className="sm:w-1/2 mb-10 px-32 items-center justify-center w-full">
            <div className="rounded-lg h-28 w-full overflow-hidden items-center justify-center ">
              <Image
                alias={"content"}
                ownStyle={
                  "object-cover object-center h-auto w-auto ml-32 item-center"
                }
                linkPath={ats}
              />
            </div>
            <Text
              variant={"ttle"}
              bold={true}
              ownStyle={
                "title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
              }
            >
              Applicant Tracking System as Large Enterprise Solutions
            </Text>
            <Text variant={"subtitle"} ownStyle={"leading-relaxed text-base text-gray-400"}>
              Optimize recruiter's productivity while doing heavy recruitment by
              using sytematic, faster, and accountable recruitment proses from
              ATS
            </Text>
            <Button
              variant={"solusi1"}
              rounded={"rounded-full"}
              ownStyle="flex mx-auto mt-6 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
            >
              Read more
            </Button>
          </div>
          <div className="sm:w-1/2 mb-10 px-32 items-center justify-center w-full">
            <div className="rounded-lg h-28 w-full overflow-hidden items-center justify-center ">
              <Image
                alias={"content"}
                ownStyle={
                  "object-cover object-center h-auto w-auto ml-28 item-center"
                }
                linkPath={rms}
              />
            </div>
            <Text
              variant={"ttle"}
              bold={true}
              ownStyle={
                "title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
              }
            >
              Recruitment Manageement System as Small Medium Enterprise Solution
            </Text>
            <Text variant={"subtitle"} ownStyle={"leading-relaxed text-base text-gray-400"}>
              Over 4000 companies trust RMS for unlimited job listing, accessing
              talent pool , and processing candidates
            </Text>
            <Button
              variant={"solusi2"}
              rounded={"rounded-full"}
              ownStyle="flex mx-auto mt-6 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
