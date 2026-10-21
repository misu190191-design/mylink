export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-800/80 p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-700/60 backdrop-blur-sm text-center flex flex-col items-center gap-6">
        {/* 프로필 아바타 */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white text-3xl font-bold shadow-md">
          도
        </div>

        {/* 프로필 정보 */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">도지선</h1>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Student & Developer
          </p>
        </div>

        {/* 소개글 */}
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 액션 / 링크 버튼 (심플) */}
        <div className="w-full pt-2">
          <button className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-white font-medium text-sm transition-all duration-200 shadow-sm">
            연락하기
          </button>
        </div>
      </div>
    </main>
  );
}
