function Tag(props: any) {
  return (
    <span className="text-xs mt-2 font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
      {props.desc}
    </span>
  );
}

export default Tag;
