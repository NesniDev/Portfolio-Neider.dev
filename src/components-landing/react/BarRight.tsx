import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────── */
/* TYPES & HELPERS                              */
/* ───────────────────────────────────────────── */

type SysInfo = {
  sessionTime?: string; timezone?: string; locale?: string;
  browser?: string; os?: string; device?: string;
  viewport?: string; colorScheme?: string;
  dpr?: string; screen?: string; heap?: string;
};

function pad(n: number): string { return String(n).padStart(2, "0"); }

function formatUptime(ms: number): string {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

function detectBrowser(ua: string): string {
  if (/Edg\//.test(ua)) return "Microsoft Edge";
  if (/OPR\//.test(ua)) return "Opera";
  if (/Chrome\//.test(ua) && /Safari\//.test(ua)) return "Chrome";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Safari\//.test(ua) && !/Chrome/.test(ua)) return "Safari";
  return "Unknown";
}

function detectOS(ua: string): string {
  if (/Windows NT 10/.test(ua)) return "Windows 11/10";
  if (/Windows NT/.test(ua)) return "Windows";
  if (/Macintosh/.test(ua)) return "macOS";
  if (/iPhone|iPad/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Linux/.test(ua)) return "Linux";
  return "Unknown";
}

function detectDevice(ua: string): string {
  if (/Mobi|Android|iPhone/.test(ua)) return "Mobile";
  if (/iPad|Tablet/.test(ua)) return "Tablet";
  return "Desktop";
}

/* ───────────────────────────────────────────── */
/* HOOKS                                        */
/* ───────────────────────────────────────────── */

function useSysInfo(): SysInfo {
  const [info, setInfo] = useState<SysInfo>({});
  useEffect(() => {
    const ua = navigator.userAgent;
    const perf = (performance as any)?.memory;
    const now = new Date();
    setInfo({
      sessionTime: now.toLocaleTimeString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: navigator.language || "—",
      browser: detectBrowser(ua),
      os: detectOS(ua),
      device: detectDevice(ua),
      viewport: `${window.innerWidth} × ${window.innerHeight}px`,
      colorScheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      dpr: `${window.devicePixelRatio}x`,
      screen: `${screen.width}×${screen.height}`,
      heap: perf ? `${Math.round(perf.usedJSHeapSize / 1048576)}MB` : "—",
    });
  }, []);
  return info;
}

/* ───────────────────────────────────────────── */
/* SUB-COMPONENTS                               */
/* ───────────────────────────────────────────── */

function Section({ children, last = false }: { children: any; last?: boolean }) {
  return <div className={`px-5 py-4 ${!last ? "border-b border-neutral-800" : ""}`}>{children}</div>;
}

function SectionHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 mb-3">
      <i className={`ti ti-${icon}`} />
      <span>{label}</span>
      <div className="flex-1 h-px bg-neutral-800" />
    </div>
  );
}

function Row({ icon, label, value }: { icon: string; label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between mb-[7px] text-[12px] text-neutral-400">
      <span className="flex items-center gap-[7px]">
        <i className={`ti ti-${icon}`} />
        {label}
      </span>
      <span className="font-medium text-neutral-200">{value || "—"}</span>
    </div>
  );
}

function EntropyCard({ label, value }: { label: string; value?: string }) {
  return (
    <div className="border border-neutral-700 rounded-lg p-3 bg-neutral-950/50">
      <div className="text-[10px] uppercase tracking-[0.08em] text-neutral-500 mb-1">{label}</div>
      <div className="text-[14px] font-bold text-neutral-200">{value || "—"}</div>
    </div>
  );
}

function Cursor() {
  const [on, setOn] = useState<boolean>(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 550);
    return () => clearInterval(id);
  }, []);
  return <div className="ml-auto w-1 h-5" style={{ background: on ? "#28C840" : "transparent" }} />;
}

/* ───────────────────────────────────────────── */
/* MAIN COMPONENT                               */
/* ───────────────────────────────────────────── */

export const SystemMonitor = () => {
  const startTime = useRef<number>(Date.now());
  const [uptime, setUptime] = useState<string>("00:00:00");
  const info = useSysInfo();

  useEffect(() => {
    const id = setInterval(() => setUptime(formatUptime(Date.now() - startTime.current)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="font-mono h-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden max-w-[520px] mx-auto shadow-2xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-neutral-800 bg-neutral-950/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[12px] ml-1 tracking-tight text-neutral-300">system.panel — engineer view</span>
        <Cursor />
      </div>

      <Section>
        <SectionHeader icon="clock" label="session uptime" />
        <div className="text-[26px] font-bold tracking-tighter text-[#28C840] text-center pt-2 pb-1">{uptime}</div>
        <div className="text-[9px] text-center tracking-widest uppercase mb-3 text-neutral-600">since page load</div>
        <Row icon="calendar" label="session started" value={info.sessionTime} />
        <Row icon="map-pin" label="timezone" value={info.timezone} />
      </Section>

      <Section>
        <SectionHeader icon="device-desktop" label="environment" />
        <Row icon="browser" label="browser" value={info.browser} />
        <Row icon="brand-windows" label="OS" value={info.os} />
        <Row icon="device-mobile" label="device" value={info.device} />
        <Row icon="arrows-maximize" label="viewport" value={info.viewport} />
        <Row icon="color-swatch" label="theme" value={info.colorScheme} />
      </Section>

      <Section last>
        <SectionHeader icon="chart-bar" label="display & perf" />
        <div className="grid grid-cols-3 gap-3">
          <EntropyCard label="DPR" value={info.dpr} />
          <EntropyCard label="Screen" value={info.screen} />
          <EntropyCard label="JS Heap" value={info.heap} />
        </div>
      </Section>
    </motion.div>
  );
};