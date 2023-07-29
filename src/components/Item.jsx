import { useState } from "react";
import Copy from "./icons/Copy";
import Delete from "./icons/Delete";

const Item = ({ data, deleteUrl }) => {
  const [copyConfirm, setCopyConfirm] = useState(false);

  const copyLink = (text) => {
    navigator.clipboard.writeText(text).then(() => setCopyConfirm(true));
    setTimeout(() => {
      setCopyConfirm(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 my-2 rounded-md shadow text-gray-500 flex justify-between items-center">
      <div className="flex-1">
        {copyConfirm ? (
          <p className="text-xl text-green-500 font-semibold">Link Copied</p>
        ) : (
          <p className="text-xl text-blue-500 font-semibold">
            {data.full_short_link}
          </p>
        )}
        <p className="text-sm">{data.original_link}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => copyLink(data.full_short_link)}>
          <Copy />
        </button>
        <button onClick={() => deleteUrl(data.code)}>
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default Item;
