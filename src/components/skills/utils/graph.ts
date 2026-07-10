// src/components/skills/utils/graph.ts

/**
 * ==========================================================
 * GRAPH UTILS
 * ==========================================================
 * Utility functions for Skill Graph layout,
 * positioning, connections and calculations.
 */

import { Skill } from "../types/skill";

/* ==========================================================
 * TYPES
 * ==========================================================
 */

export interface GraphPoint {
  x: number;
  y: number;
}

export interface GraphNode {
  id: string;

  skill: Skill;

  position: GraphPoint;

  radius: number;
}

export interface GraphEdge {
  id: string;

  source: string;

  target: string;

  strength: number;
}

export interface SkillGraph {
  nodes: GraphNode[];

  edges: GraphEdge[];
}

/* ==========================================================
 * CONSTANTS
 * ==========================================================
 */

const CENTER_X = 500;

const CENTER_Y = 350;

const RADIUS = 240;

/* ==========================================================
 * CIRCULAR LAYOUT
 * ==========================================================
 */

export function createCircularLayout(
  skills: Skill[]
): GraphNode[] {
  const total = skills.length;

  return skills.map(
    (skill, index) => {
      const angle =
        (index / total) *
        Math.PI *
        2;

      return {
        id: skill.id,

        skill,

        position: {
          x:
            CENTER_X +
            Math.cos(angle) *
              RADIUS,

          y:
            CENTER_Y +
            Math.sin(angle) *
              RADIUS,
        },

        radius: getNodeSize(skill),
      };
    }
  );
}

/* ==========================================================
 * FORCE STYLE POSITION
 * ==========================================================
 */

export function createRadialPosition(
  index: number,
  total: number,
  radius = RADIUS
): GraphPoint {
  const angle =
    (index / total) *
    Math.PI *
    2;

  return {
    x:
      CENTER_X +
      Math.cos(angle) *
        radius,

    y:
      CENTER_Y +
      Math.sin(angle) *
        radius,
  };
}

/* ==========================================================
 * NODE SIZE
 * ==========================================================
 */

export function getNodeSize(
  skill: Skill
): number {
  const progress =
    (
      skill.metrics.proficiency +
      skill.metrics.confidence
    ) / 2;

  return Math.max(
    32,
    Math.min(
      70,
      progress / 1.5
    )
  );
}

/* ==========================================================
 * DISTANCE
 * ==========================================================
 */

export function distance(
  a: GraphPoint,
  b: GraphPoint
): number {
  return Math.sqrt(
    Math.pow(
      b.x - a.x,
      2
    ) +
      Math.pow(
        b.y - a.y,
        2
      )
  );
}

/* ==========================================================
 * CONNECTION BUILDER
 * ==========================================================
 */

export function buildConnections(
  skills: Skill[]
): GraphEdge[] {
  const edges: GraphEdge[] = [];

  skills.forEach((skill) => {
    skill.connections.forEach(
      (connection) => {
        const exists =
          skills.find(
            (item) =>
              item.id ===
              connection.target
          );

        if (!exists) return;

        edges.push({
          id:
            `${skill.id}-${connection.target}`,

          source:
            skill.id,

          target:
            connection.target,

          strength:
            connection.strength,
        });
      }
    );
  });

  return removeDuplicateEdges(
    edges
  );
}

/* ==========================================================
 * REMOVE DUPLICATES
 * ==========================================================
 */

function removeDuplicateEdges(
  edges: GraphEdge[]
): GraphEdge[] {
  const map =
    new Map<string, GraphEdge>();

  edges.forEach((edge) => {
    const key =
      [
        edge.source,
        edge.target,
      ]
        .sort()
        .join("-");

    if (!map.has(key)) {
      map.set(
        key,
        edge
      );
    }
  });

  return Array.from(
    map.values()
  );
}

/* ==========================================================
 * BUILD GRAPH
 * ==========================================================
 */

export function buildGraph(
  skills: Skill[]
): SkillGraph {
  return {
    nodes:
      createCircularLayout(
        skills
      ),

    edges:
      buildConnections(
        skills
      ),
  };
}

/* ==========================================================
 * FIND NODE
 * ==========================================================
 */

export function findNode(
  nodes: GraphNode[],
  id: string
): GraphNode | undefined {
  return nodes.find(
    (node) =>
      node.id === id
  );
}

/* ==========================================================
 * CONNECTED NODES
 * ==========================================================
 */

export function getConnectedNodes(
  graph: SkillGraph,
  nodeId: string
): GraphNode[] {
  const ids =
    graph.edges
      .filter(
        (edge) =>
          edge.source === nodeId ||
          edge.target === nodeId
      )
      .map(
        (edge) =>
          edge.source === nodeId
            ? edge.target
            : edge.source
      );

  return graph.nodes.filter(
    (node) =>
      ids.includes(node.id)
  );
}

/* ==========================================================
 * CENTER GRAPH
 * ==========================================================
 */

export function centerGraph(
  nodes: GraphNode[]
): GraphNode[] {
  if (!nodes.length) {
    return [];
  }

  const avgX =
    nodes.reduce(
      (sum, node) =>
        sum + node.position.x,
      0
    ) / nodes.length;

  const avgY =
    nodes.reduce(
      (sum, node) =>
        sum + node.position.y,
      0
    ) / nodes.length;

  return nodes.map(
    (node) => ({
      ...node,

      position: {
        x:
          node.position.x -
          avgX +
          CENTER_X,

        y:
          node.position.y -
          avgY +
          CENTER_Y,
      },
    })
  );
}

/* ==========================================================
 * DEFAULT EXPORT
 * ==========================================================
 */

export default buildGraph;