import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Users, AlertTriangle } from "lucide-react";

const aidStats = [
  {
    title: "Aid Packages",
    value: "1,234",
    icon: Package,
    description: "Ready for distribution",
    type: "info"
  },
  {
    title: "In Transit",
    value: "456",
    icon: Truck,
    description: "Currently being delivered",
    type: "warning"
  },
  {
    title: "People Reached",
    value: "50,000+",
    icon: Users,
    description: "Recipients this month",
    type: "success"
  },
  {
    title: "Critical Areas",
    value: "8",
    icon: AlertTriangle,
    description: "Requiring immediate attention",
    type: "critical"
  }
];

export const HumanitarianAid = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Humanitarian Aid Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aidStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 text-${stat.type}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};