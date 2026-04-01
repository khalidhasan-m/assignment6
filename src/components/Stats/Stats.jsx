const StatsBanner = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <div className="p-16 bg-linear-to-r from-violet-700 to-purple-500">
      <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/30">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-8 sm:px-16 py-4 sm:py-0"
          >
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
              {stat.value}
            </span>
            <span className="text-sm text-white/70 mt-1 tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
