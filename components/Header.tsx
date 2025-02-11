"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { FaBook, FaBookAtlas, FaBookOpen } from "react-icons/fa6"

const Header = () => {
  const pathName = usePathname()
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="text-light-200 flex items-center gap-2">
        <i className="">
          <FaBookOpen size={30} />
        </i>
        BookShare-Library
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base",
              pathName === "library" ? "text-light-200" : "text-light-100",
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
