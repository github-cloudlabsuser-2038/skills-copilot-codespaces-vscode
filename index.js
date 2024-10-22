import { useState } from 'react';

const data = [
    [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
    [{ name: 'Bob', age: 20 }]
];

const names = data.flat().map(person => person.name);
console.log(names); // ['John', 'Jane', 'Bob']

import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        const reversedSentence = reverseAndCapitalize(event.target.value);
        setMarkdown(reversedSentence);
    };

    const reverseAndCapitalize = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}