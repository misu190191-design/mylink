export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-[#120524] via-[#1d0938] to-[#0a0214] text-zinc-100 selection:bg-purple-500 selection:text-white">
      {/* 프로필 카드 */}
      <div className="w-full max-w-md rounded-3xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.35)] ring-1 ring-purple-400/20 text-center flex flex-col items-center gap-6 sm:gap-7 transition-all">
        {/* 프로필 사진 (카드 위쪽 중앙에 원형으로 크게 배치 + 초록색 온라인 상태 표시) */}
        <div className="relative group">
          <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 text-white text-4xl sm:text-5xl font-bold shadow-xl shadow-purple-900/60 ring-4 ring-purple-400/30 transition-transform duration-300 group-hover:scale-105">
            도
          </div>
          <span className="absolute bottom-1 right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 ring-4 ring-[#1b0a33]"></span>
          </span>
        </div>

        {/* 이름 */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            도지선
          </h1>
        </div>

        {/* 소개글 */}
        <p className="text-sm sm:text-base leading-relaxed text-purple-200/90 break-keep font-normal">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 배지 (세 개 가로 배치) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-purple-900/50 text-purple-100 border border-purple-400/30 backdrop-blur-sm shadow-sm">
            💻 웹 개발자
          </span>
          <span className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-purple-900/50 text-purple-100 border border-purple-400/30 backdrop-blur-sm shadow-sm">
            ⚡ Next.js & React
          </span>
          <span className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-purple-900/50 text-purple-100 border border-purple-400/30 backdrop-blur-sm shadow-sm">
            🚀 지속 가능한 성장
          </span>
        </div>

        {/* 카드 아래쪽: "연락하기"와 "링크" 버튼 나란히 배치 */}
        <div className="w-full flex flex-row items-center gap-3 pt-2">
          {/* 첫 번째 버튼: 밝은 보라색 */}
          <a
            href="mailto:misu190191@gmail.com"
            className="flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40 text-center flex items-center justify-center"
          >
            연락하기
          </a>

          {/* 두 번째 버튼: 투명한 보라색 테두리 스타일 */}
          <a
            href="https://github.com/misu190191-design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-transparent hover:bg-purple-500/15 text-purple-200 hover:text-white font-medium text-sm transition-all duration-200 border border-purple-400/40 hover:border-purple-300/70 text-center flex items-center justify-center"
          >
            링크
          </a>
        </div>
      </div>
    </main>
  );
}
