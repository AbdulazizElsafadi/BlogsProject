import { GetStaticProps, GetStaticPaths } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import axios from "axios";

const postDetails = ({ postDetails }: any) => {
  return (
    <div>
      <Header />
      <hr className="border-3 border-black w-screen" />
      <div className="flex h-screen gap-16 flex-col justify-start m-5 text-2xl">
        <div>
          <h1 className=" font-extrabold">ID</h1>
          <p>{postDetails.id}</p>
        </div>
        <div>
          <h1 className=" font-extrabold">Title</h1>
          <p>{postDetails.title}</p>
        </div>
        <div>
          <h1 className=" font-extrabold">Body</h1>
          <p>{postDetails.body}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default postDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const paths = response.data.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = response.data;
  return {
    props: {
      postDetails: data,
    },
  };
};
