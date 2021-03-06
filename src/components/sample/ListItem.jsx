import React from "react";

const ListItem = ({ image, title, author }) => (
  <article className="p-2 flex space-x-4">
    <img
      className="flex-none w-12 object-cover rounded-lg"
      src={image}
      alt=""
    />
    <div>
      <div>
        <dt className="sr-only">Title</dt>
        <dd className="text-2xl font-bold">{title}</dd>
      </div>
      <div className="mt-0.5">
        <dt className="sr-only">Author</dt>
        <dd className="text-sm font-semibold text-indigo-500">By {author}</dd>
      </div>
    </div>
  </article>
);

export default ListItem;
