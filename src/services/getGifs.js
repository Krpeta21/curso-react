const apiKey= '9cl80wYwhwQS2ItqD0ZcAfNryd0XipSP'

export default function getFifs({keyword='anime' }={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res=>res.json())
    .then(response => {
      const {data =[]} = response
      if(Array.isArray(data)){
        const gifs = data.map(image => image.images.downsized_medium.url)
        console.log(gifs)
        return gifs
      }
    })
  }
