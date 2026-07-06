import { useState } from "react";

function InputForm({ onSubmit, isLoading }) {
  const [major, setMajor] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [jobType, setJobType] = useState("");

  function handleSubmit() {
    const skills = skillsInput.split(",").map(s => s.trim()).filter(Boolean);
    onSubmit({ major, skills, jobType });
  }

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          🎯 내 정보 입력
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          AI가 맞춤형 커리어 분석을 제공합니다
        </p>
      </div>

      {/* 전공 */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          전공
        </label>

        <input
          type="text"
          value={major}
          onChange={e => setMajor(e.target.value)}
          placeholder="예: 통계학과"
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      {/* 스킬 */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          보유 스킬
          <span className="text-xs text-slate-400 ml-2">
            (쉼표로 구분)
          </span>
        </label>

        <input
          type="text"
          value={skillsInput}
          onChange={e => setSkillsInput(e.target.value)}
          placeholder="예: Python, SQL, R"
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      {/* 직무 */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          관심 직무
        </label>

        <input
          type="text"
          value={jobType}
          onChange={e => setJobType(e.target.value)}
          placeholder="예: 데이터 분석"
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      {/* 버튼 */}
      <button
        onClick={handleSubmit}
        disabled={isLoading || !major || !skillsInput || !jobType}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300
                   text-white font-medium py-2.5 px-4 rounded-lg
                   transition-all text-sm flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <span className="animate-pulse">⏳</span>
            분석 중...
          </>
        ) : (
          "역량 분석 시작"
        )}
      </button>
    </div>
  );
}

export default InputForm;