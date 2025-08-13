import React from "react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        {/* Company Name */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          IDEA PLUS SOFTWARE
        </h2>

        {/* Address */}
        <p className="text-gray-600 mb-4">
          HNo. 1153-B/32, Sant Nagar
          <br />
          Laodwali Road, Jalandhar – 144001
        </p>

        {/* Phone Numbers */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">Call:</p>
          <p className="text-gray-600">9888813328, 9876110328</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">E-mail:</p>
          <p className="text-blue-600 hover:underline">
            <a href="mailto:iqbaljitsingh@yahoo.com">
              iqbaljitsingh@yahoo.com
            </a>
          </p>
        </div>

        {/* Office Numbers */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">Office:</p>
          <p className="text-gray-600">
            0181-2915328 – 0181-4150328 – 9877029600
          </p>
        </div>

        {/* Optional Contact Form */}
        {/* <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition w-full"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </div>
  );
}
