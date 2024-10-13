import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./Layout"
import { Logo } from "./pages/Logo"
import { Cars } from "./pages/Cars"
import { Motorcycle } from "./pages/Motorcycle"

export const App = () => {
  return (
    <Routes>
      <Route path="/kursova_vntu/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logo" element={<Logo />} />
        <Route path="cars" element={<Cars />} />
        <Route path="motorcycle" element={<Motorcycle />} />
      </Route>
    </Routes>
  )
}
