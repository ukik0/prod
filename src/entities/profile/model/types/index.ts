import { Countries, Currency } from '@/shared/constants';

export interface Profile {
    first: string
    lastname: string
    age: number
    currency: Currency
    country: Countries
    city: string
    username: string
    avatar: string
}

export interface ProfileStateSchema {
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}
