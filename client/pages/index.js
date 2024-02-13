import version from "../../version.json";

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-6 text-lg leading-8">
            Version --- <span className="text-red-500">{process.env.version}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
