import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency/model/types';

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Countries
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileStateSchema {
    data?: Profile
    form?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}
