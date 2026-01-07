"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[10%] right-[5%] w-48 h-48 opacity-30 animate-robot-wave">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Robot head */}
          <rect
            x="60"
            y="30"
            width="80"
            height="70"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
          {/* Antenna */}
          <line
            x1="100"
            y1="30"
            x2="100"
            y2="10"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent animate-pulse"
          />
          <circle cx="100" cy="10" r="5" fill="currentColor" className="text-accent animate-pulse" />
          {/* Eyes */}
          <circle cx="80" cy="55" r="8" fill="currentColor" className="text-primary animate-blink" />
          <circle cx="120" cy="55" r="8" fill="currentColor" className="text-primary animate-blink" />
          {/* Mouth display */}
          <rect
            x="75"
            y="75"
            width="50"
            height="15"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
          <line x1="80" y1="82" x2="115" y2="82" stroke="currentColor" strokeWidth="2" className="text-accent" />
          {/* Body */}
          <rect
            x="50"
            y="110"
            width="100"
            height="60"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
          {/* Chest panel */}
          <rect
            x="70"
            y="125"
            width="60"
            height="30"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            opacity="0.5"
          />
          <circle cx="85" cy="140" r="3" fill="currentColor" className="text-primary animate-pulse" />
          <circle
            cx="100"
            cy="140"
            r="3"
            fill="currentColor"
            className="text-primary animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <circle
            cx="115"
            cy="140"
            r="3"
            fill="currentColor"
            className="text-primary animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          {/* Neck */}
          <rect
            x="85"
            y="100"
            width="30"
            height="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
          {/* Arms */}
          <g className="origin-[50px_130px] animate-robot-arm-left">
            <rect
              x="30"
              y="115"
              width="20"
              height="50"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent"
            />
            <circle cx="40" cy="165" r="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary" />
          </g>
          <g className="origin-[150px_130px] animate-robot-arm-right">
            <rect
              x="150"
              y="115"
              width="20"
              height="50"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent"
            />
            <circle
              cx="160"
              cy="165"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
          </g>
          {/* Legs */}
          <rect
            x="65"
            y="170"
            width="25"
            height="20"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
          <rect
            x="110"
            y="170"
            width="25"
            height="20"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="absolute bottom-[15%] left-[5%] w-40 h-40 opacity-25">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Big gear */}
          <g className="origin-center animate-spin-slow">
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-accent"
            />
            <circle
              cx="100"
              cy="100"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180
              const x1 = 100 + Math.cos(angle) * 35
              const y1 = 100 + Math.sin(angle) * 35
              const x2 = 100 + Math.cos(angle) * 45
              const y2 = 100 + Math.sin(angle) * 45
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="6" className="text-accent" />
                  <rect
                    x={x2 - 4}
                    y={y2 - 8}
                    width="8"
                    height="16"
                    rx="2"
                    fill="currentColor"
                    className="text-accent"
                    transform={`rotate(${i * 45}, ${x2}, ${y2})`}
                  />
                </g>
              )
            })}
          </g>
          {/* Small gear */}
          <g className="origin-[150px_150px] animate-spin-reverse">
            <circle
              cx="150"
              cy="150"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            <circle
              cx="150"
              cy="150"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
            />
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180
              const x1 = 150 + Math.cos(angle) * 20
              const y1 = 150 + Math.sin(angle) * 20
              const x2 = 150 + Math.cos(angle) * 28
              const y2 = 150 + Math.sin(angle) * 28
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-primary"
                  />
                  <rect
                    x={x2 - 3}
                    y={y2 - 6}
                    width="6"
                    height="12"
                    rx="1"
                    fill="currentColor"
                    className="text-primary"
                    transform={`rotate(${i * 60}, ${x2}, ${y2})`}
                  />
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <div className="absolute top-[45%] right-[8%] w-56 h-56 opacity-30">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Base */}
          <rect
            x="80"
            y="150"
            width="40"
            height="30"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent"
          />
          {/* Joint 1 */}
          <circle cx="100" cy="150" r="8" fill="currentColor" className="text-primary" />
          {/* Arm segment 1 */}
          <g className="origin-[100px_150px] animate-robot-segment-1">
            <rect
              x="95"
              y="90"
              width="10"
              height="60"
              rx="3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent"
            />
            {/* Joint 2 */}
            <circle cx="100" cy="90" r="8" fill="currentColor" className="text-primary" />
            {/* Arm segment 2 */}
            <g className="origin-[100px_90px] animate-robot-segment-2">
              <rect
                x="95"
                y="40"
                width="10"
                height="50"
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-accent"
              />
              {/* End effector */}
              <g className="animate-gripper">
                <circle cx="100" cy="40" r="6" fill="currentColor" className="text-primary" />
                <line x1="95" y1="30" x2="90" y2="20" stroke="currentColor" strokeWidth="3" className="text-accent" />
                <line x1="105" y1="30" x2="110" y2="20" stroke="currentColor" strokeWidth="3" className="text-accent" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="absolute bottom-[10%] right-[10%] w-36 h-36 opacity-25">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Circuit nodes */}
          <circle cx="40" cy="40" r="8" fill="currentColor" className="text-primary animate-pulse" />
          <circle
            cx="160"
            cy="40"
            r="8"
            fill="currentColor"
            className="text-primary animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <circle
            cx="40"
            cy="160"
            r="8"
            fill="currentColor"
            className="text-primary animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <circle
            cx="160"
            cy="160"
            r="8"
            fill="currentColor"
            className="text-primary animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <circle
            cx="100"
            cy="100"
            r="12"
            fill="currentColor"
            className="text-accent animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          {/* Circuit paths with animated signal */}
          <g className="animate-circuit-flow">
            <line
              x1="40"
              y1="40"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              strokeDasharray="4 4"
            />
            <line
              x1="160"
              y1="40"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              strokeDasharray="4 4"
            />
            <line
              x1="40"
              y1="160"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              strokeDasharray="4 4"
            />
            <line
              x1="160"
              y1="160"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              strokeDasharray="4 4"
            />
          </g>
          {/* Microchip */}
          <rect
            x="85"
            y="85"
            width="30"
            height="30"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
          <line x1="85" y1="95" x2="75" y2="95" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <line x1="85" y1="105" x2="75" y2="105" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <line x1="115" y1="95" x2="125" y2="95" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <line x1="115" y1="105" x2="125" y2="105" stroke="currentColor" strokeWidth="2" className="text-primary" />
        </svg>
      </div>

      <div className="absolute top-[20%] left-[10%] w-44 h-32 opacity-30">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <g key={i} className="animate-data-stream" style={{ animationDelay: `${i * 0.2}s` }}>
              <rect
                x={10 + i * 40}
                y="30"
                width="25"
                height="8"
                rx="2"
                fill="currentColor"
                className="text-accent"
                opacity="0.6"
              />
              <rect
                x={10 + i * 40}
                y="45"
                width="35"
                height="8"
                rx="2"
                fill="currentColor"
                className="text-primary"
                opacity="0.6"
              />
              <rect
                x={10 + i * 40}
                y="60"
                width="20"
                height="8"
                rx="2"
                fill="currentColor"
                className="text-accent"
                opacity="0.6"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
