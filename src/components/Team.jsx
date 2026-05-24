import React from "react";
import { Title } from "./Title";
import { teamData } from "../assets/assets";

const Team = () => {
  return (
    <div className="flex flex-col items-center px-4 text-gray-800 gap-7 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />
      
      {/* Increased gap from gap-5 to gap-8 or gap-10 */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-5 transition-all duration-300 bg-white border border-gray-100 shadow-xl max-sm:flex-col rounded-xl dark:border-gray-700 dark:bg-gray-900 shadow-gray-100 dark:shadow-white/5 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
          >
            <img src={team.image} className="rounded-full w-14 h-14" alt="" />
            <div>
              <h3 className="text-sm font-bold">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;