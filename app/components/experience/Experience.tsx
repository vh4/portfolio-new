import { useEffect, useRef, useState } from "react";

import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import gsap from "gsap";

// Install modules
export default function Experience() {
  SwiperCore.use([Navigation, Pagination, Mousewheel]);

  const [pilih, setPilih]  = useState({
        judul:"REST APIs for PPOB Transactions",
        category:1,
        description:["Develop and maintain REST APIs for various PPOB transactions, including game vouchers, electricity payments, and multifinance taxes. Manage integrations with key partners like Tokopedia and Artajasa, YUP ensuring efficient integration. Utilize PHP and TypeScript with Node.js for security and build challenges, implementing JWT and asymmetric cryptography."],
        image:"/images/travel.jpeg",
        link_project:"",
        link_website:"",
  });

  const [pilihIndex, setpilihIndex]  = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const deskription = useRef<HTMLDivElement | null>(null);

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
    }, 3000); 
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
      name: "PT. Bimasakti Sinergi",
      type: 1
    },
    {
      name: "テレコム大学",
      type: 2
    },
    {
      name: "エアナブ・インドネシア",
      type: 3
    }
  ];
  

const dataJapaneseVersion = [
  {
    judul: "PPOBトランザクション用REST API",
    category: 1,
    description: ["ゲームバウチャー、電気料金、多機能税金を含むさまざまなPPOBトランザクションのためのREST APIを開発および保守します。TokopediaやArtajasaとの統合を効率的に行うための管理も行います。PHPとNode.jsを使用したTypeScriptでセキュリティと構築の課題に対応し、JWTおよび非対称暗号化を実装します。"],
    image: "/images/anime.jpg",
    link_project: "",
    link_website: "",
  },
  {
    judul: "B2Bクライアント向けの旅行APIサービス",
    category: 1,
    description: ["列車、飛行機、船のチケット予約のための旅行APIサービスを設計および実装します。JWTベースの認証を使用してパートナーとのシームレスな統合を確保し、セットアップからUATまでのサポートを提供し、本番準備を行います。React.jsを使用してフロントエンドUIを設計し、直接支払いを円滑にします。"],
    image: "",
    link_project: "",
    link_website: "",
  },
  {
    judul: "BCAおよびBNI Flazz統合",
    category: 1,
    description: ["BCAおよびBNI Flazzの統合をサポートするためにSDKを提供し、Node.jsを使用してモバイルやWebプラットフォームを通じたタップカード支払いのためのAPI統合を作成します。"],
    image: "",
    link_project: "",
    link_website: "",
  },
  {
    judul: "Otomax用のデスクトップアドオン",
    category: 1,
    description: ["Node.jsとElectron Builderを使用して、Otomax MySQLデータベースにデータを挿入するためのデスクトップアドオンを開発します。OtomaxはPPOB支払いのためのデスクトップGUIであり、これらのアドオンを使用してPPOB APIを実行し、パートナーがGUI内で直接コマンドを表示および使用できるようにします。"],
    image: "",
    link_project: "",
    link_website: "",
  },
  {
    judul: "Jabber統合用PPOBプラグイン",
    category: 1,
    description: ["Node.jsを使用してJabber経由で支払いトランザクションを行うためのPPOBプラグインを開発します。パートナーは事前に提供された登録アカウントフォームを使用してJabberを介してトランザクションを完了します。"],
    image: "",
    link_project: "",
    link_website: "",
  },
  {
    judul: "コールバックAPI",
    category: 1,
    description: ["TypeScriptを使用して、保留中のトランザクションを数分以内にコールバックで送信するコールバックAPIを開発します。"],
    image: "",
    link_project: "",
    link_website: "",
  },
  {
    judul: "トランザクション管理用ウェブレポート",
    category: 1,
    description: ["パートナーがトランザクションリストを表示し、クライアントに送信できなかったコールバックの再試行メカニズムを提供するウェブレポートを開発します。"],
    image: "",
    link_project: "",
    link_website: "",
  }
];

return (
    <>
      <div className={`min-h-screen min-w-screen flex items-center`}>
        <div  className="absolute top-1/2 left-0 transform -translate-y-36 translate-x-1/2 border-black flex items-center justify-center border-r min-h-[200px]">
        </div>
        <div className="absolute top-0 right-0 min-w-[1080px] max-w-[1080px] min-h-[50px] border-b border-black translate-y-8">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <div className="text-xs">B.</div>
              <div className="judul text-4xl">PROJECTS</div>
            </div>
            <div className="flex space-x-2 mr-12 items-end mb-2">
              <div className="judul text-xs">All</div>
              {category.map((e, i) => (
                <>
                  <div className="judul text-xs" key={i}>{e.name}</div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[120px] min-h-[700px] max-h-[700px] container mx-auto">
          <div className="">
             <div className="grid grid-cols-2 gap-12">
                <div className="ml-24 col max-h-[250px] min-h-[250px] mt-12">
                  <div ref={deskription} className="flex p-4 space-x-2">
                    <div className="text-xs">{pilihIndex + 1}.</div>
                    <div className="">
                    <div className="text-md tracking-wider">{pilih.description}</div>
                    </div>
                  </div>
                </div>
                <div ref={containerRef}  className="col min-h-[550px] max-h-[550px] overflow-auto scroll-none">
                  {dataJapaneseVersion.map((e, i) => (
                    <div
                      key={i}
                      className={`px-4 py-6 ${i === pilihIndex ? 'border-b max-w-[700px] border-black' : ''}`} // Highlight current item
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
                        <div className="judul text-xs" key={i}>{i + 1}.</div>
                        <div>
                          <div className="judul text-xl" key={i}>{e.judul}</div>
                          <div className="judul text-xs" key={i}>{category[e.category - 1].name}</div>
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
