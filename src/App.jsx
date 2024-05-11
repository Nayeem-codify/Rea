import Heading from "./components/Heading"
import Paragraph from "./components/Paragraph"
import Unorderlist from "./components/Unorderlist"



function App() {

  let peratext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  return (
    <>
      <Heading title = "mern2306" nayeemstyle="Headingone" fullform = "Daraz , Alibaba , Flipcard" />
      <Paragraph text={peratext}/>

      <Unorderlist>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </Unorderlist>
    </>
  )
}

export default App
