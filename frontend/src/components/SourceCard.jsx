function SourceCard({ sources }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="bg-slate-50 rounded-xl border border-[#E2E8F0] p-4 text-sm text-slate-500 text-center">
        📭 참고한 공고 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-4">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          📄 참고한 공고 출처
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          분석에 사용된 채용 데이터입니다
        </p>
      </div>

      {/* List */}
      <div className="space-y-3">
        {sources.map((source, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white transition"
          >

            {/* company + title */}
            <p className="text-sm font-semibold text-slate-800">
              {source.company}
            </p>

            <p className="text-sm text-slate-600 mt-1">
              {source.title}
            </p>

            {/* skills */}
            <div className="mt-2 text-xs text-slate-500">
              <span className="font-medium text-slate-600">
                필수 스킬:
              </span>{" "}
              {source.required_skills || "정보 없음"}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCard;