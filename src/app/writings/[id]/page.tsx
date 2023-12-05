import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/writings";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <main className="max-w-2xl m-auto mt-24 mb-24">
      {/* Post Title */}
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

      <div className="text-gray-500 font-medium mb-5">
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className="text-black writing-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </main>
  );
}
