export const groupBy = (key, arr) => {
  const options = { weekday: 'short', day: 'numeric' };
  for(let i of arr) {
    i.created_at = new Date(i.created_at.toString())
    i.created_at = i.created_at.toLocaleString('pt-BR', options)
  }
  const agroupedObj = arr.reduce((cache, item) => {
    const property = item[key]
    if(property in cache) {
       return { ...cache, [property]: cache[property].concat(item) }
    }
    return {...cache, [property]: [item]} 
  }, {})
  return agroupedObj
}