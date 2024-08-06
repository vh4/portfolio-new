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
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import gsap from "gsap";

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
      // gsap.to(containerRef.current, { y: "-4rem", duration: 0.5 });
    }
  }, [showMore]);

  return (
    <>
      <div ref={containerRef} className={`min-h-screen flex mt-16`}>
        <div className="container max-w-[600px] max-h-[600px] overflow-y-scroll scroll-none">
          <div className="">
            <div className="">
              <h1 className="judul text-4xl font-extrabold -ml-2">About</h1>
            </div>
            <div className="mt-4">
              <p>
                Aboutのはじめまして。トニーと申します。今、仕事のためにスラバヤに住んでいます。ソフトウェアエンジニアに強い情熱を持っており、仕事やフリーランスのプロジェクトでそれを活かしています。私についてもっと知りたい場合は、以下をご覧ください。
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">詳細</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li className="flex items-center space-x-3">
                  <FaUser className="" />{" "}
                  <span>お名前: ファトーニワセソ J</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCalendar className="" /> <span>年齢: 24年</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaVenusMars className="" /> <span>性別: 男性</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaGlobe className="" /> <span>国: インドネシア</span>
                </li>
                <div
                  ref={detailsRef}
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  <>
                    <li className="flex items-center space-x-3">
                      <FaMapMarkerAlt className="" />{" "}
                      <span>住所: 東ジャワ州, スラバヤ</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaLaptopCode className="" />{" "}
                      <span>職業: フルスタックデベロッパー</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaWeight className="" /> <span>体重: 58kg</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaRulerVertical className="" /> <span>身長: 169cm</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaBook className="" /> <span>趣味: 読書, 旅行</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaUniversity className="" />{" "}
                      <span>大学: テルコム大学</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaLaptopCode className="" />{" "}
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
                    <FaAngleUp /> <span>表示を減らす</span>
                  </>
                ) : (
                  <>
                    <FaAngleDown /> <span>もっと見る</span>
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
