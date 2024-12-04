import Link from "next/link";
import { cookies } from "next/headers";
import ProfileBar from "../user/ProfileBar";
import LoginBtn from "../login/LoginBtn";
import { fetchFromAPI } from "@/utils/api";

export default async function Header() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("access-token");
  const isLogin = !!token;

  let userData: User = { name: "", phone: "", email: "", profileUrl: "" };

  if (isLogin) {
    const data = await fetchFromAPI(`user/info`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    if (data.ok) {
      const userResponse = await data.json();
      userData = userResponse.data;
    } else console.log(data.text);
  }

  return (
    <header className="bg-tone-1 border-b-2 sticky top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center py-4 px-6">
        <Link href="/">
          <div className="flex flex-row justify-center items-center text-xl font-bold text-amber-900">
            gocoffee
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/saved" className="hover:bg-gray-200 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
              fill="#6B3214"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
            </svg>
          </Link>
          {isLogin && userData ? (
            <ProfileBar userName={userData.name} profileUrl={userData.profileUrl}/>
          ) : (
            <LoginBtn />
          )}
        </div>
      </div>
    </header>
  );
}
