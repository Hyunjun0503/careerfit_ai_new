function ResultCard({ answer }) {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5">

      {/* 📊 Header */}
      <h2 className="text-lg font-semibold text-slate-800">
        AI 분석 결과
      </h2>

      {/* 🧠 Highlight (한 번만) */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700 font-medium leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>

      {/* 📄 Paragraph view (중복 제거 + 문단 정리) */}
      <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
        {answer}
      </div>

    </div>
  );
}

export default ResultCard;