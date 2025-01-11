import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    date: "2024-02-20",
    title: "Peace Talks Initiated",
    description: "Initial dialogue between conflicting parties established",
    type: "success",
    category: "Diplomatic",
    location: "Geneva"
  },
  {
    date: "2024-02-19",
    title: "Border Incident",
    description: "Minor skirmish reported at northern border",
    type: "warning",
    category: "Security",
    location: "Northern Region"
  },
  {
    date: "2024-02-18",
    title: "Humanitarian Aid Delivered",
    description: "Successfully delivered medical supplies to affected areas",
    type: "info",
    category: "Aid",
    location: "Eastern Province"
  },
  {
    date: "2024-02-17",
    title: "Ceasefire Agreement",
    description: "Temporary ceasefire agreement reached between parties",
    type: "success",
    category: "Diplomatic",
    location: "Capital City"
  }
];

export const Timeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex items-center">
                <Circle className={`h-2 w-2 fill-current text-${event.type}`} />
                {index !== events.length - 1 && (
                  <div className="absolute h-full w-px bg-border top-4 left-[3.5px]" />
                )}
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">{event.title}</p>
                  <Badge variant="secondary" className="text-xs">
                    {event.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};