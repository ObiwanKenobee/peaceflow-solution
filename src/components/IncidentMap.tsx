import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Flag, Shield, Users } from "lucide-react";

const incidents = [
  { type: "Security", count: 12, icon: Shield, color: "text-warning" },
  { type: "Diplomatic", count: 5, icon: Flag, color: "text-info" },
  { type: "Humanitarian", count: 8, icon: Users, color: "text-success" },
  { type: "Critical", count: 3, icon: AlertTriangle, color: "text-critical" },
];

export const IncidentMap = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Incident Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="aspect-[2/1] rounded-lg border bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map will be implemented here</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {incidents.map((incident, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-2 rounded-lg border">
                <incident.icon className={`h-5 w-5 ${incident.color}`} />
                <span className="text-sm font-medium">{incident.type}</span>
                <span className="text-2xl font-bold">{incident.count}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};