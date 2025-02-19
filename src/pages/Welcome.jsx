import { Link } from "react-router-dom"
import "../App.css"
import Button from "../components/atoms/Button"


export default function Welcome() {

  return (
    <>
      <div className="min-h-screen bg-bianco flex flex-col justify-center">
        <header className="text-center">
          <img className="max-w-xs mx-auto" src="src/assets/media/welcome-header.png" alt="img header"/>
          <h1 className="text-5xl font-bold mt-5">Crypto<span className="text-accento">G</span>reen</h1>
        </header>
        <div className="flex flex-col items-center justify-center mt-20">
          <Button to="/login">LOGIN</Button>
        </div>
        <Link to="/register/access-data" className="font-bold text-xl mt-3 flex justify-center">SIGN UP</Link>
      </div>
    </>
  )
}

