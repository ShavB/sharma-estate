"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    console.log(path);
  });
  return (
    <div className="flex justify-between p-4 px-10 shadow fixed w-full top-0 bg-white">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} width={60} height={60} alt="sharmaEstate" />
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`"hover:text-primary font-medium text-medium cursor-pointer"
                ${path == "/" && "text-primary"}`}
            >
              For Sale
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-medium cursor-pointer">
              For Rent
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-medium cursor-pointer">
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" /> Post New Add
        </Button>
        {isSignedIn ? (
          <UserButton className="" />
        ) : (
          <Link href={"/sign-in"}>
            <Button className="" variant="outline">
              Login
            </Button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
