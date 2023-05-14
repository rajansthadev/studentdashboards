import { SignUp } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/protectedPage"
      />
    </div>
  );
};

export default page;
