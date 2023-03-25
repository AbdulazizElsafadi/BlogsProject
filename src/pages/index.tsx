import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetStaticPaths, GetStaticProps } from "next";

import useSwr from "swr";
import axios from "axios";
import { Fragment } from "react";
import Post from "@/components/Post";

export default function Home() {
  const fetcher = async () =>
    await axios.get("https://jsonplaceholder.typicode.com/posts");

  const { data, error, isLoading } = useSwr("posts", fetcher);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error happened during fetching</div>
      ) : (
        <div>
          <Header />
          <hr className="border-3 border-black w-screen" />
          <h1 className="text-center font-extralight text-6xl lg:text-8xl">
            Blogs
          </h1>
          <div className="flex flex-col lg:flex-row lg:h-screen lg:justify-evenly m-8 flex-wrap gap-3 border-2 border-borderColor rounded-xl">
            {data?.data.slice(0, 10).map((post: any) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const fetcher = async () =>
//     await axios.get("https://jsonplaceholder.typicode.com/posts");

//   const { data, error, isLoading } = useSwr("posts", fetcher);
// };
