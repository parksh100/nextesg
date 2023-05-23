import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="text-gray-600 body-font">
      {/* <p classNameName="title-font sm:text-4xl text-3xl font-medium text-gray-900 text-center mt-20">
        What we stand for
      </p> */}
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img alt="hero" src="/consultation.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            앞으로 나아가는 것만이 우리가 아는 유일한 방향입니다.
            {/* <br className="hidden lg:inline-block" />
            매일 우리는 고객의 가치를 향상시키고 보호하기 위한 사명을
            실천합니다. */}
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            매일 우리는 고객의 가치를 향상시키고 보호하기 위한 사명을
            실천합니다. 고객의 요구사항에 집중하고 혁신을 가능하게 하는 서비스를
            제공하고 가장 중요한 것에 집중할 수 있도록 도와줌으로써 가치를
            향상시킵니다. 가치를 보호한다는 것은 규제 요구 사항을 탐색하고,
            위험을 식별 및 완화하고, 작업방식을 개선하도록 돕는 것을 의미합니다.
          </p>

          <p className="mb-8 leading-relaxed text-lg">
            우리는 귀하의 비즈니스를 우리의 비즈니스로 생각합니다. 우리는 귀하가
            어떠한 상황이더라도 함께 할 수 있습니다.
          </p>
          <div className="flex justify-center">
            <Link href="/application">
              {" "}
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                상담신청
              </button>
            </Link>
            <Link href="/contact">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                문의사항
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
