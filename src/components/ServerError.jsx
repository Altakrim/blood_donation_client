const ServerError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-700">500</h1>

      <p className="text-2xl font-semibold mt-4 text-gray-800">
        Server Error
      </p>

      <p className="mt-2 text-gray-700">
       There was a problem with the server. Please try again later.
      </p>
    </div>
  );
};

export default ServerError;
