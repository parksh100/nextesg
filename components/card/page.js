export default function Card({ title, subTitle, contents, subContents }) {
  return (
    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 className="tracking-widest text-6xl title-font font-extrabold text-blue-600 mb-1">
        {title}
      </h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {subTitle}
      </h1>
      <ul className="leading-relaxed mb-3 text-lg">
        {contents.split(",").map((content) => (
          <li>{content}</li>
        ))}
      </ul>
      <hr />
      <ul className="leading-relaxed mb-3 mt-3 text-lg">
        {subContents.split(",").map((content) => (
          <li>○ {content}</li>
        ))}
      </ul>

      <a className="text-indigo-500 inline-flex items-center">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}
