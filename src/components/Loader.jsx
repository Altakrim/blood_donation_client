
const Loading = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <span className="loading loading-spinner loading-lg text-red-600"></span>
      <p className="mt-4 text-lg font-semibold text-red-700">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;