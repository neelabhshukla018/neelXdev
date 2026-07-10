// src/components/skills/mobile/MobileCategoryBar.tsx

"use client";

import {
  useRef,
  useState,
} from "react";

import {
  Folder,
  ChevronRight,
} from "lucide-react";

import { useExplorer } from "../hooks/useExplorer";


const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
  },
  {
    id: "backend",
    label: "Backend",
  },
  {
    id: "database",
    label: "Database",
  },
  {
    id: "deployment",
    label: "Deploy",
  },
  {
    id: "api",
    label: "API",
  },
  {
    id: "ui",
    label: "UI",
  },
  {
    id: "ai",
    label: "AI",
  },
];


export default function MobileCategoryBar() {


  const {
    groupedSkills,
    openTab,
    isSelected,
  } = useExplorer();



  const [
    activeCategory,
    setActiveCategory,
  ] = useState("frontend");



  const categoryRef =
    useRef<HTMLDivElement>(null);


  const skillRef =
    useRef<HTMLDivElement>(null);



  const skills =
    groupedSkills[
      activeCategory as keyof typeof groupedSkills
    ];



  return (

    <div
      className="
        border-b
        border-[#2B2B2B]
        bg-[#181818]
      "
    >



      {/* ==========================================
          CATEGORY ROW
      =========================================== */}


      <div className="relative">


        <div
          ref={categoryRef}
          className="
            flex
            gap-2
            overflow-x-auto
            px-3
            py-2
            pr-12
            scrollbar-thin
            scrollbar-thumb-[#3A3A3A]
          "
        >


          {CATEGORIES.map((category)=>(

            <button
              key={category.id}

              onClick={() =>
                setActiveCategory(category.id)
              }

              className={`

                shrink-0

                whitespace-nowrap

                rounded-md

                px-3

                py-1.5

                text-xs

                transition


                ${
                  activeCategory === category.id

                  ?

                  "bg-[#007ACC] text-white"

                  :

                  "bg-[#252526] text-[#BDBDBB] hover:bg-[#333333]"
                }

              `}
            >

              {category.label}


            </button>

          ))}



        </div>



        {/* CATEGORY NEXT BUTTON */}


        <button

          onClick={() =>
            categoryRef.current?.scrollBy({
              left:150,
              behavior:"smooth",
            })
          }


          className="
            absolute
            right-1
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#333]
            bg-[#252526]/90
            text-[#888]
            backdrop-blur
            hover:text-white
          "

        >

          <ChevronRight size={16}/>


        </button>



      </div>





      {/* ==========================================
          SKILL FILE ROW
      =========================================== */}


      <div
        className="
          relative
          border-t
          border-[#2B2B2B]
        "
      >



        <div
          ref={skillRef}

          className="
            flex
            gap-2
            overflow-x-auto
            px-3
            py-2
            pr-12
            scrollbar-thin
            scrollbar-thumb-[#3A3A3A]
          "
        >



          {skills?.map((skill)=>(


            <button

              key={skill.id}

              onClick={() =>
                openTab(skill.id)
              }


              className={`

                flex

                shrink-0

                items-center

                gap-2

                rounded-md

                border

                px-3

                py-2

                text-xs

                transition



                ${
                  isSelected(skill.id)

                  ?

                  "border-[#007ACC] bg-[#37373D] text-white"

                  :

                  "border-[#333333] bg-[#252526] text-[#BDBDBD] hover:bg-[#333333]"
                }


              `}
            >



              {/* REAL TECHNOLOGY ICON */}


              {(() => {

                const Icon =
                  skill.icon;


                return (

                  <Icon

                    size={14}

                    color={skill.color}

                  />

                );


              })()}



              {skill.name}



            </button>



          ))}





          {!skills?.length && (

            <div

              className="
                flex
                items-center
                gap-2
                text-xs
                text-[#777]
              "

            >

              <Folder size={14}/>

              No skills


            </div>

          )}



        </div>





        {/* SKILL NEXT BUTTON */}



        <button

          onClick={() =>
            skillRef.current?.scrollBy({
              left:150,
              behavior:"smooth",
            })
          }


          className="
            absolute
            right-1
            top-1/2
            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#333]
            bg-[#252526]/90
            text-[#888]
            backdrop-blur
            hover:text-white
          "

        >

          <ChevronRight size={16}/>


        </button>



      </div>



    </div>

  );

}