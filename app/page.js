import Card from "@/components/card/page.js";
import Testimony from "@/components/testimony";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Carousel image */}
      <div className="flex justify-center relative">
        <img
          className="w-full bg-cover object-cover h-90"
          src="/cityview.jpg"
        />
      </div>

      <div className="mx-auto text-center md:w-2/3 mb-5">
        <h1 className="text-8xl font-extrabold font-sans mt-10 mb-10 absolute top-36 right-5 text-gray-800 ">
          WHY ESG?
        </h1>
        <Testimony />
      </div>

      <section className="text-gray-600 body-font z-auto">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <Card
                title="E"
                subTitle="Environment(환경)"
                contents="탈 탄소, 신재생에너지, 온실가스, 녹색채권, 탄소국경세"
                subContents="폐기물관리법, 화평법, 화관법, 배출권거래법"
              />
            </div>

            <div className="p-4 lg:w-1/3">
              <Card
                title="S"
                subTitle="Social(사회적 책임)"
                contents="인권, 산업안전, 건강, 여성인력, 동반성장"
                subContents="중대재해처벌법, 근로기준법, 개인정보보호법, 공정거래법"
              />
            </div>
            <div className="p-4 lg:w-1/3">
              <Card
                title="G"
                subTitle="Governance(지배구조)"
                contents="기업윤리, 이사회독립성, 임원 도덕성, 주주권리, ESG전담조직"
                subContents="부정청탁법, 외부감사법, 집단소송법"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 ">
              WHY ESG?
            </h2>
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
              ESG가 중요한 이유가 무엇인가요?
            </h1>
            <p className="lg:w-full mx-auto leading-relaxed text-lg">
              ESG는 회사 투자의 지속 가능성 및 윤리적 영향을 평가하는 세가지
              핵심 요소를 나타냅니다. ESG의 중요성이 커진 이유는
              <strong> 위험 관리 측면에서</strong> ESG 요소는 회사의 잠재적인
              장기적 위험과 기회에 대한 통찰력을 제공합니다. 이러한 고려 사항을
              간과하는 회사는 지속 가능하지 않거나 비윤리적인 관행으로 인해
              재정적 및 평판 손상을 입을 수 있습니다. ESG의 중요성은
              <strong> 재무 성과와의 연관성</strong>에도 있습니다. 강력한 ESG
              성과를 내는 기업이 종종 우수한 재무적 수익을 창출한다는 증거가
              점점 더 많아지고 있습니다. 이는 책임감 있는 비즈니스 관행이
              효과적인 관리 및 유망한 미래 잠재력의 특징이 될 수 있음을
              보여줍니다. 또한 ESG의 중요성은{" "}
              <strong>소비자 및 투자자 수요의 변화</strong>에 ​​의해 강조됩니다.
              비즈니스 활동의 사회적 영향에 대한 인식이 높아지면서 많은 소비자와
              투자자는 강력한 ESG 약속을 입증하고 경쟁 우위를 제공하는 회사를
              선호하게 되었습니다. 동시에
              <strong> 전 세계적으로 증가하는 규제 압력</strong>으로 인해 환경,
              사회 및 거버넌스 표준이 더욱 엄격해지고 있어 ESG 규범을 준수하는
              것이 법적 및 재정적 필요성이 되고 있습니다. ESG는 또한{" "}
              <strong>기업의 사회적 책임</strong>을 말합니다. 기업이 사회에
              긍정적으로 기여해야 하는 시대에 ESG 문제를 해결하는 것은 그 역할을
              수행하는 수단이 되어 신뢰를 높이고 이해관계자와의 관계를
              강화합니다. 마지막으로 ESG 원칙은{" "}
              <strong>장기적인 지속 가능성</strong>에 매우 중요합니다. 책임 있는
              자원 관리, 윤리적 거버넌스 및 유익한 사회적 참여를 이행함으로써
              수익성, 사회적 책임 및 환경을 동등하게 중요시하는 기업의
              지속가능한 성공을 보장합니다.
            </p>
            <p className="h-10"></p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-bold mt-10">
              그러나, 더욱 현실적인 이유에 집중해야 합니다.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-bold  mb-2">
                보증 및 금융권의 요구
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                기술보증기금, 신용보증기금, 신용보증재단 등 보증기관의 보증 및
                금융권 신용평가에서 ESG이행이 필수적입니다.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-bold   mb-2">
                벤처투자자의 요구
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                벤처투자, 사모펀드, 펀드 등 투자자의 투자를 받기 위해서는
                ESG이행이 필수적입니다.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl  font-bold   title-font mb-2">
                정부지원사업 평가
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                기정원, 지자체 기술지원사업 중소벤처기업부, 산업통상자원부 등
                정부지원사업에 선정되기 위해서는 ESG이행이 필수적입니다.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900  font-bold   mb-2">
                해외고객의 요구
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                해외시장 진출을 위해서 앞으로 ESG이행이 필수적입니다. 해외고객의
                요구사항이 점점 높아지고 있습니다.
              </p>
              <Link
                href="/"
                className="text-indigo-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <Link href="/application">
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              컨설팅 상담신청
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
