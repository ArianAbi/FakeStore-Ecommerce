import { useEffect } from "react"
import Router from "next/router"

export default function LandingPage() {
  useEffect(() => {
    Router.replace("/products")
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-black">
      <h2 className="text-4xl">
        Landing Page
      </h2>
      <a
        className="text-cyan-400 text-lg underline"
        href="/products"
      >
        visit /products or click on this link
      </a>
    </div>
  )
}