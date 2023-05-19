import Card from "@/components/card/page.js";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Carousel image */}
      <div className="flex justify-center">
        <img className="w-full bg-cover object-cover" src="/cityview.jpg" />
      </div>

      <div className="mx-auto text-center md:w-2/3 mb-5">
        <h1 className="text-8xl font-extrabold font-sans mt-10 mb-10">
          WHY ESG?
        </h1>
        <h1 className="text-3xl text-orange-500 font-extrabold mt-5">
          정부와 고객사가 ESG이행을 요구하고 있습니다.
        </h1>
        <p className="text-xl text-center pt-5">
          ESG를 한마디로 정의한다면 <strong> "비재무적 기업보고서"</strong>라고
          할 수 있습니다.
        </p>
        <p className="text-xl text-center pt-5">
          재무제표가 정량적인 실적에 대한 보고서라면{" "}
          <strong>ESG는 정성적인 실적에 대한 보고서</strong>입니다.
        </p>
        <p className="text-xl text-center pt-5 text-blue-600 font-bold">
          이제 보증기관의 보증, 금융권 대출 등에 있어서 ESG 이행 여부는 필수적인
          요소가 될 것입니다.
        </p>
        <p className="text-xl text-center pt-5">
          <strong>
            ESG에 대해 잘 모른다 하더라도 두 손놓고 있을 수는 없는 상황이 되고
            있습니다.
          </strong>
        </p>
        <p className="text-xl text-center pt-5">
          제도의 도입기에 혜택을 누리기 위해서는
          <br />
          <strong> 우선 가능한 한 빨리 형식부터 갖추는 것이 중요합니다.</strong>
        </p>
        <p
          className="text-xl text-center pt-5 font-bold
        "
        >
          경영지도사, 컨설팅학 석박사, ISO최고전문가로 구성된 전문 컨설팅팀이{" "}
          <br /> 그 목표달성을 가장 완벽하게 지원하고 있습니다.
        </p>
        <p className="text-xl text-center pt-5">
          지금 바로 전문가와 상담을 통해 ESG이행을 시작해보세요.
        </p>
      </div>

      <section class="text-gray-600 body-font z-auto">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <Card
                title="E"
                subTitle="Environment(환경)"
                contents="탈 탄소, 신재생에너지, 온실가스, 녹색채권, 탄소국경세"
                subContents="폐기물관리법, 화평법, 화관법, 배출권거래법"
              />
            </div>

            <div class="p-4 lg:w-1/3">
              <Card
                title="S"
                subTitle="Social(사회적 책임)"
                contents="인권, 산업안전, 건강, 여성인력, 동반성장"
                subContents="중대재해처벌법, 근로기준법, 개인정보보호법, 공정거래법"
              />
            </div>
            <div class="p-4 lg:w-1/3">
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

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              WHY ESG?
            </h2>
            <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
              ESG가 중요한 이유가 무엇인가요?
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
              ESG는 기업이 사회 및 환경과 상호 작용하는 방식을 측정하는데
              사용되는 환경, 사회적책임 및 거버넌스의 포괄적인 용어에 속하는
              다양한 이슈를 나타냅니다. 잠재적으로 위험과 기회가 모두 존재하고
              비즈니스의 장기적인 성공의 핵심요소로 점차 인식되면서 많은
              투자자들이 재무분석 프로세스의 일부로 이러한 요소를 면밀히
              조사하고 우선 순위에 두고 있습니다.
            </p>
            <p className="h-10"></p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-xl font-bold">
              그러나, 더욱 현실적인 이유에 집중해야 합니다.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-bold  mb-2">
                보증 및 금융권의 요구
              </h2>
              <p class="leading-relaxed text-lg mb-4">
                기술보증기금, 신용보증기금, 신용보증재단 등 보증기관의 보증 및
                금융권 신용평가에서 ESG이행이 필수적입니다.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-bold   mb-2">
                벤처투자자의 요구
              </h2>
              <p class="leading-relaxed text-lg mb-4">
                벤처투자, 사모펀드, 펀드 등 투자자의 투자를 받기 위해서는
                ESG이행이 필수적입니다.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-bold   title-font mb-2">
                정부지원사업 평가
              </h2>
              <p class="leading-relaxed text-lg mb-4">
                기정원, 지자체 기술지원사업 중소벤처기업부, 산업통상자원부 등
                정부지원사업에 선정되기 위해서는 ESG이행이 필수적입니다.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900  font-bold   mb-2">
                해외고객의 요구
              </h2>
              <p class="leading-relaxed text-lg mb-4">
                해외시장 진출을 위해서 앞으로 ESG이행이 필수적입니다. 해외고객의
                요구사항이 점점 높아지고 있습니다.
              </p>
              <Link href="/" class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <Link href="/application">
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              컨설팅 상담신청
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
