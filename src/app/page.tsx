"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => {
      setCopied(null);
    }, 2500);
  };

  const techStack = [
    { name: "Next.js 16", category: "Framework", color: "from-blue-500/20 to-cyan-500/20 text-cyan-200 border-cyan-500/30" },
    { name: "React 19", category: "Library", color: "from-sky-500/20 to-blue-500/20 text-sky-200 border-sky-500/30" },
    { name: "TypeScript", category: "Language", color: "from-blue-600/20 to-indigo-600/20 text-blue-200 border-blue-500/30" },
    { name: "Tailwind CSS", category: "Styling", color: "from-teal-500/20 to-emerald-500/20 text-teal-200 border-teal-500/30" },
    { name: "Vibe Coding & AI", category: "Specialty", color: "from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-500/30" },
    { name: "Git / GitHub", category: "Tools", color: "from-violet-500/20 to-indigo-500/20 text-violet-200 border-violet-500/30" },
  ];

  const projects = [
    {
      title: "Do-Link (두링크)",
      desc: "Next.js 16과 Tailwind v4로 제작한 인터랙티브 반응형 개인 프로필 & 링크 허브",
      tags: ["Next.js", "React 19", "Tailwind CSS"],
      link: "https://github.com/misu190191-design",
      status: "운영 중",
    },
    {
      title: "AI Vibe Coding Playground",
      desc: "AI 에이전트와 함께하는 빠른 프로토타이핑 및 인터랙티브 웹 앱 프로젝트",
      tags: ["AI Coding", "TypeScript", "Prompt Eng"],
      link: "https://github.com/misu190191-design",
      status: "진행 중",
    },
  ];

  return (
    <main className="min-h-screen bg-[#08020f] text-zinc-100 relative overflow-hidden selection:bg-purple-500 selection:text-white pb-16">
      {/* 배경 오로라 & 발광 효과 */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-purple-700/30 via-fuchsia-600/20 to-indigo-600/25 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-900/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-900/25 blur-[140px] rounded-full" />
        {/* 미세한 그리드 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* 알림 토스트 (클립보드 복사 시) */}
      {copied && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-600/90 text-white text-xs sm:text-sm font-medium shadow-xl shadow-purple-950/80 border border-purple-400/40 backdrop-blur-md">
            <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{copied === "email" ? "이메일 주소가 복사되었습니다!" : "프로필 링크가 복사되었습니다!"}</span>
          </div>
        </div>
      )}

      {/* 중앙 메인 컨테이너 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 space-y-6">

        {/* 상단 프로필 헤더 카드 */}
        <div className="rounded-3xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(147,51,234,0.15)] ring-1 ring-white/5 transition-all">
          {/* 커버 배너 이미지 */}
          <div className="relative h-36 sm:h-48 md:h-56 w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950">
            <Image
              src="/banner.svg"
              alt="Profile Banner"
              fill
              priority
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            {/* 배너 위 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            
            {/* 상단 뱃지 */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/80 border border-purple-400/30 text-purple-200 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Vibe Coding 학습 중
              </span>
            </div>
          </div>

          {/* 프로필 정보 영역 */}
          <div className="px-5 sm:px-8 pb-8 pt-0 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-5">
              {/* 프로필 이미지 (원형) */}
              <div className="relative group">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 shadow-2xl shadow-purple-900/60 ring-4 ring-zinc-950">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                    <Image
                      src="/profile.png"
                      alt="도지선 프로필 사진"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* 실시간 상태 점 */}
                <span className="absolute bottom-2 right-2 flex h-4 w-4 sm:h-5 sm:w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-emerald-500 ring-2 sm:ring-4 ring-zinc-950" />
                </span>
              </div>

              {/* 액션 버튼 그룹 */}
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => copyToClipboard(typeof window !== "undefined" ? window.location.href : "https://github.com/misu190191-design", "link")}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium border border-zinc-700/60 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  링크 복사
                </button>
                <a
                  href="mailto:misu190191@gmail.com"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-medium shadow-lg shadow-purple-600/30 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  이메일 문의
                </a>
              </div>
            </div>

            {/* 사용자 이름 및 기본 정보 */}
            <div className="space-y-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  도지선
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    Developer
                  </span>
                </h1>
                <span className="text-sm text-zinc-400 font-mono">@misu190191-design</span>
              </div>

              {/* 자기소개 */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl break-keep">
                안녕하세요! 새로운 기술을 탐구하고 AI 바이브 코딩으로 상상을 현실로 만들어가는 대학생 개발자 도지선입니다. 
                사용자에게 편안하고 감각적인 인터페이스를 구현하는 것에 열정을 가지고 있습니다.
              </p>

              {/* 하이라이트 뱃지 태그 */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-900/40 text-purple-200 border border-purple-500/30">
                  <span>💻</span> 프론트엔드 & 웹 개발
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/40 text-indigo-200 border border-indigo-500/30">
                  <span>✨</span> Next.js & React 19
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-900/40 text-fuchsia-200 border border-fuchsia-500/30">
                  <span>🚀</span> 빠른 실행력과 배움
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 벤토 그리드 레이아웃 (반응형 2~3열) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Bento 1: 주요 링크 카드 (2칸 차지 또는 1열) */}
          <div className="md:col-span-2 rounded-3xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl ring-1 ring-white/5 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                <h2 className="text-lg font-bold text-white">주요 링크 및 채널</h2>
              </div>
              <span className="text-xs text-zinc-400">클릭하여 바로가기</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* GitHub 링크 */}
              <a
                href="https://github.com/misu190191-design"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800 hover:border-purple-500/50 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">GitHub</div>
                    <div className="text-xs text-zinc-400">코드 저장소 및 활동</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* 이메일 복사 카드 */}
              <button
                onClick={() => copyToClipboard("misu190191@gmail.com", "email")}
                className="group p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800 hover:border-purple-500/50 transition-all duration-200 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">Email</div>
                    <div className="text-xs text-zinc-400 truncate max-w-[130px] sm:max-w-none">misu190191@gmail.com</div>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-zinc-800 text-zinc-300 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  복사
                </span>
              </button>

              {/* 포트폴리오 카드 */}
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between opacity-80 hover:opacity-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">포트폴리오</div>
                    <div className="text-xs text-zinc-400">프로젝트 아카이빙</div>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">업데이트 예정</span>
              </div>

              {/* 기술 블로그 카드 */}
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between opacity-80 hover:opacity-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-950/50 border border-pink-500/30 flex items-center justify-center text-pink-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">기술 블로그</div>
                    <div className="text-xs text-zinc-400">배운 것과 인사이트 기록</div>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">준비 중</span>
              </div>
            </div>
          </div>

          {/* Bento 2: 상태 및 관심사 카드 */}
          <div className="rounded-3xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl ring-1 ring-white/5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-white">현재 상태</h2>
            </div>

            <div className="space-y-3.5">
              <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <span className="text-xs text-purple-400 font-medium">학습 목표</span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  Next.js 풀스택 & AI 페어 프로그래밍 마스터하기
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <span className="text-xs text-emerald-400 font-medium">협업 상태</span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  사이드 프로젝트 & 아이디어 교류 환영
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                <span className="text-xs text-cyan-400 font-medium">관심 분야</span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  인터랙티브 웹, 디자인 시스템, Agentic UI
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 하단 그리드: 기술 스택 & 프로젝트 쇼케이스 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* 기술 스택 카드 */}
          <div className="rounded-3xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-7 shadow-xl ring-1 ring-white/5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">기술 스택 & 도구</h2>
                <p className="text-xs text-zinc-400">자주 활용하고 학습 중인 기술입니다</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`p-3 rounded-2xl bg-gradient-to-br ${tech.color} border backdrop-blur-sm transition-transform hover:-translate-y-0.5 duration-200 flex flex-col justify-between`}
                >
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">{tech.category}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 프로젝트 쇼케이스 카드 */}
          <div className="rounded-3xl bg-zinc-950/60 border border-purple-500/20 backdrop-blur-xl p-6 sm:p-7 shadow-xl ring-1 ring-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white">프로젝트</h2>
                  <p className="text-xs text-zinc-400">작업한 작업물과 실험 프로젝트</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {projects.map((proj) => (
                <a
                  key={proj.title}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800 hover:border-purple-500/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      {proj.title}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {proj.status}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* 푸터 */}
        <footer className="pt-6 pb-4 text-center text-xs text-zinc-500 space-y-2">
          <p>© 2026 도지선 (Do Ji-seon). All rights reserved.</p>
          <p className="text-zinc-600">Built with Next.js 16, React 19 & Tailwind CSS</p>
        </footer>

      </div>
    </main>
  );
}