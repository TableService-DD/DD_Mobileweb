import React from "react";
type Props = {
  params: {
    stroeid: string;
  };
};
function page({ params }: Props) {
  return <div>{params.stroeid}</div>;
}

export default page;
