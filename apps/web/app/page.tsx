"use client";

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
   <div className="h-screen w-screen flex bg-black justify-center items-center">
      <div className="flex flex-col justify-center">
        <TextInput placeholder="room-name" />
        <button onClick={() => {
          router.push("/chat/1231")
        }} className="bg-blue-500 text-white rounded-md">Join room</button>
      </div>
   </div>
  );
}
