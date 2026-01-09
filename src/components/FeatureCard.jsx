const FeatureCard = ({ icon: Icon , title, desc }) => {
  return (
    <div className="card bg-base-100 shadow-md p-6 text-center">
      <Icon className="text-4xl text-red-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
