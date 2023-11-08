import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext';
import { markCompletedChapter } from '@/app/_services';
import { CheckCircle2, X } from 'lucide-react';
import React, { useContext } from 'react'

function FullVideoPlayer({activeChapter,userCourse}) {
  if (!activeChapter || !activeChapter.video || !activeChapter.video.url) {
    return <div>Video not available.</div>;
  }
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );
  console.log(userCourse[0].id);
  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };
  const markChapterCompleted = async() => {
    if(!completedChapter?.length)
    {
      setCompletedChapter([]);
    }
    completedChapter?setCompletedChapter(
      [...completedChapter,
      {
        chapterId:activeChapter?.chapterNumber+""
      }]
    ):setCompletedChapter([{
      chapterId:activeChapter?.chapterNumber+""
    }])
    await markCompletedChapter(userCourse[0].id,activeChapter?.chapterNumber).then(resp=>{
      console.log(resp);
    })
    console.log(completedChapter);
  };




  console.log(activeChapter);
  return (
    <div className='p-5'>
      <video width='1000' height='250' controls controlsList='nodownload'
      key={activeChapter?.video?.url}>
            <source src={activeChapter?.video?.url} type='video/mp4'/>
      </video>
      <div className='p-5 border rounded-lg mt-5 flex justify-between items-center'>
        <h2 className='text-[20px] font-medium'>{activeChapter.name}</h2>
       {!isChapterCompleted(activeChapter.chapterNumber)? <button
       onClick={()=>markChapterCompleted()}
       className='bg-blue-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-blue-800'>
          <CheckCircle2/> <h2>Mark as Completed</h2>
        </button>:<button className=' border border-blue-800 text-blue-600 p-2 px-5 rounded-lg flex gap-2 hover:bg-blue-100'>
          <X/> <h2>Mark  InComplete</h2>
        </button>}
      </div>
    </div>
  )
}

export default FullVideoPlayer