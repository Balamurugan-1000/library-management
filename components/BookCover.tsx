import React from "react"

type BookCoverVarient = "extraSmall" | "small" | "medium" | "regular" | "wide"
const varientStyles: Record<BookCoverVarient, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
}
interface Props {
  coverImage: string
  coverColor: string
  varient: "wide" | "small"
  className: string
}
const BookCover = ({ coverColor, coverImage, varient, className }: Props) => {
  return <div>BookCover</div>
}

export default BookCover
