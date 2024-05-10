import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="m-10">
      <div className="flex flex-wrap gap-4 ">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="w-48 overflow-hidden">
            <img src={image.url} className="duration-300 hover:scale-110" />
          </div>
        ))}
      </div>
    </main>
  );
}
