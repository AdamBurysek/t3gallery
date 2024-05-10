import React from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="max-w-content flex w-full flex-wrap gap-4 ">
      {images.map((image, index) => (
        <div key={index} className="w-48 overflow-hidden">
          <img src={image.url} className="duration-300 hover:scale-110" />
        </div>
      ))}
    </div>
  );
};

export default Images;
