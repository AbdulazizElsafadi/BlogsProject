import Link from "next/link";
import React from "react";

const Post = ({ post }: any) => {
  return (
    <div className="flex flex-col justify-evenly flex-wrap gap-3 items-center m-8 basis-2/12 border-2 border-borderColor rounded-2xl">
      <div>{post.id}</div>
      <div className="text-center">{post.title}</div>
      <hr className="border-1 border-borderColor w-11/12" />
      <Link
        className="m-4 text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 cursor-pointer px-4 rounded-lg w-5/6"
        href={`posts/${post.id}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default Post;
