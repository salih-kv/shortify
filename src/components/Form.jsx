import { useState } from "react";

const Form = ({ fetchUrl, loading }) => {
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    fetchUrl(link);
    setLink("");
  };

  return (
    <div className="bg-white p-6 rounded-md flex justify-between gap-2 my-6 shadow">
      <input
        value={link}
        type="text"
        className="border rounded p-2 flex-1"
        placeholder="Enter url to shorten"
        onChange={(e) => setLink(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-500"
      >
        {loading ? "Creating" : "Create"}
      </button>
    </div>
  );
};

export default Form;
