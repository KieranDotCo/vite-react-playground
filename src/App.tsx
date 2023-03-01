import './App.scss'
import ClickMe from './components/ClickMe/ClickMe'
import TypeMe from './components/TypeMe/TypeMe'
import Main from './layouts/Main'

function App() {


  return (
    <div className="App">
      <Main>
        <p>Hello World</p>
        <ClickMe/>
        <TypeMe/>
      </Main>
    </div>
  )
}

export default App
