
import NavBar from './components/NavBar'
import HomePage from './Pages/Home_page'


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <NavBar/>
        <main className="flex-grow ">
          <HomePage />
        </main>
      </div>
    </>
  )
}

export default App
