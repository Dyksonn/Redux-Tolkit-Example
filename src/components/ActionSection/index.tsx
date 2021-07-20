import React from 'react';
import { View, Button } from 'react-native';
import { useReduxDispatch } from '../../hooks';
import { decrementCounter, incrementCounter, randomIncrementCounter, resetCounter } from '../../store/slices/counter';

export function ActionSection() {
    const dispatch = useReduxDispatch()

    const increment = () => dispatch(incrementCounter());

    const decrement = () => dispatch(decrementCounter());

    const reset = () => dispatch(resetCounter());

    const randomIncrement = () => {
        const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

        dispatch(randomIncrementCounter(randomNumber));
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                height: 80,
                justifyContent: 'space-between',
                alignItems: 'baseline',
                paddingHorizontal: 25,
                marginTop: 80
            }}
        >
            <Button
                title="Increment"
                onPress={increment}
            />

            <Button
                title="Decrement"
                onPress={decrement}
            />

            <Button
                title="Reset"
                onPress={reset}
            />

            <Button
                title="Random"
                onPress={randomIncrement}
            />
        </View>
    )
}