export const fetchCharacters = async ({ page } = { page: 1 }) => {
  let data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  return await data.json()
}

export const fetchSingleCharacter = async ({ id }) => {
  if (!id) return null
  let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return await data.json()
}