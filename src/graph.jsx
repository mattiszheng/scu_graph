import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const HourlyDismissalCharts = () => {
  const days = [
    {
      name: 'Monday',
      data: [
        { time: '9:00', count: 715 }, // 12的1
        { time: '10:00', count: 715 }, // 12的2
        { time: '11:00', count: 4461 }, // 34的3
        { time: '12:00', count: 4461 }, // 34的4
        { time: '13:00', count: 721 + 380 }, // E的1 (34E和E56)
        { time: '14:00', count: 5225 }, // 56的5
        { time: '15:00', count: 5225 }, // 56的6
        { time: '16:10', count: 1655 }, // 78的7
        { time: '17:10', count: 1655 + 4784 }, // 78的8, 789的8
        { time: '18:10', count: 4784 }, // 789的9
      ],
    },
    {
      name: 'Tuesday',
      data: [
        { time: '9:00', count: 350 }, // 12的1
        { time: '10:00', count: 350 }, // 12的2
        { time: '11:00', count: 3023 }, // 34的3
        { time: '12:00', count: 3023 }, // 34的4
        { time: '13:00', count: 428 }, // E的1 (34E)
        { time: '14:00', count: 1757 }, // 56的5
        { time: '15:00', count: 1757 }, // 56的6
        { time: '16:10', count: 750 }, // 78的7
        { time: '17:10', count: 750 + 2853 }, // 78的8, 789的8
        { time: '18:10', count: 2853 }, // 789的9
      ],
    },
    {
      name: 'Wednesday',
      data: [
        { time: '9:00', count: 0 }, // E的1
        { time: '10:00', count: 0 }, // E的2
        { time: '11:00', count: 2336 }, // 12的1
        { time: '12:00', count: 2336 }, // 12的2
        { time: '13:00', count: 786 + 267 + 122 }, // E的1 (34E, E56, E)
        { time: '14:00', count: 2408 }, // 56的5
        { time: '15:00', count: 2408 }, // 56的6
        { time: '16:10', count: 2184 }, // 78的7
        { time: '17:10', count: 2184 + 2564 }, // 78的8, 789的8
        { time: '18:10', count: 2564 }, // 789的9
      ],
    },
    {
      name: 'Thursday',
      data: [
        { time: '9:00', count: 475 }, // 12的1
        { time: '10:00', count: 475 }, // 12的2
        { time: '11:00', count: 2085 }, // 34的3
        { time: '12:00', count: 2085 }, // 34的4
        { time: '13:00', count: 414 + 299 }, // E的1 (34E, E56)
        { time: '14:00', count: 927 }, // 56的5
        { time: '15:00', count: 927 }, // 56的6
        { time: '16:10', count: 831 }, // 78的7
        { time: '17:10', count: 831 + 1798 }, // 78的8, 789的8
        { time: '18:10', count: 1798 }, // 789的9
      ],
    },
    {
      name: 'Friday',
      data: [
        { time: '9:00', count: 0 }, // E的1
        { time: '10:00', count: 0 }, // E的2
        { time: '11:00', count: 540 }, // 12的1
        { time: '12:00', count: 540 }, // 12的2
        { time: '13:00', count: 1061 + 240 }, // E的1 (34E, E56)
        { time: '14:00', count: 1297 }, // 56的5
        { time: '15:00', count: 1297 }, // 56的6
        { time: '16:10', count: 1015 }, // 78的7
        { time: '17:10', count: 1015 + 1071 }, // 78的8, 789的8
        { time: '18:10', count: 1071 }, // 789的9
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      <h2 className="text-xl font-bold text-center mb-4">Hourly Class Dismissal Distribution</h2>
      {days.map((day) => (
        <div key={day.name} className="mb-8">
          <h3 className="text-lg font-semibold mb-2 text-center">{day.name}</h3>
          <BarChart width={800} height={200} data={day.data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Dismissal Time', position: 'bottom' }} />
            <YAxis
              label={{
                value: 'Student Count',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#8dd3c7" label={(value) => (value > 0 ? value : '')} />
          </BarChart>
        </div>
      ))}
    </div>
  );
};

export default HourlyDismissalCharts;
