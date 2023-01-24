import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID w6Hn0sN1gyV2EWGt2ktBLJ0w_pjVJAgLPuk9hMqMBBs'
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;