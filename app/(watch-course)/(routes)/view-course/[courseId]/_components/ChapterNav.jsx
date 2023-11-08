import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import { CheckCircle2, PauseCircle, PlayCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

function ChapterNav({ Course, userCourse, setActiveChapter }) {
  const [activIndex, setActiveIndex] = useState(0);
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );
  useEffect(() => {
    setActiveChapter(Course?.chapter[0]);
  }, []);
  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };
  return (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">{Course.name}</h2>
        <h2 className="text-gray-500 text-[14px]">By {Course.author}</h2>
      </div>
      <div>
        {Course?.chapter?.map((chapter, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setActiveChapter(chapter);

            }}
            className={`flex gap-2 text-gray-500 text-[16px] px-5  p-4 cursor-pointer hover:bg-gray-200
            ${isChapterCompleted(chapter.chapterNumber)&&activIndex!=index?'bg-blue-100 text-blue-600':null}
            ${
              activIndex == index ? "bg-green-100 text-green-700" : null
            }`}
         >
            {activIndex == index ? (
              <PauseCircle height={25} width={25} />
            ) : isChapterCompleted(chapter.chapterNumber) ?
            (
              <CheckCircle2 height={25} width={25} />
            ) : (
              <PlayCircle height={25} width={25} />
            )}
            <h2>{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterNav;
