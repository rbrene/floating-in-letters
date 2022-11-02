import React from 'react';


export default function useLetters(text: string) {
    return text.split('');
}