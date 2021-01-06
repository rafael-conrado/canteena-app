import useSwr from 'swr'
import api from '../services/api.js'

export default function Fetcher(url) {
    const { data, mutate } = useSwr(url, async url => {
        const response = await api.get(url)
        return response.data
    }, {
        refreshInterval: 1000
    })
    return { data, mutate }
}