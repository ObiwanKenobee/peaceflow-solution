import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle } from "lucide-react";

const events = [
  {
    date: "2024-02-20",
    title: "Peace Talks Initiated",
    description: "Initial dialogue between conflicting parties established",
    type: "success",
  },
  {
    date: "2024-02-19",
    title: "Border Incident",
    description: "Minor skirmish reported at northern border",
    type: "warning",
  },
  {
    date: "2024-02-18",
    title: "Humanitarian Aid Delivered",
    description: "Successfully delivered medical supplies to affected areas",
    type: "info",
  },
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
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};