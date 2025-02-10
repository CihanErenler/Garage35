const Values = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Integrity</h3>
            <p className="text-gray-600">
              We believe in honest, transparent dealings with our customers and partners.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive to exceed expectations in every aspect of our service.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority, and we're committed to your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values; 