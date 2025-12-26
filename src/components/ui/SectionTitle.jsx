const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <div className="relative inline-block">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    </div>
    {subtitle && (
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;