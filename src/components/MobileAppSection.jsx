import React from "react";

const MobileAppSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 max-h-[500px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-8/12 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="mb-6 text-lg">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
            >
              <img
                src="/path-to-apple-logo.png"
                alt="App Store"
                className="inline-block w-5 h-5 mr-2"
              />
              Get it on App Store
            </a>
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
            >
              <img
                src="/path-to-google-play-logo.png"
                alt="Google Play"
                className="inline-block w-5 h-5 mr-2"
              />
              Get it on Google Play
            </a>
          </div>
        </div>
        <img src="src/assets/images/mobile_image.png" alt="Phone" />
      </div>
    </section>
  );
};

export default MobileAppSection;
