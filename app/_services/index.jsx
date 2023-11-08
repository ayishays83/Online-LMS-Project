import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query Courses {
      courseLists {
        name
        banner {
          url
        }
        id
        totalChapters
        tags
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id, userEmail) => {
  const query =
    gql`
  query course {
    courseList(where: {id: "` + id +`"}) {
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
          chapterNumber
        }
      }
      id
      author
      name
      description
      totalChapters
    }
    userEntrollCourses(where: {courseId: "` + id +`", userEmail: "` + userEmail +`"})
    {
      courseId
      userEmail
      id
      copmletedChapter {
        ... on CompletedChapter {
          chapterId
        }
     }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const EntrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation EntrollCourse {
    createUserEntrollCourse(data: {courseId: "` +
    courseId +
    `", userEmail: "` +
    userEmail +
    `"}) {
      id
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublishCourse = async (id) => {
  const mutationQuery =
    gql`
  mutation EntrollCourse {
    publishUserEntrollCourse(where: {id: "` +
    id +
    `"}) {
      id
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
export const markCompletedChapter= async (recordId,chapterNumber) => {
  const mutationQuery =
    gql`
    mutation MarkChapterComplete {
      updateUserEntrollCourse(
        data: {copmletedChapter: {create: {CompletedChapter: {data: {chapterId: "`+chapterNumber+`"}}}}}
        where: {id: "`+recordId+`"}
      ) {
        id
      }
      publishManyUserEntrollCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
    
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
export const GetUserCourseList = async (userEmail) => {
  const query =
    gql`
    query MyQuery {
      userEntrollCourses(where: {userEmail: "`+userEmail+`"}) {
        courseList {
          banner {
            url
          }
          description
          name
          id
          totalChapters
          tags
          author
        }
      }
    }
    
  `;
  const result = await request(MASTER_URL, query);
  return result;
};