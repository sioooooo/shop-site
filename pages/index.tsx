import type { NextPage } from "next";

const Home: NextPage = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:1337/api/restaurants");
    const data = await res.json();
    console.log(data.data);
  };
  return (
    <div className="ml-10">
      <div className="w-full">
        <button
          className="bg-slate-300 py-2 px-4 rounded
        hover:opacity-50"
        >
          探す
        </button>
        <input
          type="text"
          placeholder="レストラン名を入力してください"
          className="py-2 px-5 border border-solid w-3/4"
        />
      </div>
    </div>
  );
};

export default Home;
