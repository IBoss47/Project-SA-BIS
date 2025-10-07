
export default function Examsidebar() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-10 space-y-6">
      {/* YouTube Video Section */}
      <div className="aspect-video rounded-xl overflow-hidden shadow">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Who is in your new class?"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Caption */}
      <div className="text-center text-gray-600 text-sm">
        See the full list of{" "}
        <a href="#" className="text-yellow-500 font-medium hover:underline">
          A1 listening tests
        </a>
      </div>

      <hr className="border-t border-gray-200 my-4" />

      {/* Questions Section */}
      <div>
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
          Questions
        </h2>

        {/* Question 1 */}
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm">
          <div className="flex items-center mb-3">
            <span className="bg-yellow-400 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-2">
              1
            </span>
            <p className="font-medium text-gray-700">Mr Tanaka...</p>
          </div>

          <div className="space-y-2">
            <label className="block border border-gray-200 rounded-lg p-2 hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="mr-2 accent-yellow-500" />
              A. is a musician
            </label>
            <label className="block border border-gray-200 rounded-lg p-2 hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="mr-2 accent-yellow-500" />
              B. is American
            </label>
            <label className="block border border-gray-200 rounded-lg p-2 hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="mr-2 accent-yellow-500" />
              C. can speak Spanish
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}