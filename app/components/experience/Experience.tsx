import { useEffect, useRef, useState } from "react";

import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import gsap from "gsap";
import { SiExpress, SiLaravel, SiNodedotjs, SiPostgresql, SiReact } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { BsFiletypePhp } from "react-icons/bs";
import { FaJava, FaPhp } from "react-icons/fa";
import { Tooltip, Whisper } from "rsuite";

interface PilihInterface {
  judul: string;
  category: number;
  description: string[];
  image: string;
  link_project: string;
  link_website: string;
  programming: any[];
}

// Install modules
export default function Experience() {
  SwiperCore.use([Navigation, Pagination, Mousewheel]);

  const [pilih, setPilih] = useState<PilihInterface>({
    judul: "オンライン支払いの取引のREST API",
    category: 1,
    description: ["さまざまな種類のオンライン支払い、たとえばゲームや電気代や税金の取引などのために、REST APIを開発し、維持し、ユーザーとの統合を行っています。", "ユーザー、トコペディアやアルタジャサやYUPなどの会社を統合に手伝ってあげ、エンドツーエンドのプロダクションメイド作ったAPIのユーザーを確認しており、必要なユーザーのものを合わせます。", "ハッキングを防ぐために、安全なREST APIのために、暗号化（アシンメトリック・クリプトグラフィとJWTセキュリティを開発するのに、TypeScriptとNode.jsを利用して用意します。"],
    image: "/images/travel.jpeg",
    programming: [
      <SiNodedotjs key="nodejs" size={20} className="" />,
      <TbBrandTypescript key="typescript" size={20} className="" />,
      <SiPostgresql key="postgresql" size={20} className="" />,
      <BsFiletypePhp key="php" size={20} className="" />,
      <SiExpress key="express" size={20} className="" />,
    ],
    link_project: "",
    link_website: "",
  });

  const [pilihIndex, setpilihIndex]  = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const deskription = useRef<HTMLDivElement | null>(null);

  const [categoryPilih, setCategoryPilih] = useState(0);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setpilihIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % dataJapaneseVersion.length;
        setPilih(dataJapaneseVersion[nextIndex]);
        gsap.to(containerRef.current, {
          scrollTop: nextIndex * 100,
          duration: 1,
          ease: 'power2.inOut',
        });

        gsap.fromTo(
          deskription.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: 'power2.inOut' }
        );

        return nextIndex;
      });
    }, 10000); 
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, []);

  const category = [
    {
      name: "All・全部",
      type: 0
    },
    {
      name: "Bimasakti・企業",
      type: 1
    },
    {
      name: "Telkom・大学",
      type: 2
    },
    {
      name: "AirNav・企業",
      type: 3
    }
  ];

