type Props = {
  params: {
    name: string;
  };
};
function page({ params: { name } }: Props) {
  return <div>{name}</div>;
}

export default page;
