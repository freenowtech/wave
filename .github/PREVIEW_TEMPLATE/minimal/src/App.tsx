import { useState } from 'react';
import './App.css';
import { Button } from '@freenow/wave/experimental';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button onPress={() => setCount(count => count + 1)}>count is {count}</Button>
        </>
    );
}

export default App;
