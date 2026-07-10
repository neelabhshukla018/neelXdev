// src/components/skills/layout/RightSidebar.tsx

"use client";

/**
 * ==========================================================
 * RIGHT SIDEBAR
 * ==========================================================
 * VS Code Secondary Sidebar
 */

import {
  Award,
  Briefcase,
  Clock3,
  Database,
  Star,
  TrendingUp,
  Workflow,
} from "lucide-react";

import { useEditor } from "../hooks/useEditor";


export default function RightSidebar() {

  const {
    selectedSkill,
  } = useEditor();


  if (!selectedSkill) return null;


  return (

    <aside
      className="
        flex
        w-[280px]
        xl:w-[330px]
        flex-col
        border-l
        border-[#2B2B2B]
        bg-[#181818]
      "
    >


      {/* =====================================================
          HEADER
      ====================================================== */}


      <div
        className="
          border-b
          border-[#2B2B2B]
          px-5
          py-4
        "
      >

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-[#858585]
          "
        >
          Skill Details
        </p>



        <div
          className="
            mt-4
            flex
            items-center
            gap-3
          "
        >


          {/* REAL TECH ICON */}

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
            "
            style={{
              backgroundColor:
                `${selectedSkill.color}20`,

              border:
                `1px solid ${selectedSkill.color}`,
            }}
          >

            {(() => {

              const Icon =
                selectedSkill.icon;


              return (

                <Icon
                  size={32}
                  color={
                    selectedSkill.color
                  }
                />

              );

            })()}


          </div>



          <div
            className="
              min-w-0
            "
          >

            <h2
              className="
                truncate
                text-lg
                font-semibold
                text-white
              "
            >
              {selectedSkill.name}
            </h2>


            <p
              className="
                truncate
                text-sm
                capitalize
                text-[#9A9A9A]
              "
            >
              {selectedSkill.category}
            </p>


          </div>


        </div>


      </div>





      {/* =====================================================
          DESCRIPTION
      ====================================================== */}


      <section
        className="
          border-b
          border-[#2B2B2B]
          p-4
          xl:p-5
        "
      >

        <h3
          className="
            mb-3
            text-sm
            font-semibold
            text-white
          "
        >
          Description
        </h3>


        <p
          className="
            text-sm
            leading-6
            text-[#B9B9B9]
            break-words
          "
        >
          {selectedSkill.description}
        </p>


      </section>




      {/* =====================================================
          METRICS
      ====================================================== */}


      <section
        className="
          border-b
          border-[#2B2B2B]
          p-4
          xl:p-5
        "
      >

        <h3
          className="
            mb-4
            text-sm
            font-semibold
            text-white
          "
        >
          Performance
        </h3>



        <div
          className="
            space-y-4
          "
        >

          <MetricBar
            title="Proficiency"
            value={
              selectedSkill.metrics.proficiency
            }
            color="#3B82F6"
          />


          <MetricBar
            title="Confidence"
            value={
              selectedSkill.metrics.confidence
            }
            color="#10B981"
          />


          <MetricBar
            title="Experience"
            value={
              selectedSkill.metrics.experience
            }
            color="#F59E0B"
          />


          <MetricBar
            title="Problem Solving"
            value={
              selectedSkill.metrics.problemSolving
            }
            color="#8B5CF6"
          />


          <MetricBar
            title="Real World Usage"
            value={
              selectedSkill.metrics.realWorldUsage
            }
            color="#EF4444"
          />


        </div>


      </section>      {/* =====================================================
          QUICK STATS
      ====================================================== */}


      <section
        className="
          border-b
          border-[#2B2B2B]
          p-4
          xl:p-5
        "
      >

        <h3
          className="
            mb-4
            text-sm
            font-semibold
            text-white
          "
        >
          Quick Stats
        </h3>


        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-3
          "
        >

          <StatCard
            icon={Clock3}
            label="Experience"
            value={`${selectedSkill.experience.years} yrs`}
          />


          <StatCard
            icon={Briefcase}
            label="Projects"
            value={
              selectedSkill.stats.projects.toString()
            }
          />


          <StatCard
            icon={Workflow}
            label="Repositories"
            value={
              selectedSkill.stats.repositories.toString()
            }
          />


          <StatCard
            icon={TrendingUp}
            label="Commits"
            value={
              selectedSkill.stats.commits.toString()
            }
          />


          <StatCard
            icon={Award}
            label="Level"
            value={selectedSkill.level}
          />


          <StatCard
            icon={Star}
            label="Status"
            value={selectedSkill.status}
          />

        </div>


      </section>




      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}


      <section
        className="
          flex-1
          overflow-y-auto
          p-4
          xl:p-5
        "
      >

        <h3
          className="
            mb-4
            text-sm
            font-semibold
            text-white
          "
        >
          Technologies
        </h3>


        <div
          className="
            flex
            flex-wrap
            gap-2
            overflow-hidden
          "
        >

          {selectedSkill.technologies.map((tech)=>(
            
            <span
              key={tech}
              className="
                max-w-full
                truncate
                rounded-md
                border
                border-[#3B3B3B]
                bg-[#252526]
                px-3
                py-1.5
                text-xs
                text-[#D4D4D4]
              "
            >
              {tech}
            </span>

          ))}


        </div>




        {/* ==========================================
            CONNECTIONS
        =========================================== */}


        <h3
          className="
            mb-4
            mt-8
            text-sm
            font-semibold
            text-white
          "
        >
          Connected Skills
        </h3>


        <div
          className="
            space-y-2
          "
        >

          {selectedSkill.connections.map(
            (connection)=>(
              
              <div
                key={connection.target}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-[#252526]
                  px-3
                  py-2
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <Database
                    size={14}
                    className="text-[#6EA8FE]"
                  />


                  <span
                    className="
                      max-w-[120px]
                      truncate
                      text-sm
                      text-[#D4D4D4]
                    "
                  >
                    {connection.target}
                  </span>


                </div>


                <span
                  className="
                    text-xs
                    font-medium
                    text-[#7CB342]
                  "
                >
                  {connection.strength}%
                </span>


              </div>

            )
          )}


        </div>


      </section>


    </aside>

  );

}



/* ==========================================================
   METRIC BAR
========================================================== */


interface MetricBarProps {
  title:string;
  value:number;
  color:string;
}


function MetricBar({
  title,
  value,
  color,
}:MetricBarProps){


  return (

    <div>

      <div
        className="
          mb-1
          flex
          items-center
          justify-between
          text-xs
        "
      >

        <span className="text-[#BDBDBD]">
          {title}
        </span>


        <span className="font-medium text-white">
          {value}%
        </span>


      </div>



      <div
        className="
          h-2
          overflow-hidden
          rounded-full
          bg-[#2A2A2A]
        "
      >

        <div
          className="
            h-full
            rounded-full
            transition-all
            duration-500
          "
          style={{
            width:`${value}%`,
            background:color,
          }}
        />


      </div>


    </div>

  );

}





/* ==========================================================
   STAT CARD
========================================================== */


interface StatCardProps {
  icon:React.ElementType;
  label:string;
  value:string;
}



function StatCard({
  icon:Icon,
  label,
  value,
}:StatCardProps){


  return (

    <div
      className="
        rounded-lg
        border
        border-[#2E2E2E]
        bg-[#252526]
        p-3
      "
    >

      <div
        className="
          mb-2
          flex
          items-center
          gap-2
          text-[#6EA8FE]
        "
      >

        <Icon size={15}/>

      </div>


      <p
        className="
          text-xs
          text-[#8F8F8F]
        "
      >
        {label}
      </p>


      <p
        className="
          mt-1
          truncate
          text-sm
          font-semibold
          text-white
        "
      >
        {value}
      </p>


    </div>

  );

}