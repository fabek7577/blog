import Image from "next/image";
import React from "react";
import PostItem from "./Post";
import Footer from "./Footer";

interface DataObj {
  _id: string;
  title: string;
  catName: string;
  postImg: string;
  postText: string;
  creator: {
    name: string;
    image: string;
  };
  createdAt: string;
}

const Hero = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
    cache: "no-store",
  });
  const data = await res.json();
  const message: DataObj[] = await data?.message;

  return (
    <>
      <div className=" max-w-6xl mx-auto  px-4">
        <div className="hero h-[600px] pt-[360px] pl-16 bg-[url('/hero/hero.png')] bg-cover bg-no-repeat bg-center relative mb-36 rounded-xl">
          <div className="max-w-[600px] bg-white p-10 rounded-xl absolute -bottom-16 shadow-md dark:shadow-gray-700 dark:bg-bgDark dark:text-white">
            <button className=" hover:opacity-90 bg-indigo-500 text-white  font-bold rounded-md px-3 py-1 mb-4">
              Technology
            </button>
            <div className="title mb-5 text-[34px] tracking-wide font-bold ">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </div>
            <div className="user flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Image
                  src={"/card/user1.png"}
                  alt="post author image"
                  width={36}
                  height={36}
                />
                <p className="text-gray-400 leading-6">Jason Fransisco</p>
              </div>
              <p className="text-gray-400 leading-6">26.02.2026</p>
            </div>
          </div>
        </div>
        <section className=" mb-24">
          <p className=" font-bold text-lg mb-3">Latest Post</p>
          <div className="grid grid-cols-3 gap-4">
            {message &&
              message?.map((item) => {
                return (
                  <PostItem
                    postImg={item.postImg}
                    catName={item.catName}
                    id={item._id}
                    title={item.title}
                    postText={item.postText}
                    key={item._id}
                    creator={item.creator}
                    createdAt={item.createdAt}
                  />
                );
              })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
