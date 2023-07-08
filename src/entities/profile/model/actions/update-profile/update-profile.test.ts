import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { updateProfile } from '@/entities/profile';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';

const data = {
    currency: Currency.RUB,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5wLyzZUPYlpXhD7T2DGZwR6CBnOeZqXohnLIGRcQHw&s',
    city: 'city',
    first: 'firstname',
    username: 'username',
    age: 20,
    country: Countries.Ukraine,
    lastname: 'lastname',
};

describe('update-profile', () => {
    test('success update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, { profile: { form: data } });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, { profile: { form: {} } });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка получения профиля');
    });
});
