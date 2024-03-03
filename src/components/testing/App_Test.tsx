//putting this here in case i override the main app.tsx file and forgot what i did to make it work
import Test from './test.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {Test("itmSaasUsers", "ITM Saas Users", " Test.. Does this work?", 0)}
      {Test("itmSaasRetention", "ITM Saas Retention", " Hmm i can have different headings like this... i can get it to return different things pretty easily", 937)}
      {Test("itmSaasVC", "ITM Saas Visual Capture", " Hmm.. it acts a lot like a class instance", 0)}
    </>
  )
}

export default App
