import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import { StateSchema } from '@/app/providers/Store';

type ActionCreator<Returned, ThunkArg, ThunkApiConfig> = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: ThunkApiConfig }>

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    actionCreator: ActionCreator<Returned, ThunkArg, ThunkApiConfig>;

    constructor(actionCreator: ActionCreator<Returned, ThunkArg, ThunkApiConfig>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
