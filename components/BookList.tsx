import React from "react"

const BookList = ({
  title,
  books,
  containerClassname,
}: {
  title: string
  books: Book[]
  containerClassname: string
}) => {
  return (
    <section className="font-bebas-neue text-4xl text-light-100 ">
      Polular Books
    </section>
  )
}

export default BookList