const dataJapaneseVersion = [
  {
    judul: "Online Payment Transactions",
    category: 1,
    description: [
      "さまざまな種類のオンライン支払い、たとえばゲームや電気代や税金の取引などのために、REST APIを開発し、維持し、ユーザーとの統合を行いました。",
      "ユーザー、トコペディアやアルタジャサやYUPなどの会社を統合に手伝い、エンドツーエンドのプロダクションを作成したAPIのユーザーを確認し、必要なユーザーの要件に合わせました。",
      "ハッキングを防ぐために、安全なREST APIのために、暗号化（アシンメトリック・クリプトグラフィとJWTセキュリティ）を開発するのに、TypeScriptとNode.jsを利用しました。"
    ],    
    image: "/images/anime.jpg",
    link_project: "",
    programming: [
     <Whisper placement="top" trigger="hover" key="nodejs" speaker={<Tooltip>Node.js</Tooltip>}>
      <div>
      <SiNodedotjs size={20} key="nodejs" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" key="type" trigger="hover" speaker={<Tooltip>TypeScript</Tooltip>}>
      <div>
      <TbBrandTypescript size={20} key="type" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" key="psogrew" trigger="hover" speaker={<Tooltip>PostgreSQL</Tooltip>}>
        <div>
        <SiPostgresql size={20} key="psogrew" className="hover:border hover:border-black rounded-full" />
        </div>
      </Whisper>,
      <Whisper placement="top" key="php" trigger="hover" speaker={<Tooltip>PHP</Tooltip>}>
      <div>
      <FaPhp size={24} key="php" className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
    ],
      link_website: "",
  },
  {
    judul: "Api Travel",
    category: 1,
    description: [
      "船や飛行機、電車などのオンライン支払いのB2B向けREST APIサービスを開発・提供しました。JWTベースの認証を使用するパートナーに対し、スムーズな統合を促進し、接続の安全性と信頼性を確保しました。",
      "プロダクションの実装を容易に確認し、最初の設計からUATをサポートし、統合プロセス中にパートナーへ包括的なサポートを提供しました。",
      "さらに、オンライン予約のために、シームレスなユーザー体験を確認し、UIフロントエンドを設計するのに、ReactとNode.js技術を利用しました。"
    ],    
    image: "/images/anime.jpg",
    link_project: "",
    programming: [
      <Whisper placement="top" trigger="hover" key="react" speaker={<Tooltip>React.js</Tooltip>}>
      <div>
      <SiReact size={20} key="react" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
     <Whisper placement="top" trigger="hover" key="nodejs" speaker={<Tooltip>Node.js</Tooltip>}>
     <div>
     <SiNodedotjs size={20} key="nodejs" className="hover:border hover:border-black rounded-full" />
     </div>
     </Whisper>,
      <Whisper placement="top" trigger="hover" key="typescript" speaker={<Tooltip>Typescript</Tooltip>}>
      <div>
      <TbBrandTypescript size={20} key="typescript" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key={'postgre'} speaker={<Tooltip>PostgreSQL</Tooltip>}>
      <div>
      <SiPostgresql size={20} key={'postgre'} className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
      <Whisper placement="top" trigger="hover" key={'php'} speaker={<Tooltip>PHP</Tooltip>}>
      <div>
      <FaPhp size={24} key={'php'} className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
    <Whisper placement="top" trigger="hover" key="laravel" speaker={<Tooltip>Laravel</Tooltip>}>
      <div>
      <SiLaravel size={24} key="laravel" className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
    ],
    link_website: "",
  },
  {
    judul: "Smart Card Integration",
    category: 1,
    description: [
      "具体的には、クレジットカードで飲食物の支払いに使用し、さらにどこでも支払いが簡単になるように、パートナーB2B向けのREST APIサービスを提供するために、Node.jsを利用しました。",
      "その前に、BCA銀行とBNI銀行、そして我々のパートナーと協力し、さまざまな銀行を接続するために、REST APIで統合するように、Java Spring Bootを用いて開発しました。"
    ],
    image: "/images/anime.jpg",
    link_project: "",
    programming: [
      <Whisper placement="top" trigger="hover" key="nodejs" speaker={<Tooltip>Node.js</Tooltip>}>
      <div>
      <SiNodedotjs size={20} key="nodejs" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key="typescript" speaker={<Tooltip>Typescript</Tooltip>}>
      <div>
      <TbBrandTypescript size={20} key="typescript" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key="java" speaker={<Tooltip>Java</Tooltip>}>
      <div>
      <FaJava size={20} key="java" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key={'postgre'} speaker={<Tooltip>PostgreSQL</Tooltip>}>
      <div>
      <SiPostgresql size={20} key={'postgre'} className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
    ],
        link_website: "",
  },
  {
    judul: "Api Callback",
    category: 1,
    description: [
      "一つのオンライン取引や旅行のオンライン支払いが保留中の場合、その問題を処理するために、APIコールバックを開発し、用意しました。そのコールバックは自動的にユーザーのリスナーに返信しました。",
      "さらに、APIコールバックのレスポンスフォーマットは、すべての製品で異なり、ユーザーのリクエストによって変わりました。"
    ],
    image: "/images/anime.jpg",
    link_project: "",
    programming: [
      <Whisper placement="top" trigger="hover" key="nodejs" speaker={<Tooltip>Node.js</Tooltip>}>
      <div>
      <SiNodedotjs size={20} key="nodejs" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key="typescript" speaker={<Tooltip>Typescript</Tooltip>}>
      <div>
      <TbBrandTypescript size={20} key="typescript" className="hover:border hover:border-black rounded-full" />
      </div>
      </Whisper>,
      <Whisper placement="top" trigger="hover" key={'postgre'} speaker={<Tooltip>PostgreSQL</Tooltip>}>
      <div>
      <SiPostgresql size={20} key={'postgre'} className="hover:border hover:border-black rounded-full" />
      </div>
    </Whisper>,
    ],
        link_website: "",
  },
];

