import { Card, CardHeader, CardContent } from '@mui/material';

const ResultsCard = ({ insights, analysisType }) => {
  return (
    <Card className="mt-4">
      <CardHeader title={analysisType === 'fundamental' ? 'Fundamental Analysis' : 'Sentiment Analysis'} />
      <CardContent>
        <p>{analysisType === 'fundamental' ? insights.fundamental : insights.sentiment}</p>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
