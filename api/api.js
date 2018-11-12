import {request} from '@/api/http'


export const onGithub = (params) => { return request('/api/weather/city/101030100','GET',params).then(v => v) }
