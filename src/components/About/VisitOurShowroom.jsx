import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";

const VisitOurShowroom = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 1,
      name: "Tampere Central",
      address: "Hatanpään valtatie 34",
      postal: "33100 Tampere",
      phone: "+358 123 456 789",
      hours: {
        weekdays: "9:00 - 18:00",
        saturday: "10:00 - 16:00",
        sunday: "Closed",
      },
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {t("about.contact.title")}
          </h2>
          <p className="mb-16 text-lg text-gray-600">
            {t("about.contact.description")}
          </p>

          <div className="grid gap-8 md:grid-cols-1">
            {locations.map((location) => (
              <div
                key={location.id}
                className="group overflow-hidden rounded-2xl bg-white p-8 ring-1 shadow-sm ring-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="mb-8 text-2xl font-bold text-gray-900">
                  {location.name}
                </h3>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Address */}
                  <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 md:border-r md:border-b-0 md:pb-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">
                        {location.address}
                      </p>
                      <p className="text-gray-600">{location.postal}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 md:border-r md:border-b-0 md:pb-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <a
                      href={`tel:${location.phone}`}
                      className="font-medium text-gray-900 transition-colors hover:text-red-500"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <FaClock className="h-5 w-5" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">
                        Mon-Fri: {location.hours.weekdays}
                      </p>
                      <p className="text-gray-600">
                        Sat: {location.hours.saturday}
                      </p>
                      <p className="text-gray-600">
                        Sun: {location.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-500"
                    onClick={() =>
                      (window.location.href = `tel:${location.phone}`)
                    }
                  >
                    <FaPhone className="h-4 w-4" />
                    {t("about.contact.callNow")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitOurShowroom;
