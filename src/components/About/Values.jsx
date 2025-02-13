const Values = () => {
  return (
    <div className="mt-16 rounded-lg py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group rounded-xl bg-white p-8 text-center ring-1 shadow-sm ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-red-500">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Integrity
            </h3>
            <p className="leading-relaxed text-gray-600">
              We believe in honest, transparent dealings with our customers and
              partners.
            </p>
          </div>
          <div className="group rounded-xl bg-white p-8 text-center ring-1 shadow-sm ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-red-500">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Excellence
            </h3>
            <p className="leading-relaxed text-gray-600">
              We strive to exceed expectations in every aspect of our service.
            </p>
          </div>
          <div className="group rounded-xl bg-white p-8 text-center ring-1 shadow-sm ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-red-500">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Customer Focus
            </h3>
            <p className="leading-relaxed text-gray-600">
              Your satisfaction is our top priority, and we&apos;re committed to
              your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
