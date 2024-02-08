import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Calendar App
      </h1>
      <Image
        src="/calendar.png"
        alt="Calendar"
        width={500}
        height={500}
        className="rounded-full"
      />
    </main>
  );
}
