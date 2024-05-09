import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/74d6b185-9660-44be-9efd-90eb53c9739c-s7vw4c.jpg",
  "https://utfs.io/f/a5c8ce33-4058-4115-85c0-8bd46c3c0c84-fyo95x.jpg",
  "https://utfs.io/f/9d7de5ab-8689-4249-8e8f-8e921133c45a-wgx2wu.jpg",
  "https://utfs.io/f/f758fe73-a0b0-4512-8213-e5b9b5f74c45-3lrsw9.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="m-10">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48 p-1">
            <img src={image.url} />
          </div>
        ))}
      </div>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </main>
  );
}
