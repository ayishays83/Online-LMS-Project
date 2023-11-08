import { EntrollCourse, PublishCourse } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function EntrollmentSection({ courseDetails, userCourse }) {
  const { user } = useUser();
  const router = useRouter();
  const entrollCourse = async () => {
    if (user) {
      await EntrollCourse(
        courseDetails.id,
        user.primaryEmailAddress.emailAddress
      ).then(async (res) => {
        console.log("entrollcourse",res);
        if (res) {
          await PublishCourse(res?.createUserEntrollCourse?.id).then(
            (result) => {
              console.log(result);
              if (result) {
                router.push("/view-course/" + courseDetails.id);
              }
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      {userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center  ">
          <h2 className="text-gray-500">
            Continue and Build Project, And Track your Progress!!!
          </h2>
          <button
            className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-3 hover:bg-blue-700"
            onClick={() => router.push("/view-course/" + courseDetails.id)}
          >
            Continue
          </button>
        </div>
      ) : null}
      {!userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center  ">
          <h2 className="text-gray-500">
            Learn and Build Project, And Track your Progress!!!
          </h2>
          <button
            className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-3 hover:bg-blue-700"
            onClick={() => entrollCourse()}
          >
            Entroll Now
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default EntrollmentSection;
