import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "Mr Tanaka...",
    choices: [
      "is a musician",    // index 0
      "is American",      // index 1
      "can speak Spanish" // index 2
    ],
    answer: 0, // index ของคำตอบที่ถูกต้อง (A)
  },
  // เพิ่มข้อใหม่ได้ เช่น
  // {
  //   question: "Lisa ...",
  //   choices: [...],
  //   answer: 2
  // }
];

export default function Examsidebar() {
  const [userAnswers, setUserAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qIndex, cIndex) => {
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[qIndex] = cIndex;
      return copy;
    });
  };

  const checkScore = () => {
    setShowResult(true);
  };

  const score = userAnswers.reduce(
    (sum, ans, idx) => ans === QUESTIONS[idx].answer ? sum + 1 : sum,
    0
  );

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-10 space-y-6">
      {/* ... your video and caption ... */}
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
      {QUESTIONS.map((q, qIdx) => (
        <div key={qIdx} className="bg-yellow-50 p-4 rounded-xl shadow-sm">
          <div className="flex items-center mb-3">
            <span className="bg-yellow-400 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full mr-2">
              {qIdx + 1}
            </span>
            <p className="font-medium text-gray-700">{q.question}</p>
          </div>
          <div className="space-y-2">
            {q.choices.map((choice, cIdx) => {
              // เช็คเฉลย
              let choiceColor = "";
              if (showResult) {
                if (q.answer === cIdx) {
                  choiceColor = "border-green-400 bg-green-50"; // ถูก-ตอบถูก
                } else if (userAnswers[qIdx] === cIdx) {
                  choiceColor = "border-red-400 bg-red-50"; // ตอบผิด
                }
              }
              return (
                <label
                  key={cIdx}
                  className={`block border border-gray-200 rounded-lg p-2 hover:bg-gray-50 cursor-pointer ${choiceColor}`}
                >
                  <input
                    type="radio"
                    name={`q${qIdx}`}
                    className="mr-2 accent-yellow-500"
                    checked={userAnswers[qIdx] === cIdx}
                    onChange={() => handleSelect(qIdx, cIdx)}
                    disabled={showResult}
                  />
                  {String.fromCharCode(65 + cIdx)}. {choice}
                </label>
              );
            })}
          </div>
          {/* เฉลยแต่ละข้อ */}
          {showResult && (
            <div className="mt-2 text-sm">
              {userAnswers[qIdx] === QUESTIONS[qIdx].answer
                ? <span className="text-green-600">ถูกต้อง!</span>
                : <span className="text-red-600">ผิด, คำตอบที่ถูกคือ {String.fromCharCode(65 + q.answer)}</span>
              }
            </div>
          )}
        </div>
      ))}

      {!showResult ? (
        <button
          onClick={checkScore}
          className="w-full mt-4 py-2 bg-yellow-500 text-white rounded-lg text-lg hover:bg-yellow-600 transition"
        >
          ตรวจคำตอบ
        </button>
      ) : (
        <div className="mt-4 text-center text-xl font-semibold text-viridian-700">
          คะแนนของคุณ: {score} / {QUESTIONS.length}
        </div>
      )}
    </div>
  );
}