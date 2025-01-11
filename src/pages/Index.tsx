import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { IncidentMap } from "@/components/IncidentMap";
import { Timeline } from "@/components/Timeline";
import { SentimentChart } from "@/components/SentimentChart";
import { HumanitarianAid } from "@/components/HumanitarianAid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-6 space-y-6">
        <Stats />
        <div className="grid gap-4 md:grid-cols-4">
          <IncidentMap />
          <Timeline />
        </div>
        <SentimentChart />
        <HumanitarianAid />
      </main>
    </div>
  );
};

export default Index;