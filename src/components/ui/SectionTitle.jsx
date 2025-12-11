const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;