// src/components/skills/layout/Explorer.tsx

"use client";

/**
 * ==========================================================
 * EXPLORER
 * ==========================================================
 * VS Code Explorer Panel
 */

import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
} from "lucide-react";

import { useExplorer } from "../hooks/useExplorer";


const CATEGORY_TITLES: Record<string,string> = {

  frontend: "Frontend",

  backend: "Backend",

  database: "Database",

  deployment: "Deployment",

  api: "API",

  ui: "UI / UX",

  ai: "Artificial Intelligence",

};



export default function Explorer() {


  const {
    groupedSkills,
    expandedFolders,
    toggleFolder,
    openTab,
    isExpanded,
    isSelected,
  } = useExplorer();



  const folders =
    Object.entries(groupedSkills);



  return (

    <aside
      className="
        flex
        w-[220px]
        lg:w-[240px]
        xl:w-[270px]
        flex-col
        border-r
        border-[#2b2b2b]
        bg-[#1E1E1E]
      "
    >


      {/* =====================================================
          HEADER
      ====================================================== */}


      <div
        className="
          flex
          h-10
          items-center
          border-b
          border-[#2B2B2B]
          px-3
          lg:px-4
        "
      >

        <h2
          className="
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-[#B8B8B8]
          "
        >
          Explorer
        </h2>

      </div>




      {/* =====================================================
          FILE TREE
      ====================================================== */}


      <div
        className="
          flex-1
          overflow-y-auto
          py-2
        "
      >


        <div className="mb-2">


          {/* ROOT FOLDER */}


          <button
            onClick={() =>
              toggleFolder("skills")
            }
            className="
              flex
              w-full
              min-w-0
              items-center
              gap-1
              px-2
              py-1
              text-left
              text-sm
              text-[#D4D4D4]
              hover:bg-[#2A2D2E]
            "
          >


            {
              isExpanded("skills")
              ?
              <ChevronDown size={16}/>
              :
              <ChevronRight size={16}/>
            }



            {
              isExpanded("skills")
              ?

              <FolderOpen
                size={17}
                className="text-[#E8C170]"
              />

              :

              <Folder
                size={17}
                className="text-[#E8C170]"
              />

            }



            <span
              className="
                truncate
                font-medium
              "
            >
              skills
            </span>


          </button>





          {/* CATEGORIES */}



          {
            isExpanded("skills") && (

              <div className="ml-4">


                {
                  folders.map(
                    ([folder,skills])=>(


                      <div
                        key={folder}
                      >



                        {/* CATEGORY FOLDER */}


                        <button

                          onClick={() =>
                            toggleFolder(folder)
                          }

                          className="
                            flex
                            w-full
                            items-center
                            gap-1
                            px-2
                            py-1
                            text-left
                            text-sm
                            text-[#CCCCCC]
                            hover:bg-[#2A2D2E]
                          "
                        >


                          {
                            expandedFolders.includes(folder)
                            ?

                            <ChevronDown size={15}/>

                            :

                            <ChevronRight size={15}/>

                          }



                          {
                            expandedFolders.includes(folder)

                            ?

                            <FolderOpen
                              size={16}
                              className="text-[#E8C170]"
                            />

                            :

                            <Folder
                              size={16}
                              className="text-[#E8C170]"
                            />

                          }



                          <span
                            className="truncate"
                          >
                            {
                              CATEGORY_TITLES[folder] ?? folder
                            }
                          </span>



                        </button>                        {/* FILES */}

                        {
                          expandedFolders.includes(folder) && (

                            <div
                              className="
                                ml-5
                              "
                            >

                              {
                                skills.map((skill)=>(

                                  <button
                                    key={skill.id}

                                    onClick={() =>
                                      openTab(skill.id)
                                    }

                                    className={`
                                      flex
                                      w-full
                                      min-w-0
                                      items-center
                                      gap-2
                                      rounded
                                      px-2
                                      py-1
                                      text-left
                                      text-sm
                                      transition

                                      ${
                                        isSelected(skill.id)

                                        ?

                                        "bg-[#37373D] text-white"

                                        :

                                        "text-[#BDBDBD] hover:bg-[#2A2D2E]"
                                      }
                                    `}
                                  >


                                    {/* REAL TECHNOLOGY ICON */}

                                    {
                                      (() => {

                                        const Icon =
                                          skill.icon;


                                        return (

                                          <Icon
                                            size={15}
                                            color={skill.color}
                                          />

                                        );

                                      })()
                                    }



                                    <span
                                      className="
                                        truncate
                                      "
                                    >
                                      {skill.name}.ts
                                    </span>


                                  </button>

                                ))
                              }


                            </div>

                          )
                        }


                      </div>


                    )

                  )

                }


              </div>

            )

          }


        </div>


      </div>




      {/* =====================================================
          FOOTER
      ====================================================== */}


      <div
        className="
          border-t
          border-[#2B2B2B]
          p-2
          lg:p-3
          text-[11px]
          text-[#7D7D7D]
        "
      >

        {
          folders.reduce(
            (sum,[,skills]) =>
              sum + skills.length,
            0
          )
        }

        {" "}
        
        Skills Loaded


      </div>


    </aside>

  );

}