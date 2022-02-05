import React from 'react';
import './Case.css'
import { useRef } from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { consonants, endings } from './const';

 const Case = () => {
    const [word, setWord] = useState()
    const [result, setResult] = useState()
    const caseArr = useRef()

    const getEnding = () => {
        const reverceWord = word.split('').reverse()
        const ending = []
        for (let i = 0; i < reverceWord.length; i++) {
            if (consonants.indexOf(reverceWord[i]) !== -1) {
                break
            }
            ending.push(reverceWord[i])
        }
        return ending.reverse().join('')
    }

    const changeCase = () => {
        const ending = getEnding()
        const caseValue = caseArr.current.value
        const newWord = word.split('')
        newWord.splice((newWord.length - ending.length), ending.length)
        newWord.push(endings[ending][caseValue])
        return setResult(newWord.join(''))
    }

  return (
    <Form className="form-case">
        <Form.Group className="mb-3">
            <Form.Label>Введите слово</Form.Label>
            <Form.Control placeholder="Папа" value={word} onChange={(e) => setWord(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Выберите падеж</Form.Label>
            <Form.Select ref={caseArr}>
                <option>Именительный</option>
                <option>Родительный</option>
                <option>Дательный</option>
                <option>Винительный</option>
                <option>Творительный</option>
                <option>Предложный </option>
            </Form.Select>
            <Form.Group className="mt-3">
                <Form.Label>Преобразованное слово</Form.Label>
                <Form.Control value={result}/>
            </Form.Group>
            <Button className="form-case__button" variant="primary" onClick={() => changeCase()}>
                Преобразовать
            </Button>
        </Form.Group>
    </Form>
  )

}

export default Case
