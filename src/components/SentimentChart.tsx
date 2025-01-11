import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-02-15', positive: 24, negative: 32, neutral: 44 },
  { date: '2024-02-16', positive: 26, negative: 30, neutral: 44 },
  { date: '2024-02-17', positive: 28, negative: 28, neutral: 44 },
  { date: '2024-02-18', positive: 30, negative: 26, neutral: 44 },
  { date: '2024-02-19', positive: 32, negative: 24, neutral: 44 },
];

export const SentimentChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Sentiment Analysis Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="positive" stroke="#4CAF50" name="Positive" />
              <Line type="monotone" dataKey="negative" stroke="#FF4444" name="Negative" />
              <Line type="monotone" dataKey="neutral" stroke="#2196F3" name="Neutral" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};