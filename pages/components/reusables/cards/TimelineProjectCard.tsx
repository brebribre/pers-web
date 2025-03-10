import Tag from '@/pages/components/reusables/Tag';
import Image from 'next/image';
interface CardValue {
  time: string;
  header: string;
  desc: string;
  tags: string[];
  href: string;
  link: string;
  additional: string;
}
function TimelineProjectCard(props: CardValue) {
  return (
    <div className="w-full mb-12 md:grid-cols-8 rounded-lg transform transition duration-300 hover:opacity-50 md:hover:scale-110 lg:hover:scale-110">
      <div className="mt-3">
        <div className="border border-blue-400 rounded-lg shadow">
          <a href={props.link}>
            <Image
              src={props.href}
              alt={props.header}
              width={1000}
              height={300}
            />
          </a>
          <div className="p-5">
            <p className="font-bold text-xl tracking-wide text-gray-100">
              {props.header}
            </p>
            <p className="font-bold text-md mt-2 tracking-wide text-gray-500">
              {props.time}
            </p>
            <p className="font-normal mt-2 text-md mb-2 tracking-wide text-gray-400">
              {props.desc}
            </p>
            <div className="flex flex-wrap">
              {props.tags?.map((item, index) => (
                <Tag key={index} desc={item} />
              ))}
            </div>

            <p className="mt-3">
              <a
                href={props.link}
                className="text-xs font-semibold leading-6 text-purple-200"
              >
                {props.additional}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineProjectCard;
