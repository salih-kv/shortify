import { useEffect, useState } from "react";
import Form from "./components/Form";
import Item from "./components/Item";

export default function App() {
  let localData = localStorage.getItem("localState");

  let initialState = localStorage ? JSON.parse(localData) : [];

  const [urls, setUrls] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const fetchUrl = async (link) => {
    setLoading(true);
    let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    let data = await res.json();

    setUrls((prev) => [data.result, ...prev]);
    setLoading(false);
  };

  const deleteUrl = (code) => {
    setUrls((state) => {
      return state.filter((item) => item.code !== code);
    });
  };

  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(urls));
  }, [urls]);

  return (
    <div>
      <main className="bg-slate-200 min-h-screen">
        <section className="w-full max-w-screen-md mx-auto">
          <header>
            <h1 className="text-center text-3xl py-6 font-bold">Shortify</h1>
          </header>
          <Form fetchUrl={fetchUrl} loading={loading} />
          {urls?.map((data) => (
            <Item data={data} key={data.code} deleteUrl={deleteUrl} />
          ))}
        </section>
      </main>
    </div>
  );
}
