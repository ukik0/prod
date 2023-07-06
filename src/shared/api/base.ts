import axios from 'axios';

import { AUTH_KEY_LS } from '@/shared/constants';

export const apiInstance = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: localStorage.getItem(AUTH_KEY_LS),
    },
});
