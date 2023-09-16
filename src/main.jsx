import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <div className='container'>
      <h3>React App</h3>
      <div className='content'>
        <h1>React App</h1>
        <p>React App</p>
        <p>React App 2</p>
      </div>
    </div>
  </>
)
