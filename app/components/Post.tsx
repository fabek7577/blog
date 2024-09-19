import Image from "next/image";
import Link from "next/link";
interface PostItemProps {
  postImg: string;
  id: string;
  title: string;
  postText: string;
  catName: string;
  creator: {
    name: string;
    image: string;
  };
  createdAt: string;
}
const PostItem = ({
  createdAt,
  creator,
  id,
  postImg,
  postText,
  title,
  catName,
}: PostItemProps) => {
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
    <div>
      <div className="rounded-lg p-4 border dark:bg-cardDark dark:border-darkBorder">
        <Image
          src={postImg}
          width={360}
          height={240}
          alt="post image"
          className=" w-full rounded-md object-cover mb-4 h-[240px]"
        />
        <button className=" px-3 py-1 rounded-md bg-indigo-50 text-indigo-500 text-sm mb-4">
          {catName}
        </button>
        <Link
          href={id}
          className="line-clamp-3 min-h-[84px] text-2xl leading-7 font-semibold mb-5 hover:underline"
        >
          {title}
        </Link>
        <div className="user flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image
              src={creator.image}
              alt="post author image"
              width={36}
              height={36}
              className="rounded-full"
            />
            <p className="text-gray-400 leading-6">{creator.name}</p>
          </div>
          <p className="text-gray-400 leading-6">
            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
