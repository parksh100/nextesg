import Card from "@/components/card/page.js";

export default function Home() {
  return (
    <>
      {/* Carousel image */}
      <div className="flex justify-center">
        <img className="w-full bg-cover object-cover" src="/cityview.jpg" />
      </div>

      <div className="bg-slate-100 mx-auto mt-5 text-center md:w-2/3 mb-96">
        <h1 className="text-8xl font-extrabold font-sans">ESG!</h1>
        <h1 className="text-5xl text-orange-500 font-extrabold mt-5">
          보다 현실적인 접근이 필요합니다!
        </h1>
        <p className="text-lg text-center pt-5">
          ESG의 사전적 의미는 금방 알 수 있습니다.
        </p>

        <p className="text-lg">
          그러나 이제 막 적용되기 시작하는 제도를 제대로 이행하는 중소기업이
          얼마나 될까요?
        </p>
        <p className="text-lg">
          그렇다고 마냥 손놓고 있을 수는 없는 노릇입니다.
        </p>
        <p className="text-lg">
          앞으로 정부지원사업, 보증기관의 보증, 금융권 대출 등에 있어서 ESG 이행
          여부는 필수적인 요소가 될 것이기 때문입니다.
        </p>
        <p className="text-lg">
          글로벌 기업들은 이미 ESG를 이행하고 있습니다. 또한 국내 대기업들도
          ESG를 이행하고 있습니다.
        </p>
        <p className="text-lg font-extrabold">
          이제 중소기업들도 ESG를 받아들여야 할 때가 왔습니다.
        </p>
        <div>우리 사이트를 둘러보시면서 ESG에 대한 이해를 높여보세요.</div>
        <p className="text-lg font-extrabold">
          그리고 가장 효율적인 방법을 찾아보십시오.
        </p>
        <p className="text-lg font-extrabold">
          ESG전문가가 도움이 될 것입니다.
        </p>
        <div className="mb-10">
          <Card />
        </div>
      </div>
    </>
  );
}
