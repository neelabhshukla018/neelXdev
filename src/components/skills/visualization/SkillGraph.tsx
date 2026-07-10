// src/components/skills/visualization/SkillGraph.tsx

"use client";

/**
 * ==========================================================
 * SKILL GRAPH
 * ==========================================================
 * Interactive Skill Network
 *
 * PART 1
 * - Imports
 * - Background
 * - Zoom / Pan
 * - Toolbar
 * - Canvas
 */

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  Minus,
  Plus,
  Maximize2,
  Move,
  Grid3X3,
} from "lucide-react";

import { useSkillGraph } from "../hooks/useSkillGraph";

import SkillNode from "./SkillNode";
import SkillConnection from "./SkillConnection";

/* ==========================================================
   CONSTANTS
========================================================== */

const GRID_SIZE = 40;

const MIN_ZOOM = 0.4;

const MAX_ZOOM = 2.5;

/* ==========================================================
   COMPONENT
========================================================== */

export default function SkillGraph() {
  const {
    nodes,
    edges,

    zoom,
    pan,

    zoomIn,
    zoomOut,
    resetZoom,

    moveGraph,

    selectSkill,
    hoverSkill,

    hoveredSkillId,
    selectedSkillId,
  } = useSkillGraph();

  /* ======================================================
     REFS
  ====================================================== */

  const containerRef =
    useRef<HTMLDivElement>(null);

  const svgRef =
    useRef<SVGSVGElement>(null);

  /* ======================================================
     LOCAL STATE
  ====================================================== */

  const [isPanning, setIsPanning] =
    useState(false);

  const [lastMouse, setLastMouse] =
    useState({
      x: 0,
      y: 0,
    });

  /* ======================================================
     WHEEL ZOOM
  ====================================================== */

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) return;

    const handleWheel = (
      e: WheelEvent
    ) => {
      e.preventDefault();

      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    };

    container.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () =>
      container.removeEventListener(
        "wheel",
        handleWheel
      );
  }, [zoomIn, zoomOut]);

  /* ======================================================
     PAN START
  ====================================================== */

  const handleMouseDown = (
    e: React.MouseEvent
  ) => {
    if (e.button !== 1) return;

    setIsPanning(true);

    setLastMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  /* ======================================================
     PAN MOVE
  ====================================================== */

  const handleMouseMove = (
    e: React.MouseEvent
  ) => {
    if (!isPanning) return;

    const dx =
      e.clientX - lastMouse.x;

    const dy =
      e.clientY - lastMouse.y;

    moveGraph(dx, dy);

    setLastMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  /* ======================================================
     PAN END
  ====================================================== */

  const stopPanning = () => {
    setIsPanning(false);
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-[#1E1E1E]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopPanning}
      onMouseLeave={stopPanning}
    >
      {/* ==================================================
          GRID BACKGROUND
      =================================================== */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg,#ffffff 1px,transparent 1px)
          `,
        }}
      />

      {/* ==================================================
          TOOLBAR
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="absolute right-5 top-5 z-30 flex flex-col gap-2 rounded-xl border border-[#313131] bg-[#252526]/90 p-2 backdrop-blur"
      >
        <ToolbarButton
          icon={Plus}
          onClick={zoomIn}
          label="Zoom In"
        />

        <ToolbarButton
          icon={Minus}
          onClick={zoomOut}
          label="Zoom Out"
        />

        <ToolbarButton
          icon={Maximize2}
          onClick={resetZoom}
          label="Reset View"
        />

        <ToolbarButton
          icon={Move}
          label="Pan"
        />

        <ToolbarButton
          icon={Grid3X3}
          label="Grid"
        />
      </motion.div>

      {/* ==================================================
          ZOOM INFO
      =================================================== */}

      <div className="absolute bottom-5 left-5 z-20 rounded-lg border border-[#303030] bg-[#252526]/90 px-3 py-2 text-xs text-[#CFCFCF] backdrop-blur">
        Zoom {(zoom * 100).toFixed(0)}%
      </div>

      {/* ==================================================
          SVG CANVAS
      =================================================== */}

      <svg
        ref={svgRef}
        className="h-full w-full"
      >
        <g
          transform={`
            translate(${pan.x} ${pan.y})
            scale(${zoom})
          `}
        >
          {/* ================================================
              PART 2
              SVG Filters
              Connections
          ================================================= */}

                    {/* ================================================
              SVG DEFINITIONS
          ================================================= */}

          <defs>
            {/* -----------------------------
                Active Connection Glow
            ------------------------------ */}

            <filter
              id="connectionGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* -----------------------------
                Node Glow
            ------------------------------ */}

            <filter
              id="nodeGlow"
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur
                stdDeviation="8"
                result="coloredBlur"
              />

              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* -----------------------------
                Animated Gradient
            ------------------------------ */}

            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#3794FF"
              >
                <animate
                  attributeName="stop-color"
                  values="#3794FF;#4FC3F7;#3794FF"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>

              <stop
                offset="100%"
                stopColor="#8B5CF6"
              >
                <animate
                  attributeName="stop-color"
                  values="#8B5CF6;#3794FF;#8B5CF6"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* -----------------------------
                Node Pulse Gradient
            ------------------------------ */}

            <radialGradient id="nodeGradient">
              <stop
                offset="0%"
                stopColor="#FFFFFF"
                stopOpacity={0.95}
              />

              <stop
                offset="100%"
                stopColor="#3794FF"
                stopOpacity={0}
              />
            </radialGradient>
          </defs>

          {/* ================================================
              CONNECTIONS
          ================================================= */}

          {edges.map((edge) => {
            const from = nodes.find(
              (node) => node.id === edge.from
            );

            const to = nodes.find(
              (node) => node.id === edge.to
            );

            if (!from || !to) return null;

            const active =
              selectedSkillId === from.id ||
              selectedSkillId === to.id;

            const highlighted =
              hoveredSkillId === from.id ||
              hoveredSkillId === to.id;

            return (
              <SkillConnection
                key={edge.id}
                from={from.position}
                to={to.position}
                strength={edge.strength}
                active={active}
                highlighted={highlighted}
                animated
                color={
                  highlighted
                    ? from.color
                    : "#5A5A5A"
                }
              />
            );
          })}

          {/* ================================================
              CONNECTION LABELS
          ================================================= */}

          {edges.map((edge) => {
            const from = nodes.find(
              (node) => node.id === edge.from
            );

            const to = nodes.find(
              (node) => node.id === edge.to
            );

            if (!from || !to) return null;

            const x =
              (from.position.x +
                to.position.x) /
              2;

            const y =
              (from.position.y +
                to.position.y) /
              2;

            return (
              <g key={`${edge.id}-label`}>
                <circle
                  cx={x}
                  cy={y}
                  r={10}
                  fill="#252526"
                  opacity={0.85}
                />

                <text
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  className="fill-[#AFAFAF] text-[9px]"
                >
                  {edge.strength}
                </text>
              </g>
            );
          })}

          {/* ================================================
              PART 3
              Skill Nodes
          ================================================= */}

                    {/* ================================================
              SKILL NODES
          ================================================= */}

          {nodes.map((node) => {
            const connected =
              edges.some(
                (edge) =>
                  edge.from === selectedSkillId &&
                  edge.to === node.id
              ) ||
              edges.some(
                (edge) =>
                  edge.to === selectedSkillId &&
                  edge.from === node.id
              );

            return (
              <SkillNode
                key={node.id}
                skill={node}
                selected={
                  node.id === selectedSkillId
                }
                hovered={
                  node.id === hoveredSkillId
                }
                connected={connected}
                scale={
                  node.id === selectedSkillId
                    ? 1.08
                    : node.id === hoveredSkillId
                    ? 1.04
                    : 1
                }
                onClick={() =>
                  selectSkill(node.id)
                }
                onHover={hoverSkill}
              />
            );
          })}

          {/* ================================================
              CENTER PULSE
          ================================================= */}

          {selectedSkillId && (
            (() => {
              const selected =
                nodes.find(
                  (node) =>
                    node.id === selectedSkillId
                );

              if (!selected) return null;

              return (
                <motion.circle
                  cx={selected.position.x}
                  cy={selected.position.y}
                  r={48}
                  fill="url(#nodeGradient)"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })()
          )}

          {/* ================================================
              HOVER RING
          ================================================= */}

          {hoveredSkillId && (
            (() => {
              const hovered =
                nodes.find(
                  (node) =>
                    node.id === hoveredSkillId
                );

              if (!hovered) return null;

              return (
                <motion.circle
                  cx={hovered.position.x}
                  cy={hovered.position.y}
                  r={42}
                  fill="none"
                  stroke={hovered.color}
                  strokeWidth={2}
                  strokeDasharray="6 6"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: `${hovered.position.x}px ${hovered.position.y}px`,
                  }}
                />
              );
            })()
          )}

          {/* ================================================
              NODE COORDINATES (DEV)
          ================================================= */}

          {process.env.NODE_ENV ===
            "development" &&
            nodes.map((node) => (
              <text
                key={`${node.id}-coords`}
                x={node.position.x}
                y={node.position.y + 82}
                textAnchor="middle"
                className="fill-[#5A5A5A] text-[8px]"
              >
                ({node.position.x},{" "}
                {node.position.y})
              </text>
            ))}

          {/* ================================================
              PART 4
              Controls
              Legend
              Closing Tags
          ================================================= */}

                    {/* ================================================
              END GRAPH GROUP
          ================================================= */}

        </g>
      </svg>

      {/* ==================================================
          LEGEND
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="absolute right-5 bottom-5 z-30 w-64 rounded-xl border border-[#313131] bg-[#252526]/95 p-4 backdrop-blur"
      >
        <h3 className="mb-4 text-sm font-semibold text-white">
          Skill Categories
        </h3>

        <div className="space-y-2">
          {[
            {
              name: "Frontend",
              color: "#61DAFB",
            },
            {
              name: "Backend",
              color: "#68A063",
            },
            {
              name: "Database",
              color: "#336791",
            },
            {
              name: "Deployment",
              color: "#000000",
            },
            {
              name: "API",
              color: "#FF9800",
            },
            {
              name: "UI / UX",
              color: "#E91E63",
            },
            {
              name: "AI",
              color: "#8B5CF6",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="text-sm text-[#D4D4D4]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================
            GRAPH STATS
        ========================================== */}

        <div className="mt-5 border-t border-[#343434] pt-4">
          <div className="flex justify-between text-xs text-[#A0A0A0]">
            <span>Total Skills</span>

            <span>{nodes.length}</span>
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#A0A0A0]">
            <span>Connections</span>

            <span>{edges.length}</span>
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#A0A0A0]">
            <span>Zoom</span>

            <span>
              {(zoom * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* ==================================================
          MINI MAP (Placeholder)
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="absolute bottom-5 left-28 z-30 flex h-28 w-44 items-center justify-center rounded-lg border border-[#313131] bg-[#252526]/90 text-xs text-[#8F8F8F] backdrop-blur"
      >
        Mini Map
        <br />
        (Coming Soon)
      </motion.div>
    </div>
  );
}

/* ==========================================================
   TOOLBAR BUTTON
========================================================== */

interface ToolbarButtonProps {
  icon: React.ElementType;

  label: string;

  onClick?: () => void;
}

function ToolbarButton({
  icon: Icon,
  label,
  onClick,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-[#C5C5C5] transition-all duration-200 hover:bg-[#37373D] hover:text-white"
    >
      <Icon size={18} />
    </button>
  );
}