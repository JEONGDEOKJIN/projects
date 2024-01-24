/* 샘플 코드 : C:\Users\user11\Desktop\kga\projects\Real_estate_STO_project\adminfrontend\src\app\(pages)\test\Carousel.sucess.test.tsx */

import Image from "next/image";
import React from "react";
import { useState } from "react";
import axios from "axios";

import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import getCurrentEstateSituation from "@/app/api/getCurrentEstateSituation";
import RenderCarousel from "./RenderCarousel";

const EstateCarousel = async () => {
  const currentSituationData = await getCurrentEstateSituation();

  return (
    <>
      {/* 기존 너비 | width 480, height 256 */}
      <div className="flex flex-col items-center justify-center rounded-xl bg-stone-50 w-30rem ">
        {/* 변경 너비 */}
        {/* <div className="flex flex-col items-center justify-center rounded-xl bg-stone-200 w-30rem h-32rem"> */}

        {/* 사진 넣기 */}
        {currentSituationData && <RenderCarousel currentSituationData={currentSituationData} /> }

      </div>
    </>
  );
};

export default EstateCarousel;
