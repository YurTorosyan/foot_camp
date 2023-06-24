import React from "react"
import { useEffect } from "react"
import axios from "axios"
const API_KEY = import.meta.env.VITE_API_KEY
export default function Home() {
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures",
      params: { live: "all" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "v3.football.api-sports.io",
      },
    }
    async function fetchData() {
      try {
        const response = await axios.request(options)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga neque
      eaque accusamus veritatis accusantium qui cupiditate expedita. Natus,
      nemo.
    </div>
  )
}
