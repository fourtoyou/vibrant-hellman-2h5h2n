import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Lock,
  Unlock,
  Sparkles,
  Smile,
  Delete,
  ChevronRight,
  Stars,
  Send,
  X,
  Play,
  Pause,
} from "lucide-react";

export default function App() {
  const [step, setStep] = useState(0);
  const [pin, setPin] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [noBtnScale, setNoBtnScale] = useState(1);
  const [isMoved, setIsMoved] = useState(false);
  const [escapeCount, setEscapeCount] = useState(0);
  const [noBtnText, setNoBtnText] = useState("ไม่ดี 😤");

  const [showGallery, setShowGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const containerRef = useRef(null);

  const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
  ];

  const loveMessages = [
    "จำวันแรกที่เราคุยกันได้มั้ย...",
    "ตอนนั้นไม่คิดเลยนะว่าจะรักได้มากขนาดนี้",
    "รอยยิ้มของเธอคือโลกทั้งใบของเค้าเลยนะ",
    "ทุกที่ที่มีเธอ มันกลายเป็นที่ที่พิเศษเสมอ",
    "เค้าชอบเวลาที่เราได้อยู่ด้วยกัน",
    "ชอบเสียงหัวเราะของเธอ",
    "ชอบสายตาเวลาที่เธอมองมา",
    "บางครั้งเค้าอาจจะทำตัวไม่น่ารักไปบ้าง...",
    "อาจจะงี่เง่า ดื้อ หรือทำให้เธอต้องปวดหัว",
    "ทำให้เธอต้องเสียความรู้สึก...",
    "เค้าขอโทษจากใจจริงเลยนะ 🥺",
    "เค้ารู้ตัวแล้วว่าเค้าขาดเธอไม่ได้",
    "ไม่มีเธอแล้วโลกมันหมองหม่นไปหมดเลย",
    "อยากกลับไปจับมือแน่นๆ เหมือนเดิม",
    "อยากกอดเธอให้แน่นที่สุด",
    "ให้โอกาสคนๆ นี้อีกครั้งได้มั้ยคะ",
    "เค้าจะพยายามเป็นคนที่ดีขึ้นเพื่อเธอ",
    "จะดูแลรอยยิ้มนี้ให้ดีกว่าเดิม",
    "เธอคือความสุขเดียวของเค้านะ",
    "เรามาเริ่มต้นกันใหม่อีกครั้งนะ 💕",
    "อยู่เป็นความรักดีๆ ให้กันตลอดไปนะ",
    "รักเธอนะคะ คนเก่งของเค้า 💖",
    "ถึงเค้าจะไม่ใช่คนที่ดีที่สุด...",
    "แต่เค้าจะรักเธอให้ดีที่สุดนะ",
    "ขอบคุณที่อดทนกับความดื้อของเค้า",
    "ขอบคุณที่เป็นรอยยิ้มให้กันเสมอมา",
    "เรามาสร้างความทรงจำดีๆ ด้วยกันอีกนะ",
    "จับมือกันไว้แน่นๆ แบบนี้ไปนานๆ เลย",
    "เค้าสัญญาว่าจะดูแลหัวใจดวงนี้ให้ดี",
    "ดีกันนะ... รักเธอที่สุดในโลกเลย!",
    "My heart belongs to you 💖",
  ];

  const heartPositions = [
    { col: 2, row: 1 },
    { col: 3, row: 1 },
    { col: 4, row: 1 },
    { col: 6, row: 1 },
    { col: 7, row: 1 },
    { col: 8, row: 1 },
    { col: 1, row: 2 },
    { col: 2, row: 2 },
    { col: 3, row: 2 },
    { col: 4, row: 2 },
    { col: 5, row: 2 },
    { col: 6, row: 2 },
    { col: 7, row: 2 },
    { col: 8, row: 2 },
    { col: 9, row: 2 },
    { col: 2, row: 3 },
    { col: 3, row: 3 },
    { col: 4, row: 3 },
    { col: 5, row: 3 },
    { col: 6, row: 3 },
    { col: 7, row: 3 },
    { col: 8, row: 3 },
    { col: 3, row: 4 },
    { col: 4, row: 4 },
    { col: 5, row: 4 },
    { col: 6, row: 4 },
    { col: 7, row: 4 },
    { col: 4, row: 5 },
    { col: 5, row: 5 },
    { col: 6, row: 5 },
    { col: 5, row: 6 },
  ];

  useEffect(() => {
    if (pin.length === 6) {
      if (pin === "041006") {
        setTimeout(() => setStep(1), 800);
        setErrorMsg("");
      } else {
        setErrorMsg("รหัสผิดน้าา นึกดีๆ สิคะ 🥺");
        setTimeout(() => setPin(""), 1000);
      }
    } else {
      setErrorMsg("");
    }
  }, [pin]);

  const handleNumpadClick = (num) => {
    if (pin.length < 6) setPin((prev) => prev + num);
  };

  useEffect(() => {
    let timer;
    if (step === 1 && !isPaused && slideIndex < photos.length) {
      timer = setTimeout(() => {
        if (slideIndex < photos.length - 1) setSlideIndex((prev) => prev + 1);
        else setStep(2);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [step, slideIndex, isPaused, photos.length]);

  const moveNoButton = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (escapeCount >= 7) {
      setNoBtnScale(0);
      return;
    }
    if (escapeCount === 4) setNoBtnText("กดไม่ได้หรอก แบร่ 😜");
    else if (escapeCount === 6) setNoBtnText("ยอมเถอะ ดีกันน้า 🥺");

    if (containerRef.current) {
      const safeWidth = window.innerWidth - 150;
      const safeHeight = window.innerHeight - 150;
      const newX = Math.max(20, Math.floor(Math.random() * safeWidth));
      const newY = Math.max(20, Math.floor(Math.random() * safeHeight));
      setNoBtnPosition({ x: newX, y: newY });
      setNoBtnScale((prev) => Math.max(0.4, prev * 0.9));
      setIsMoved(true);
      setEscapeCount((prev) => prev + 1);
    }
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            opacity: Math.random() * 0.5 + 0.1,
            transform: `scale(${Math.random() * 0.6 + 0.4})`,
          }}
        >
          {i % 3 === 0 ? (
            <Stars className="text-yellow-200" size={16} />
          ) : (
            <Heart className="text-pink-300 fill-pink-300" size={20} />
          )}
        </div>
      ))}
    </div>
  );

  const handleImageError = (e) => {
    e.target.style.display = "none";
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = "flex";
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative selection:bg-pink-300 text-white transition-all duration-1000"
      style={{
        background:
          step === 3
            ? "radial-gradient(circle at center, #ffe4e6 0%, #fbcfe8 50%, #f472b6 100%)"
            : "radial-gradient(circle at center, #1f2937 0%, #111827 50%, #030712 100%)",
      }}
      ref={containerRef}
    >
      <FloatingParticles />

      {step === 0 && (
        <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-sm text-center transform transition-all duration-700 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-40 rounded-full animate-pulse group-hover:opacity-60 transition-opacity"></div>
              <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full flex items-center justify-center relative z-10 shadow-lg transform transition-transform group-hover:scale-105">
                {pin.length === 6 && pin === "041006" ? (
                  <Unlock className="w-8 h-8 text-white animate-bounce" />
                ) : (
                  <Lock className="w-8 h-8 text-white" />
                )}
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-2 tracking-wide">
            Our Memories Vault
          </h1>
          <p className="text-gray-400 text-sm mb-8 font-light">
            กรอกรหัสผ่าน (วันเกิด ค.ศ.) เพื่อปลดล็อก 🗝️
          </p>

          <div className="flex justify-center gap-4 mb-6 h-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i < pin.length
                    ? "bg-gradient-to-r from-pink-400 to-purple-400 scale-125 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
                    : "bg-gray-700/50 shadow-inner"
                }`}
              />
            ))}
          </div>
          <div className="h-6 mb-4">
            {errorMsg && (
              <p className="text-red-400 text-sm animate-shake drop-shadow-md font-medium">
                {errorMsg}
              </p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumpadClick(num.toString())}
                className="bg-white/5 hover:bg-white/15 border border-white/5 text-white text-2xl md:text-3xl font-light py-4 rounded-2xl transition-all duration-200 active:scale-90 backdrop-blur-sm"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setPin("")}
              className="bg-white/5 hover:bg-white/15 border border-white/5 text-pink-400/80 text-lg font-medium py-4 rounded-2xl transition-all duration-200 active:scale-90"
            >
              CLR
            </button>
            <button
              onClick={() => handleNumpadClick("0")}
              className="bg-white/5 hover:bg-white/15 border border-white/5 text-white text-2xl md:text-3xl font-light py-4 rounded-2xl transition-all duration-200 active:scale-90"
            >
              0
            </button>
            <button
              onClick={() => setPin((prev) => prev.slice(0, -1))}
              className="bg-white/5 hover:bg-white/15 border border-white/5 text-pink-400/80 flex justify-center items-center py-4 rounded-2xl transition-all duration-200 active:scale-90"
            >
              <Delete size={24} />
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="relative z-10 w-full h-full max-w-md flex flex-col items-center justify-center animate-fade-in">
          <div className="absolute top-4 left-0 right-0 flex gap-1 px-4 z-20">
            {photos.map((_, i) => (
              <div
                key={i}
                className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-white transition-all ease-linear ${
                    i === slideIndex && !isPaused
                      ? "w-full duration-[4000ms]"
                      : i < slideIndex
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          <div
            className="relative w-full aspect-[9/16] max-h-[80vh] rounded-3xl bg-black/50 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group cursor-pointer"
            onClick={() => {
              if (slideIndex < photos.length - 1)
                setSlideIndex((prev) => prev + 1);
              else setStep(2);
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-gray-900">
              <img
                key={slideIndex}
                src={`/${photos[slideIndex]}`}
                alt="Memory"
                className="w-full h-full object-cover animate-ken-burns"
                onError={handleImageError}
              />
              <div className="hidden w-full h-full flex-col items-center justify-center text-pink-300">
                <Heart className="w-12 h-12 animate-pulse opacity-50 mb-4 fill-current" />
                <span className="text-sm">
                  ภาพแห่งความทรงจำ {slideIndex + 1}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
            <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-white font-medium text-sm drop-shadow-md">
                  Our Journey
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPaused(!isPaused);
                }}
                className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
            </div>
            <div className="absolute bottom-10 left-0 right-0 px-6 text-center z-20">
              <p
                key={`text-${slideIndex}`}
                className="text-2xl md:text-3xl font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,1)] animate-slide-up-fade"
                style={{ lineHeight: "1.4" }}
              >
                "{loveMessages[slideIndex]}"
              </p>
            </div>
          </div>
          <button
            onClick={() => setStep(2)}
            className="mt-6 text-white/50 text-sm underline hover:text-white transition-colors"
          >
            ข้ามไปตอนจบ
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="relative z-10 text-center w-full max-w-3xl px-4 flex flex-col items-center justify-center h-screen animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-[120px] opacity-30"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-300 mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            เค้าขอโทษน้าา 🥺
          </h1>
          <h2 className="text-xl md:text-3xl text-pink-200 font-light mb-16 tracking-wide drop-shadow-md">
            เรากลับมาดีกันนะคะ คนเก่งของเค้า? 💕
          </h2>

          <div className="flex flex-row items-center justify-center gap-8 w-full h-32 relative">
            <button
              onClick={() => {
                setStep(3);
                setTimeout(() => setShowGallery(true), 1500);
              }}
              className="relative group bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-5 px-14 rounded-full shadow-[0_0_40px_rgba(244,114,182,0.6)] text-3xl transform transition-all duration-300 hover:scale-110 z-10 overflow-hidden"
              style={
                isMoved || escapeCount >= 7
                  ? {
                      transform: "scale(1.3)",
                      boxShadow: "0 0 60px rgba(244,114,182,0.8)",
                    }
                  : {}
              }
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <div className="flex items-center gap-3 relative z-10">
                <Smile size={36} />
                <span>ดีกันนะ!</span>
              </div>
            </button>
            {noBtnScale > 0 && (
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="bg-white/10 border border-white/20 text-white/70 font-medium py-4 px-8 rounded-full backdrop-blur-md transition-all duration-200 shadow-lg"
                style={{
                  position: isMoved ? "fixed" : "relative",
                  left: isMoved ? `${noBtnPosition.x}px` : "auto",
                  top: isMoved ? `${noBtnPosition.y}px` : "auto",
                  transform: `scale(${noBtnScale})`,
                  zIndex: 50,
                  cursor: escapeCount >= 4 ? "not-allowed" : "pointer",
                }}
              >
                {noBtnText}
              </button>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="relative z-10 w-full min-h-screen py-12 px-2 md:px-4 flex flex-col items-center animate-fade-in text-gray-800">
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}vw`,
                  top: `-10vh`,
                  backgroundColor: [
                    "#f472b6",
                    "#fbbf24",
                    "#60a5fa",
                    "#a78bfa",
                    "#ffffff",
                  ][Math.floor(Math.random() * 5)],
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="text-center mb-16 relative z-10 animate-slide-down">
            <div className="inline-block bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_60px_rgba(244,114,182,0.3)] border border-white/60">
              <div className="flex justify-center gap-4 mb-6">
                <Heart
                  className="text-rose-500 fill-rose-500 animate-bounce delay-75"
                  size={40}
                />
                <Heart
                  className="text-pink-500 fill-pink-500 animate-bounce scale-125"
                  size={56}
                />
                <Heart
                  className="text-rose-400 fill-rose-400 animate-bounce delay-150"
                  size={40}
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500 mb-4 tracking-tight">
                เย้! ดีใจที่สุดในโลก 🎉
              </h1>
              <p className="text-2xl md:text-4xl text-pink-700 font-bold mt-4 flex items-center justify-center gap-3">
                <Sparkles className="text-yellow-500" /> รักที่สู๊ดดดดดดดดดดด{" "}
                <Sparkles className="text-yellow-500" />
              </p>
            </div>
          </div>

          <div
            className={`w-full max-w-5xl mx-auto transition-all duration-1000 transform relative z-10 ${
              showGallery
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12 md:w-32 bg-pink-400"></div>
              <p className="text-pink-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base text-center">
                Our Grand Heart of Memories
              </p>
              <div className="h-px w-12 md:w-32 bg-pink-400"></div>
            </div>

            <div
              className="grid gap-1 md:gap-2 px-1 md:px-4 mx-auto w-full"
              style={{ gridTemplateColumns: "repeat(9, minmax(0, 1fr))" }}
            >
              {photos.map((src, index) => {
                const pos = heartPositions[index];
                return (
                  <div
                    key={index}
                    className="relative group cursor-pointer animate-pop-in"
                    style={{
                      gridColumnStart: pos.col,
                      gridRowStart: pos.row,
                      animationDelay: `${index * 80}ms`,
                      animationFillMode: "both",
                    }}
                    onClick={() => setSelectedPhoto(src)}
                  >
                    <div className="w-full aspect-square overflow-hidden bg-pink-100 rounded-md shadow-sm transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-20 border-2 border-white/70">
                      <img
                        src={`/${src}`}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                      <div className="hidden w-full h-full flex-col items-center justify-center text-pink-300">
                        <Heart className="w-8 h-8 opacity-50 mb-1 fill-current" />
                        <span className="text-[10px]">Photo {index + 1}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <img
            src={`/${selectedPhoto}`}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            onError={handleImageError}
          />
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float-particle { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-30px) translateX(20px); } }
        .animate-float-particle { animation: float-particle infinite ease-in-out; }
        @keyframes ken-burns { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-ken-burns { animation: ken-burns 6s linear infinite alternate; }
        @keyframes slide-up-fade { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-slide-up-fade { animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes confetti { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }
        .animate-confetti { animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-iteration-count: infinite; }
        @keyframes pop-in { 0% { opacity: 0; transform: scale(0.6) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-pop-in { opacity: 0; animation: pop-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes scale-up { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        .animate-shake { animation: shake 0.3s ease-in-out 2; }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s forwards; }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s forwards; }
        @keyframes slide-down { 0% { opacity: 0; transform: translateY(-40px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-slide-down { animation: slide-down 0.8s forwards; }
      `,
        }}
      />
    </div>
  );
}
