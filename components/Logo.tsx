import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://media.licdn.com/dms/image/D5603AQGWGmAFQdTYMg/profile-displayphoto-shrink_200_200/0/1673723428027?e=1680739200&v=beta&t=-_v6uWqmZd_MuEoZ9D18y8uthjB40SlBx_YdQEFI1sI"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
