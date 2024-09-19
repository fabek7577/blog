import Image from "next/image";
import React from "react";
interface PostItemProps {
  postImg: string;
  id: string;
  title: string;
  postText: string;
  conclusion: string;
  catName: string;
  creator: {
    name: string;
    image: string;
  };
  createdAt: string;
}
const DetailPost = ({
  createdAt,
  creator,
  id,
  postImg,
  postText,
  title,
  catName,
  conclusion,
}: PostItemProps) => {
  const replaceWithBr = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = createdAt;
  const date = new Date(newDate.split("T")[0]);
  return (
    <section>
      <div className="container max-w-[800px] mx-auto">
        <div className="pt-8">
          <button className="bg-indigo-500 text-white  rounded-md px-3 py-1 mb-6">
            {catName}
          </button>
          <h1 className=" text-4xl tracking-wide font-bold mb-5">{title}</h1>
          <div className="user flex items-center gap-5 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src={creator?.image}
                alt="post author image"
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="text-gray-400 leading-6">{creator?.name}</p>
            </div>
            <p className="text-gray-400 leading-6">
              {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
            </p>
          </div>
          <Image
            src={postImg}
            alt="image"
            width={800}
            height={300}
            loading="lazy"
            className="object-cover bg-cover mb-8 w-full max-h-[300px]"
          />
          <p dangerouslySetInnerHTML={{ __html: replaceWithBr(postText) }} />
          <div className="">
            <h1 className="text-[#181A2A] dark:text-white font-semibold text-2xl mt-4">
              Conclusion:
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: replaceWithBr(conclusion) }}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPost;
