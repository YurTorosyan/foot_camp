const API_KEY = import.meta.env.VITE_API_KEY

export default function options(url, params) {
  const option = {
    method: "GET",
    url: `https://v3.football.api-sports.io/${url}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "v3.football.api-sports.io",
    },
  }
  return option
}
