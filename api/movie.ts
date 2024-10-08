import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'

const { OMDB_APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body as string)
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200)
    .json(json)
}