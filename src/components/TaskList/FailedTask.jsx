const FailedTask = ({ data, bg }) => {
  return (
    <div className={`h-full w-[300px] ${bg} rounded-xl flex-shrink-0 p-5`}>
      <div className="flex justify-between items-center">
        <h3 className={`py-1 px-3 rounded text-sm  font-medium bg-red-600`}>
          {data.priority}
        </h3>
        <h4 className="text-sm font-medium">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-medium">{data.title}</h2>
      <p className="text-sm text-justify mt-5 ">{data.description}</p>
      <div className="mt-4">
        <button className="bg-red-500 py-1 px-2 text-sm rounded-md w-full">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
