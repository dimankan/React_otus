import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

export function FunctionComponent() {
  const [input, setInput] = useState<string>('Сюда нужно ввести адрес API');
  const [output, setOutput] = useState<string>('Тут будет результат');
  const [isSuccessResponse, setIsSuccessResponse] = useState<boolean>(true);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(input);
      setOutput(response.data.fact);
      setIsSuccessResponse(true);
    } catch (error) {
      let errorMessage = 'Произошла ошибка при выполнении запроса';

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Сервер ответил с ошибкой
          errorMessage = `Ошибка сервера: ${error.response.status} - ${error.response.statusText}`;
        } else if (error.request) {
          // Запрос был сделан, но ответ не был получен
          errorMessage = 'Сервер не ответил на запрос';
        } else {
          // Что-то случилось при настройке запроса
          errorMessage = 'Ошибка в настройке запроса';
        }
      } else {
        errorMessage = 'Неизвестная ошибка';
      }
      setOutput(errorMessage);
      setIsSuccessResponse(false);
    }
  };

  //#region цвет текста
  const styleOutputOk = { color: 'black' };
  const styleOutputBad = { color: 'red' };

  const getStyleOutput = () => {
    return isSuccessResponse ? styleOutputOk : styleOutputBad;
  };
  //#endregion

  return (
    <div>
      <div>
        <label>
          Сюда url который вернет json: <input name="myInput" onChange={handleInput} />
        </label>
        <br />
        <button onClick={handleButtonClick}>Отправить</button>
      </div>
      <div>
        <p style={getStyleOutput()}>Ответ от API: {output}</p>
      </div>
    </div>
  );
}
