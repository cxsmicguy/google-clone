export default function loading() {
  return (
    <div className="sm:px-[5%] md:px-[14%] lg:px-52 h-screen max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42 mt-4">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4">
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
