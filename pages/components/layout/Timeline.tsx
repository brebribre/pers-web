import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineCard from '@/pages/components/reusables/cards/TimelineCard';
import TimelineProjectCard from '@/pages/components/reusables/cards/TimelineProjectCard';
import {
  timelineEntries,
  TimelineCategory,
  TimelineEntry,
} from '@/constants/timeline';

type Filter = 'all' | TimelineCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'job', label: 'Jobs' },
  { value: 'education', label: 'Education' },
  { value: 'project', label: 'Projects' },
];

function EntryCard({ entry }: { entry: TimelineEntry }) {
  if (entry.kind === 'project') {
    return (
      <TimelineProjectCard
        time={entry.time}
        header={entry.header}
        desc={entry.desc}
        tags={entry.tags}
        additional={entry.additional}
        href={entry.href ?? ''}
        link={entry.link}
      />
    );
  }
  return (
    <TimelineCard
      time={entry.time}
      header={entry.header}
      subheader={entry.subheader ?? ''}
      desc={entry.desc}
      tags={entry.tags}
      additional={entry.additional}
      link={entry.link}
      icon={entry.icon}
    />
  );
}

export default function CustomizedTimeline() {
  const [filter, setFilter] = React.useState<Filter>('all');

  const entries =
    filter === 'all'
      ? timelineEntries
      : timelineEntries.filter((entry) => entry.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center pt-8 lg:pt-0">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border transition duration-300 ${
              filter === value
                ? 'bg-blue-400 border-blue-400 text-gray-900'
                : 'border-blue-400 text-gray-300 hover:bg-blue-400 hover:bg-opacity-20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
          },
        }}
      >
        {entries.map((entry, index) => (
          <TimelineItem key={`${entry.header}-${entry.time}`}>
            <TimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
              {index < entries.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div className="mb-8">
                {entry.note && filter === 'all' && (
                  <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                    {entry.note}
                  </p>
                )}
                <EntryCard entry={entry} />
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <div className="lg:hidden block text-center">
        <p className="text-1xl text-blue-300 opacity-50 font-light">
          This page are created using Next.js, styled with Tailwind.css and
          deployed with Vercel.
        </p>
        <p className="text-1xl mt-4 mb-12 lg:mb-0 text-blue-300 opacity-50 font-bold ">
          Copyright © 2025 Bryan Alvin
        </p>
      </div>
    </div>
  );
}
