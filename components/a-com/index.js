import React, { useState } from 'react';
import { View, Text, Button } from "react-native";

function ACom(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCount(count + 1)
        }, 100);
    };
    return (
        <View>
            <Text>{count}</Text>
            <Button title="Press me"
                onPress={handleClick} />
        </View>
    );
}

export default ACom;
