import DetailPost from "@/app/components/DetailPost";

interface CardDataObj {
  _id: string;
  title: string;
  catName: string;
  postImg: string;
  postText: string;
  conclusion: string;
  creator: {
    name: string;
    image: string;
  };
  createdAt: string;
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog/${params.id}`, {
    cache: "no-store",
  });
  const data: CardDataObj = await res.json();

  return (
    <div>
      <DetailPost
        postImg={data.postImg}
        catName={data.catName}
        id={data._id}
        title={data.title}
        postText={data.postText}
        key={data._id}
        creator={data.creator}
        createdAt={data.createdAt}
        conclusion={data.conclusion}
      />
    </div>
  );
};

export default DetailPage;
