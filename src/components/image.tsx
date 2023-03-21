/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { NextPage } from "next/types";
import { ImgHTMLAttributes } from "react";

const Image: NextPage<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <>
      <div className={'my-4 rounded overflow-hidden '}>
        <img
          {...props}
        />
      </div>
    </>
  );
};

export default Image;