const JobShimmer = () => {
  return (
    <div className="z-10 grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="h-64 w-full animate-pulse rounded-2xl bg-gray-200 shadow-sm"
        >
          <div className="h-40 w-full rounded-t-2xl bg-gray-300" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-3/4 rounded bg-gray-300" />
            <div className="h-4 w-1/2 rounded bg-gray-300" />
            <div className="h-3 w-2/3 rounded bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobShimmer;
