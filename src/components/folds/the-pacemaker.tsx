 "use client";

import * as React from "react";
import Image from "next/image";
import { Pause } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function ThePacemakerSection() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const sourceRef = React.useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const audioSrc = encodeURI("/Audio_Elton-Site.mp3");

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      console.error("Falha ao carregar/reproduzir o áudio de prévia.");
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const setupAnalyserIfNeeded = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioContextRef.current) {
      const AudioContextCtor =
        window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioContextCtor();
    }

    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    if (!analyserRef.current) {
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256; // mais barras com custo baixo
      analyser.smoothingTimeConstant = 0.85;
      analyserRef.current = analyser;
    }

    if (!sourceRef.current) {
      sourceRef.current = audioContext.createMediaElementSource(audio);
      sourceRef.current.connect(analyserRef.current!);
      analyserRef.current!.connect(audioContext.destination);
    }
  };

  const stopVisualizer = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const drawVisualizerFrame = React.useCallback(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 302;
    const cssHeight = canvas.clientHeight || 50;
    const nextWidth = Math.max(1, Math.floor(cssWidth * dpr));
    const nextHeight = Math.max(1, Math.floor(cssHeight * dpr));

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }

    const width = canvas.width;
    const height = canvas.height;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, width, height);

    const barCount = 56; // visual parecido com a referência
    const gap = Math.max(1, Math.floor(2 * dpr));
    const barWidth = Math.max(1, Math.floor((width - gap * (barCount - 1)) / barCount));

    const maxBarHeight = height * 0.9;
    const centerY = height / 2;

    for (let i = 0; i < barCount; i++) {
      const dataIndex = Math.floor((i / barCount) * bufferLength);
      const v = dataArray[dataIndex] / 255; // 0..1

      const normalized = isPlaying ? Math.max(0.08, v) : 0.12;
      const barHeight = normalized * maxBarHeight;

      const x = i * (barWidth + gap);
      const y = centerY - barHeight / 2;

      // dourado -> verde, com opacidade reduzida quando pausado
      const hue = 44 - i * 0.35; // ~dourado para verde
      const alpha = isPlaying ? 0.95 : 0.35;
      ctx.fillStyle = `hsla(${hue}, 85%, 55%, ${alpha})`;

      const radius = Math.max(1, Math.floor(3 * dpr));
      // retângulo arredondado
      ctx.beginPath();
      const r = Math.min(radius, barWidth / 2, barHeight / 2);
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + barWidth, y, x + barWidth, y + barHeight, r);
      ctx.arcTo(x + barWidth, y + barHeight, x, y + barHeight, r);
      ctx.arcTo(x, y + barHeight, x, y, r);
      ctx.arcTo(x, y, x + barWidth, y, r);
      ctx.closePath();
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(drawVisualizerFrame);
  }, [isPlaying]);

  const startVisualizer = React.useCallback(() => {
    stopVisualizer();
    rafRef.current = requestAnimationFrame(drawVisualizerFrame);
  }, [drawVisualizerFrame]);

  React.useEffect(() => {
    // desenha um frame "idle" assim que montar
    const id = window.requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      setupAnalyserIfNeeded();
      drawVisualizerFrame();
      stopVisualizer();
    });
    return () => window.cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isPlaying) startVisualizer();
    else stopVisualizer();
  }, [isPlaying, startVisualizer]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      setupAnalyserIfNeeded();
      if (audioContextRef.current?.state === "suspended") {
        await audioContextRef.current.resume();
      }

      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      setIsPlaying(false);
      console.error("Não foi possível iniciar o áudio.", error);
    }
  };

  return (
    <section
      className="w-full bg-verde-eucalipto"
      aria-labelledby="marca-passos-heading"
    >
      <div className="container py-24 flex flex-col gap-10 items-center justify-center text-center">
        <Reveal>
          <h2
            id="marca-passos-heading"
            className="text-4xl md:text-6xl text-dourado uppercase"
          >
            O Marca Passos
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p
            className="text-areia-claro text-[18px]/[32px] font-light font-mulish"
            aria-describedby="marca-passos-heading"
          >
            <span className="font-bold">
              O Marca Passos é o aplicativo da Aliança Divergente, a principal
              ferramenta do Aliado
            </span>{" "}
            para definir metas, detalhar seu Sonho Grande e registrar
            diariamente seus PDAs (Percepção, Decisão e Ação). Ali, é possível
            acessar Protocolos, vídeos, áudios e ferramentas exclusivas para
            combater o medo, a Dependência Emocional e sustentar o avanço com
            clareza e constância ao longo da jornada.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <button
            type="button"
            className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 font-bold sm:text-base text-xs mt-6 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg shadow-dourado/30"
            aria-label="Se tornar aliado da AlianÇõa Divergente"
          >
            <Link
              href="https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja Aliado
            </Link>
          </button>
        </Reveal>
      </div>
      <Reveal delay={260}>
        <div
          className="w-full flex items-center justify-center bg-[url('/images/bg-marca-passos.webp')] bg-center bg-no-repeat px-4"
          role="presentation"
          aria-hidden="true"
        >
          <Image
            src="/images/celular-marca-passos.png"
            alt=""
            width={352}
            height={713}
            quality={100}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes="(max-width: 768px) 260px, 352px"
            aria-hidden="true"
            className="drop-shadow-2xl transition-transform duration-700 ease-out hover:-translate-y-3 transform-gpu"
          />
        </div>
      </Reveal>
      <div className="container py-24 flex lg:flex-row flex-col gap-20 items-start justify-center">
        <Reveal className="lg:max-w-[466px] h-[444px] w-full" delay={340}>
          <article
            className="bg-[#0D3D41] p-6 flex flex-col items-center justify-center h-full"
            aria-labelledby="audio-preview-heading"
          >
            <div className="flex items-start gap-6 w-full">
              <Image
                src="/images/elton-euler.png"
                alt="Retrato de Elton Euler"
                width={186}
                height={260}
                loading="lazy"
                quality={100}
                decoding="async"
                fetchPriority="low"
                className="max-w-[186px] min-w-[120px] w-auto h-auto object-cover"
              />
              <div className="flex flex-col gap-2 text-dourado max-w-[163px] w-full">
                <p className="text-[10px]/[16px] font-mulish">Elton Euler</p>
                <p
                  id="audio-preview-heading"
                  className="text-[26px]/[38px] font-bold"
                >
                  Porque <br />
                  você não foi mais longe?
                </p>
                <p className="text-white text-[10px]/[16px] font-light font-mulish">
                  Ouça e experimente esta prévia do áudio diário.
                </p>
              </div>
            </div>
            <div
              className="w-full flex items-center justify-center gap-2 mt-4"
              role="group"
              aria-label="Controles do áudio diário"
            >
              <canvas
                ref={canvasRef}
                className="max-w-[302px] min-w-[120px] w-full h-[50px]"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={toggleAudio}
                aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
                aria-pressed={isPlaying}
                className="max-w-[52px] min-w-[42px] w-auto h-auto cursor-pointer transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-full"
              >
                {isPlaying ? (
                  <span className="w-[52px] h-[52px] rounded-full bg-dourado flex items-center justify-center">
                    <Pause className="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                ) : (
                  <Image
                    src="/images/play-button.png"
                    alt=""
                    width={52}
                    height={52}
                    quality={100}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                )}
              </button>

              <audio ref={audioRef} src={audioSrc} preload="none" />
            </div>
          </article>
        </Reveal>
        <Reveal className="w-full flex-1 flex flex-col gap-4" delay={420}>
          <div className="w-full flex-1 flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl/[80px] text-dourado uppercase">
              Dê play na <br /> sua Permissão
            </h2>
            <p className="text-areia-claro text-[18px]/[32px] font-light font-mulish">
              Dentro do Marca Passos, o Aliado tem acesso ao Áudio Diário.{" "}
              <span className="font-bold">
                Ele provoca percepção, corrige rota, sustenta postura e mantém o
                comprometimento vivo todos os dias.
              </span>{" "}
              Curto, direto e profundo, é o lembrete diário do caminho e o
              desafio constante de não parar. Para experimentar na prática, ouça
              agora uma prévia do que espera por você dentro da Aliança.
            </p>
            <button
              type="button"
              className="hover:bg-verde-folha/60 transition-colors duration-300 text-dourado px-2 py-3 font-bold sm:text-base text-xs mt-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Reproduzir prévia do áudio diário"
              onClick={toggleAudio}
            >
              Clique no play e experimente um ÁUDIO DIÁRIO.
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
