import Image from 'next/image';

interface CardValue {
  time: string;
  header: string;
  subheader: string;
  desc: string;
  tags: string[];
  additional: string;
  link: string;
  icon?: string;
}

import Tag from '@/pages/components/reusables/Tag';

function TimelineCard(props: CardValue) {
  return (
    <div className="mb-12 md:grid-cols-8 rounded-lg transform transition duration-300 hover:opacity-50 md:hover:scale-110 lg:hover:scale-110">
      <div className="p-4 border border-blue-400 rounded-lg shadow sm:max-w-lg">
        <div className="flex items-center gap-2 mb-2">
          {(() => {
            if (props.icon) {
              return (
                <Image
                  src={props.icon}
                  alt={props.header}
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
              );
            }
            return null;
          })()}
          <p className="font-bold text-xl tracking-wide text-gray-100">
            {props.header}
          </p>
        </div>

        <p className="font-semibold text-md mb-2 tracking-wide text-gray-400">
          {props.subheader}
        </p>
        <p className="text-sm font-normal text-gray-400 tracking-wide mb-2">
          {props.time}
        </p>
        <p className="text-md font-normal text-gray-400 tracking-wide mb-2">
          {props.desc}
        </p>
        <div className="flex flex-wrap">
          {props.tags?.map((item, index) => <Tag key={index} desc={item} />)}
        </div>
        <p className="mt-3">
          <a
            href={props.link}
            className="text-xs font-semibold text-purple-200"
          >
            {props.additional}
          </a>
        </p>
      </div>
    </div>
  );
}

export default TimelineCard;
