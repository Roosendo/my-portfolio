import { createRoot } from 'react-dom/client'
import { PersonalInfo } from './components/PersonalInfo'

const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <div className='container'>
      <PersonalInfo />
      <div className='content'>
        <h1>React App</h1>
        <p>React App</p>
        <p>React App 2</p>
      </div>
    </div>
  </>
)
