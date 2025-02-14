import BookList from "@/components/BookList"
import BookOverview from "@/components/BookOverview"
import { Button } from "@/components/ui/button"
import { sampleBooks } from "@/constants"

const page = () => (
	<>
		<BookOverview {...sampleBooks[3]} />
		<BookList
                    title="Latest Books"
		
            books={sampleBooks}
                    containerClassname="mt-28"
		/>
	</>
)

export default page
