export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=S3oMj80CZ9i45fd9HYHPOEbq8zwsxEJJ&q=${ category }&limit=10`
    const resp = await fetch( url );
    const {data } = await resp.json();

    const gifs = data.map( (gif) => ({
        id : gif.id,
        title : gif.title,
        url : gif.images.downsized_medium.url
    }));

    return gifs
}