"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaCalendar,
  FaVenusMars,
  FaGlobe,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaWeight,
  FaRulerVertical,
  FaBook,
  FaUniversity,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import gsap from "gsap";
import { CiBookmarkPlus, CiCalendar, CiGlobe, CiLaptop, CiUser } from "react-icons/ci";
import { BsGenderFemale } from "react-icons/bs";
import { PiAddressBookLight, PiLaptop } from "react-icons/pi";
import { LiaRulerVerticalSolid, LiaUniversitySolid, LiaWeightHangingSolid } from "react-icons/lia";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const detailsRef = useRef(null);
  const containerRef = useRef(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore) {
      gsap.to(detailsRef.current, {
        height: "auto",
        duration: 0.5,
        opacity: 1,
        y: 0,
        scrollBehavior: "true",
      });
      gsap.to(containerRef.current, { y: 0, duration: 0.5 });
    } else {
      gsap.to(detailsRef.current, { height: 0, duration: 0.5, opacity: 0 });
    }
  }, [showMore]);

  return (
    <>
      <div ref={containerRef} className={`min-h-screen flex mt-8`}>
        <div className="max-w-[600px] max-h-[650px] overflow-y-scroll scroll-none">
          <div className="">
            <div className="">
              <h1 className="text-2xl font-extrabold -ml-2">僕について</h1>
              <div className="mt-2 border-b border-black max-w-[100px]"></div>
					<div className="mt-1 border-b border-black max-w-[50px]"></div>
					<div className="mt-1 border-b border-black max-w-[25px]"></div>
            </div>
            <div className="mt-8">
              <p>
                Aboutのはじめまして。トニーと申します。今、仕事のためにスラバヤに住んでいます。ソフトウェアエンジニアに強い情熱を持っており、仕事やフリーランスのプロジェクトでそれを活かしています。私についてもっと知りたい場合は、以下をご覧ください。
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl mb-2">詳細</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li className="flex items-center space-x-3">
                  <CiUser className="" />{" "}
                  <span>お名前: ファトーニワセソ J</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CiCalendar className="" /> <span>年齢: 24年</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BsGenderFemale className="" /> <span>性別: 男性</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CiGlobe className="" /> <span>国: インドネシア</span>
                </li>
                    <li className="flex items-center space-x-3">
                      <PiAddressBookLight className="" />{" "}
                      <span>住所: 東ジャワ州, スラバヤ</span>
                    </li>
                <div
                  ref={detailsRef}
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  <>
                    <li className="flex items-center space-x-3">
                      <CiLaptop className="" />{" "}
                      <span>職業: フルスタックデベロッパー</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <LiaWeightHangingSolid className="" /> <span>体重: 58kg</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <LiaRulerVerticalSolid className="" /> <span>身長: 169cm</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CiBookmarkPlus className="" /> <span>趣味: 読書, 旅行</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <LiaUniversitySolid className="" />{" "}
                      <span>大学: テルコム大学</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <PiLaptop className="" />{" "}
                      <span>専攻: コンピュータサイエンス</span>
                    </li>
                  </>
                </div>
              </ul>
              <div
                onClick={toggleShowMore}
                className="mt-3 flex items-center space-x-1"
              >
                {showMore ? (
                  <>
                    <TfiAngleUp /> <span>表示を減らす</span>
                  </>
                ) : (
                  <>
                    <TfiAngleDown /> <span>もっと見る</span>
                  </>
                )}
              </div>
              <div className="mt-6">
                <div>
                  さらに、私は他の人に比べて諦めないという強みを持っており、協力しやすく、社交的で、強い忍耐力があり、新しいこと、特に技術分野のことを学ぶのが好きです
                </div>
                <div className="mt-2">
                  しかし、私には欠点もあります。時々忘れっぽく、仕事に集中する際には、静かな場所でなければ集中できません。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
