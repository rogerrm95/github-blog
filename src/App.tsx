import { BrowserRouter } from "react-router-dom"
import { GithubContextProvider } from "./contexts/GithubUserContext"
import { Router } from "./router"

function App() {

  return (
    <GithubContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GithubContextProvider>
  )
}

export default App
