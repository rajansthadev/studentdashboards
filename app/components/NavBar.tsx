import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-4xl text-centre px-10">
        Student Dashboard
      </h1>
      <span className="pr-16 mr-10">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                height: "3.5rem",
                width: "3.5rem",
              },
              userButtonPopoverRootBox: {
                backgroundColor: "GrayText",
              },
            },
          }}
        />
      </span>
    </div>
  );
};

export default NavBar;