return (
    <>
      <div className={`min-h-screen min-w-screen flex items-center`}>
        <div  className="absolute top-1/2 left-0 transform -translate-y-36 translate-x-1/2 border-[#545454] flex items-center justify-center border-r min-h-[200px]">
        </div>
        <div className="absolute top-0 right-0 min-w-[1080px] max-w-[1080px] min-h-[50px] border-b border-[#545454] translate-y-8">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <div className="text-xs">B.</div>
              <div className="judul text-4xl">PROJECTS</div>
            </div>
              <div className="flex space-x-6 mr-12 items-end mb-2">
                {category.map((e, i) => (
                  <div 
                    className={`z-50 text-xs postIndex_title ${categoryPilih === i ? 'active' : ''}`} 
                    key={i} 
                    onClick={() => setCategoryPilih(i)}
                  >
                    {e.name}
                    <div
                      className="postIndex_title_bar"
                      style={{
                        transform: categoryPilih === i ? "translate3d(0%, 0, 0)" : "translate3d(-100%, 0, 0)",
                      }}
                    ></div>
                  </div>
                ))}
              </div>

          </div>
        </div>
        <div className="mt-[120px] min-h-[700px] max-h-[700px] container mx-auto">
          <div className="">
             <div className="grid grid-cols-2 gap-16">
                <div className="ml-24 col max-h-[250px] min-h-[250px] mt-8">
                  <div ref={deskription} className="p-4 space-x-2">
                      <div className="flex space-x-2">
                        <div className="text-xs">{pilihIndex + 1}.</div>
                        <div className="">
                          {
                            pilih.description.map((e, i) => (
                              <div key={i} className={`text-md tracking-wider ${i != 0 && 'mt-5'}`}>
                                {e}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className="pl-2 mt-5">利用技術</div>
                      <div className="pl-2 mt-5 flex space-x-2 items-center">
                        {
                          pilih.programming.map((e, i) => (
                            <div key={i} className={`flex space-x-4 items-center`}>
                              {e}
                            </div>
                          ))
                        }
                      </div>
                  </div>
                </div>
                <div ref={containerRef}  className="col min-h-[550px] max-h-[550px] overflow-auto scroll-none">
                  {dataJapaneseVersion.map((e, i) => (
                    <div
                      key={i}
                      className={`px-4 py-6 ${i === pilihIndex ? 'border-x-2 max-w-[700px] border-[#545454]' : ''}`} // Highlight current item
                      onMouseOver={() => {
                        gsap.fromTo(
                          deskription.current,
                          { opacity: 0, x: -50 },
                          { opacity: 1, x: 0, duration: 1, ease: 'power2.inOut' }
                        );
                        stopAutoScroll();
                        setPilih(e);
                        setpilihIndex(i);
                      }}
                      onMouseOut={startAutoScroll} 
                    >
                      <div className="flex space-x-2 ">
                        <div className="text-xs" key={i}>{i + 1}.</div>
                        <div>
                          <div className="text-2xl khusus-judul" key={i}>{e.judul}</div>
                          <div className="text-xs" key={i}>{category[e.category - 1].name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}