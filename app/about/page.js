import AboutHero from "./hero";
import Statistic from "./statistic";

export default function About() {
  return (
    <>
      <Statistic />
      <AboutHero />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              우리팀은 ESG의 역사적 근원에 대해 잘 이해하고 있습니다. <br />{" "}
              특히, ESG가 왜 필요한지 어떠한 이유로 도입에 동참해야 하는지 잘
              이해하고 있습니다.
              <br /> 무엇보다 ESG가 대한민국의 중소기업에 어떻게 적용되어야
              하는지에 대해 많은 연구와 시행착오를 겪었습니다.
              <br />
              성공적인 ESG도입 사례를 연구하고 경영지도사와 컨설팅학 석﹒박사의
              조언을 통해 <br />
              ESG Master만의 컨설팅 프로세스 구축에 성공하였습니다.
              <br />
              검증된 컨설팅 프로세스와 최고의 ESG컨설턴트와 함께 ESG도입에
              동참하십시오.
            </p>
            <br />
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              컨설팅은 컨설팅 전문가가 수행해야 합니다. <br />{" "}
              <strong> 특히, ESG컨설팅은</strong>
              ESG의 사전적 의미를 잘 알고 있는 학계 전문가보다는{" "}
              <strong>
                {" "}
                현업수행 경험과 컨설팅의 이론적 배경을 바탕으로 한 컨설팅
                전문가가 수행해야 합니다.
              </strong>
              <br />
              또한 ESG의 대부분은 ISO인증과 연계되어 있기 때문에{" "}
              <strong> ISO 인증 전문가의 참여는 필수적입니다.</strong>
            </p> */}
          </div>
          <hr />
          <div className="flex flex-col text-center w-full mb-20">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg mt-10">
              국가가 인정한 컨설팅 전문가 <strong>경영지도사</strong> <br />{" "}
              경험과 학위로 증명된 컨설팅 전문가{" "}
              <strong>컨설팅학 석﹒박사</strong> <br /> ISO국제표준 전문가{" "}
              <strong>ISO선임심사위원</strong>
              <br />
              팀이 수행하는 ESG컨설팅은 더욱 신뢰할 수 있습니다.,
            </p>
          </div>

          <div className="flex flex-wrap -m-2 mt-10">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-top flex-shrink-0 rounded-full mr-4"
                  src="/psh.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">박성훈</h2>
                  <p className="text-gray-500">
                    대표컨설턴트/ 경영지도사/ ISO검증심사원{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">오신영</h2>
                  <p className="text-gray-500">
                    총괄 컨설턴트/ 경영지도사/ 행정사
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-top flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">김원일</h2>
                  <p className="text-gray-500">
                    수석 컨설턴트/ 컨설팅학 석사/ 해외마케팅 전문가
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-top flex-shrink-0 rounded-full mr-4"
                  src="/ljy.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">이주용</h2>
                  <p className="text-gray-500">
                    컨설팅학 석사/ 컨설팅학 겸임교수/ ISO선임심사원
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/mjs.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">명준식</h2>
                  <p className="text-gray-500">
                    컨설팅학 석사/ 경영지도사/ 전경련ESG전문가
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">OOO</h2>
                  <p className="text-gray-500">
                    컨설팅학 석사/ 중소기업중앙회 이사장역임
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">ㅇㅇㅇ</h2>
                  <p className="text-gray-500">
                    수석 컨설턴트/ 신용보증기금 출신
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">강근영</h2>
                  <p className="text-gray-500">수석 컨설턴트/ 행정사</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/psb.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">박수빈</h2>
                  <p className="text-gray-500">
                    책임 컨설턴트/ 국가안전대진단전문위원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
