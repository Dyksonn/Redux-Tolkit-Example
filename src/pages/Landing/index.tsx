import React from 'react';
import { useCallback } from 'react';
import { View, Text } from 'react-native';
import { ActionSection } from '../../components/ActionSection';
import { useReduxSelector } from '../../hooks';
import { selectCounterValue } from '../../store/slices/counter/selectores';

export function Landing() {
    const counter = useReduxSelector(selectCounterValue);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#19181a' }}>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                backgroundColor: '#7e628c',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 30, color: '#fff'}}>{counter}</Text>
            </View>

            <ActionSection />
        </View>
    )
}