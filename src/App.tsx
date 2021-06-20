import { Container } from "react-bootstrap"
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';
import ResumeFooter from './components/ResumeFooter';
import './App.css'

function App() {
  return (
    <Container className="app h-100 rounded my-5 shadow-lg">
      <ResumeHeader />
      <ResumeBody />
      <ResumeFooter />
    </Container>
  )
}

export default App
