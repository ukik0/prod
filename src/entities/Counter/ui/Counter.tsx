import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '@/entities/Counter';
import { getCounterValue } from '@/entities/Counter/model/selectors';
import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(counterActions.increment());
    };

    const handleDec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="Counter">
                value:
                {counterValue}
            </h1>
            <Button data-testid="increment" onClick={handleInc}>Inc</Button>
            <Button data-testid="decrement" onClick={handleDec}>Dec</Button>
        </div>
    );
};
