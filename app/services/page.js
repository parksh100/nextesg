import Step from "./step";

export default function Services() {
  return (
    <div className=" mx-auto mt-20 text-center md:w-2/3">
      <div className="text-center mb-15">
        <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
          ESG Master Consulting Process
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          중소기업에 가장 적합한 ESG 컨설팅을 제공하기 위해 ESG Mater는 다음과
          같은 컨설팅 프로세스를 진행합니다. 100개가 넘는 기업이 ESG Mater의
          컨설팅을 통해 ESG 경영을 시작했습니다. 검증된 ESG컨설팅 프로세스와
          최고의 컨설턴트와 함께 ESG를 시작하세요.
        </p>
      </div>

      <Step />
    </div>
  );
}
