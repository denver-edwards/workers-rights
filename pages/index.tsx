import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BasicRights from "@/components/BasicRights";
import StateSelector from "@/components/StateSelector";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold mb-2 text-center text-gray-800">
            Basic Workers&apos; Rights
          </h1>
          <h2 className="text-xl font-thin italic mb-6 text-center text-gray-900">
            You should know what you&apos;re entitled to as a worker
          </h2>

          <BasicRights />
        </div>
        <StateSelector />
      </main>
      <Footer />
    </div>
  );
}
