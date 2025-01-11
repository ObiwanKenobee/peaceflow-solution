import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { IncidentMap } from "@/components/IncidentMap";
import { Timeline } from "@/components/Timeline";

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
      </main>
    </div>
  );
};

export default Index;