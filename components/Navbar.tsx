import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-slate-600 text-gray-100 justify-between h-12 items-center">
      <div className="ml-5">
        <Link href="/">ホーム</Link>
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link href="/">サインイン</Link>
          </li>
          <li className="ml-5 mr-5">
            <Link href="/">サインアップ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
