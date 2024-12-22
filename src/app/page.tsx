// pages/index.js
import Card from "./component/card";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Key Advantages of Next.js
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row gap-6 justify-center">
        <Card
          bgColor="bg-blue-500"
          heading="SSR & SSG"
          text="Built-in for better SEO and performance"
        />
        <Card
          bgColor="bg-green-500"
          heading="File-Based Routing"
          text="Simplifies route management"
        />
        <Card
          bgColor="bg-yellow-500"
          heading="API Routes"
          text="Create backend APIs directly within your Next.js app"
        />
      </div>
    </div>
  );
}