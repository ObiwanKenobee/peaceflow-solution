import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const IncidentMap = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Incident Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[2/1] rounded-lg border bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Interactive map will be implemented here</p>
        </div>
      </CardContent>
    </Card>
  );
};