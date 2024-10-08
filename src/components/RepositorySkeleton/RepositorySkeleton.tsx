export const RepositorySkeleton = () => {
  return (
    <article className="max-w-full p-4 border-2 border-gray-200 rounded-xl animate-pulse md:p-6">
      <div className="flex gap-2 mb-5 items-center">
        <div className="h-7 w-7 bg-gray-300 rounded"></div>
        <div className="h-7 w-56 items-center justify-center  bg-gray-300 rounded"></div>
      </div>
      <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-3 bg-gray-200 rounded-full mb-5"></div>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-24 h-6 bg-gray-200 rounded-xl"></div>
        <div className="w-24 h-6 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-2.5 w-32 bg-gray-200 rounded-xl"></div>
        <div className="h-2.5 w-24 bg-gray-200 rounded-xl"></div>
        <div className="h-2.5 w-48 bg-gray-200 rounded-xl"></div>
        <div></div>
      </div>
    </article>
  );
};
