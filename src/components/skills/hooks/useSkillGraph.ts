// src/components/skills/hooks/useSkillGraph.ts

"use client";

/**
 * ==========================================================
 * USE SKILL GRAPH
 * ==========================================================
 * Controls the interactive skill graph visualization.
 */

import { useMemo, useState } from "react";

import { useSkills } from "../context/SkillsContext";

import { Point } from "../types/skill";

export function useSkillGraph() {
  const {
    skills,
    selectedSkill,
    openTab,
  } = useSkills();

  /* ======================================================
   * GRAPH STATE
   * ==================================================== */

  const [zoom, setZoom] = useState(1);

  const [pan, setPan] = useState<Point>({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] =
    useState(false);

  const [hoveredSkillId, setHoveredSkillId] =
    useState<string | null>(null);

  const [selectedSkillId, setSelectedSkillId] =
    useState<string | null>(
      selectedSkill?.id ?? null
    );

  /* ======================================================
   * GRAPH NODES
   * ==================================================== */

  const nodes = useMemo(() => {
    return skills.map((skill) => ({
      ...skill,

      selected:
        skill.id ===
        (selectedSkillId ?? selectedSkill?.id),

      hovered:
        skill.id === hoveredSkillId,
    }));
  }, [
    skills,
    hoveredSkillId,
    selectedSkill,
    selectedSkillId,
  ]);

  /* ======================================================
   * GRAPH EDGES
   * ==================================================== */

  const edges = useMemo(() => {
    return skills.flatMap((skill) =>
      skill.connections.map((connection) => ({
        id: `${skill.id}-${connection.target}`,

        from: skill.id,

        to: connection.target,

        strength: connection.strength,
      }))
    );
  }, [skills]);

  /* ======================================================
   * HELPERS
   * ==================================================== */

  const hoveredSkill = useMemo(() => {
    return (
      skills.find(
        (skill) => skill.id === hoveredSkillId
      ) ?? null
    );
  }, [skills, hoveredSkillId]);

  const graphCenter = useMemo(
    () => ({
      x: 0,
      y: 0,
    }),
    []
  );

  /* ======================================================
   * ZOOM
   * ==================================================== */

  const zoomIn = () => {
    setZoom((prev) =>
      Math.min(prev + 0.1, 2.5)
    );
  };

  const zoomOut = () => {
    setZoom((prev) =>
      Math.max(prev - 0.1, 0.5)
    );
  };

  const resetZoom = () => {
    setZoom(1);

    setPan({
      x: 0,
      y: 0,
    });
  };

  /* ======================================================
   * PAN
   * ==================================================== */

  const moveGraph = (
    dx: number,
    dy: number
  ) => {
    setPan((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  /* ======================================================
   * NODE EVENTS
   * ==================================================== */

  const selectSkill = (skillId: string) => {
    setSelectedSkillId(skillId);

    openTab(skillId);
  };

  const hoverSkill = (
    skillId: string | null
  ) => {
    setHoveredSkillId(skillId);
  };

  /* ======================================================
   * CONNECTIONS
   * ==================================================== */

  const getConnections = (
    skillId: string
  ) => {
    const skill = skills.find(
      (s) => s.id === skillId
    );

    return skill?.connections ?? [];
  };

  const connectedSkills = useMemo(() => {
    if (!selectedSkill) return [];

    return getConnections(selectedSkill.id)
      .map((connection) =>
        skills.find(
          (skill) =>
            skill.id === connection.target
        )
      )
      .filter(Boolean);
  }, [selectedSkill, skills]);

  /* ======================================================
   * GRAPH BOUNDS
   * ==================================================== */

  const bounds = useMemo(() => {
    const xs = skills.map(
      (skill) => skill.position.x
    );

    const ys = skills.map(
      (skill) => skill.position.y
    );

    return {
      minX: Math.min(...xs),

      maxX: Math.max(...xs),

      minY: Math.min(...ys),

      maxY: Math.max(...ys),
    };
  }, [skills]);

  /* ======================================================
   * RETURN
   * ==================================================== */

  return {
    nodes,

    edges,

    zoom,

    pan,

    bounds,

    graphCenter,

    dragging,

    hoveredSkill,

    hoveredSkillId,

    selectedSkillId,

    connectedSkills,

    setDragging,

    zoomIn,

    zoomOut,

    resetZoom,

    moveGraph,

    selectSkill,

    hoverSkill,

    getConnections,
  };
}