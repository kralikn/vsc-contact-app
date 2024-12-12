import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center p-10">
      <h1 className="text-5xl font-bold">Contact App</h1>
      <div>
        <Link href='/contacts'>Elérhetőségek</Link>
      </div>

    </div>
  );
}
