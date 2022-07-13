
import { Container } from "./styled"
import {ContactButton} from "./styled"

export default function Contact () {
  return (
    <div>
     <Container>
     <h1>
        Contact Page
      </h1>
      <ContactButton bg="yellow" width={150} height={30} m="0 auto">Button</ContactButton>
     </Container>
    </div>
  )
}
