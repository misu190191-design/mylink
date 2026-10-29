"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2400);
    }
  };

  const stackList = [
    { name: "Next.js 16", desc: "웹 애플리케이션 프레임워크", tag: "Framework" },
    { name: "React 19", desc: "사용자 인터페이스 라이브러리", tag: "Library" },
    { name: "TypeScript", desc: "안정적인 코드 작성을 위한 언어", tag: "Language" },
    { name: "Tailwind CSS", desc: "유틸리티 기반 스타일링", tag: "Design" },
    { name: "Vibe Coding", desc: "AI 에이전트 페어 프로그래밍", tag: "AI Tech" },
    { name: "Git & GitHub", desc: "버전 관리 및 협업 도구", tag: "Tools" },
  ];

  const projects = [
    {
      title: "Do-Link (두링크)",
      desc: "토스 디자인 시스템(TDS) 가이드라인을 충실히 반영한 모바일 퍼스트 개인 프로필 & 링크 허브예요.",
      tags: ["Next.js 16", "React 19", "Tailwind CSS"],
      link: "https://github.com/misu190191-design",
      status: "운영 중",
      highlight: true,
    },
    {
      title: "AI Vibe Coding 실험실",
      desc: "생성형 AI와 함께 빠르고 유연하게 아이디어를 프로토타입으로 완성하는 실험 프로젝트예요.",
      tags: ["AI Coding", "Interactive UI", "TypeScript"],
      link: "https://github.com/misu190191-design",
      status: "학습 중",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F6] text-[#191F28] font-sans selection:bg-[#3182F6] selection:text-white pb-28">
      
      {/* TDS 상단 고정 바 (TopBar) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E8EB]">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[17px] text-[#191F28] tracking-tight">프로필</span>
          </div>
          <button
            onClick={() => handleCopy(typeof window !== "undefined" ? window.location.href : "https://github.com/misu190191-design", "link")}
            className="text-[14px] font-semibold text-[#3182F6] hover:text-[#1B64DA] active:opacity-70 transition-opacity flex items-center gap-1 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            공유하기
          </button>
        </div>
      </header>

      {/* TDS 토스트 메시지 (Toast) */}
      {copiedType && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 transition-all duration-200">
          <div className="bg-[#191F28] text-white text-[14px] font-medium px-4 py-3 rounded-[14px] shadow-[0_8px_24px_rgba(25,31,40,0.16)] flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#059669] flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{copiedType === "email" ? "이메일 주소가 복사되었어요" : "프로필 링크가 복사되었어요"}</span>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 영역 (TDS 단일 컬럼 모바일 퍼스트 레이아웃) */}
      <main className="max-w-lg mx-auto px-4 pt-4 sm:pt-6 space-y-3 sm:space-y-4">

        {/* 1. 프로필 헤더 카드 */}
        <section className="bg-white rounded-[24px] p-6 border border-[#E5E8EB]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-start justify-between gap-4">
            {/* 프로필 이미지 (64px 정사각 라운드) */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#F2F4F6] border border-[#E5E8EB] flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="도지선 프로필 사진"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 온라인 상태 뱃지 */}
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#10B981] ring-2 ring-white" />
            </div>

            {/* 상단 상태 칩 */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[#E8F3FF] text-[#3182F6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
              배우며 성장 중이에요
            </span>
          </div>

          {/* 이름 & 직군 */}
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#191F28] tracking-tight">
                도지선
              </h1>
              <span className="text-[14px] text-[#8B95A1] font-normal">
                @misu190191-design
              </span>
            </div>
            <p className="text-[14px] font-semibold text-[#3182F6]">
              프론트엔드 개발자
            </p>
          </div>

          {/* 소개글 (해요체 준수) */}
          <p className="mt-3 text-[15px] text-[#4E5968] leading-relaxed break-keep font-normal">
            안녕하세요. 직관적이고 편안한 사용자 경험을 만들기 위해 프론트엔드와 AI 바이브 코딩을 배우고 있어요. 작은 디테일도 꼼꼼히 챙기며 계속 성장하고 있어요.
          </p>

          {/* 액션 버튼 그룹 */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <a
              href="mailto:misu190191@gmail.com"
              className="h-11 rounded-[12px] bg-[#3182F6] hover:bg-[#1B64DA] active:bg-[#1550B0] text-white font-bold text-[14px] flex items-center justify-center gap-1.5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 보내기
            </a>
            <button
              onClick={() => handleCopy(typeof window !== "undefined" ? window.location.href : "https://github.com/misu190191-design", "link")}
              className="h-11 rounded-[12px] bg-[#F2F4F6] hover:bg-[#E5E8EB] active:bg-[#D1D6DB] text-[#333D4B] font-semibold text-[14px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#4E5968]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              링크 복사
            </button>
          </div>
        </section>

        {/* 2. 주요 링크 & 채널 (TDS ListRow 컴포넌트 패턴) */}
        <section className="bg-white rounded-[24px] p-5 border border-[#E5E8EB]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-3">
          <div className="px-1">
            <h2 className="text-[17px] font-bold text-[#191F28] tracking-tight">
              연결할 수 있는 곳이에요
            </h2>
            <p className="text-[13px] text-[#8B95A1] mt-0.5">
              관심 있는 채널을 눌러서 바로 이동해보세요
            </p>
          </div>

          <div className="space-y-1">
            {/* GitHub 행 */}
            <a
              href="https://github.com/misu190191-design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-[16px] hover:bg-[#F9FAFB] active:bg-[#F2F4F6] transition-colors group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-[14px] bg-[#F2F4F6] flex items-center justify-center text-[#191F28] shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#191F28] truncate">GitHub</div>
                  <div className="text-[13px] text-[#8B95A1] truncate">github.com/misu190191-design</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-[#B0B8C1] group-hover:text-[#4E5968] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* 이메일 주소 복사 행 */}
            <div className="flex items-center justify-between p-3 rounded-[16px] hover:bg-[#F9FAFB] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-[14px] bg-[#E8F3FF] text-[#3182F6] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#191F28] truncate">이메일</div>
                  <div className="text-[13px] text-[#8B95A1] truncate">misu190191@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy("misu190191@gmail.com", "email")}
                className="px-3 py-1.5 rounded-[8px] bg-[#F2F4F6] hover:bg-[#E5E8EB] active:bg-[#D1D6DB] text-[12px] font-semibold text-[#333D4B] shrink-0 ml-2 transition-colors cursor-pointer"
              >
                복사
              </button>
            </div>

            {/* 포트폴리오 아카이브 행 */}
            <div className="flex items-center justify-between p-3 rounded-[16px] opacity-75">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-[14px] bg-[#F2F4F6] text-[#6B7684] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#191F28] truncate">포트폴리오 아카이브</div>
                  <div className="text-[13px] text-[#8B95A1] truncate">프로젝트 정리 및 회고</div>
                </div>
              </div>
              <span className="text-[12px] font-medium text-[#8B95A1] px-2.5 py-1 rounded-[6px] bg-[#F2F4F6] shrink-0 ml-2">
                준비 중
              </span>
            </div>

            {/* 기술 블로그 행 */}
            <div className="flex items-center justify-between p-3 rounded-[16px] opacity-75">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-[14px] bg-[#F2F4F6] text-[#6B7684] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#191F28] truncate">기술 블로그</div>
                  <div className="text-[13px] text-[#8B95A1] truncate">배운 내용과 생각 정리</div>
                </div>
              </div>
              <span className="text-[12px] font-medium text-[#8B95A1] px-2.5 py-1 rounded-[6px] bg-[#F2F4F6] shrink-0 ml-2">
                오픈 예정
              </span>
            </div>
          </div>
        </section>

        {/* 3. 프로젝트 섹션 */}
        <section className="bg-white rounded-[24px] p-5 border border-[#E5E8EB]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
          <div className="px-1">
            <h2 className="text-[17px] font-bold text-[#191F28] tracking-tight">
              진행 중인 프로젝트예요
            </h2>
            <p className="text-[13px] text-[#8B95A1] mt-0.5">
              실제로 개발하고 다듬어가고 있는 작업물이에요
            </p>
          </div>

          <div className="space-y-3">
            {projects.map((proj) => (
              <a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-[18px] bg-[#F9FAFB] hover:bg-[#F2F4F6] border border-[#E5E8EB] active:scale-[0.99] transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[15px] font-bold text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                    {proj.title}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-[6px] ${proj.highlight ? "bg-[#E8F3FF] text-[#3182F6]" : "bg-[#E5E8EB] text-[#4E5968]"}`}>
                    {proj.status}
                  </span>
                </div>
                
                <p className="text-[13px] text-[#4E5968] leading-relaxed mb-3 break-keep">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-[#6B7684] border border-[#E5E8EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. 기술 스택 섹션 (TDS Chip / List) */}
        <section className="bg-white rounded-[24px] p-5 border border-[#E5E8EB]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
          <div className="px-1">
            <h2 className="text-[17px] font-bold text-[#191F28] tracking-tight">
              자주 사용하는 기술이에요
            </h2>
            <p className="text-[13px] text-[#8B95A1] mt-0.5">
              사용자에게 직관적인 화면을 만들기 위해 쓰는 도구들이에요
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {stackList.map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-[14px] bg-[#F9FAFB] border border-[#E5E8EB]/60 flex flex-col justify-between"
              >
                <span className="text-[11px] font-semibold text-[#3182F6] tracking-tight">
                  {item.tag}
                </span>
                <div className="mt-1">
                  <p className="text-[14px] font-bold text-[#191F28]">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#8B95A1] truncate mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 푸터 영역 */}
        <footer className="pt-4 pb-2 text-center space-y-1">
          <p className="text-[13px] font-medium text-[#8B95A1]">
            도지선 포트폴리오
          </p>
          <p className="text-[12px] text-[#B0B8C1]">
            Toss Design System 가이드라인을 바탕으로 제작되었어요
          </p>
        </footer>

      </main>

      {/* TDS 화면 하단 고정 액션 버튼 (BottomCTA) */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        {/* 상단 화이트 투명 보호 그라디언트 (TDS 필수 규격) */}
        <div className="h-8 bg-gradient-to-t from-[#F2F4F6] to-transparent pointer-events-none" />
        
        <div className="bg-[#F2F4F6] px-4 pb-4 sm:pb-6 pointer-events-auto">
          <div className="max-w-lg mx-auto">
            <a
              href="mailto:misu190191@gmail.com"
              className="w-full h-14 rounded-[16px] bg-[#3182F6] hover:bg-[#1B64DA] active:bg-[#1550B0] text-white font-bold text-[17px] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(49,130,246,0.24)] active:scale-[0.99] transition-all"
            >
              <span>이메일로 함께하기</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}