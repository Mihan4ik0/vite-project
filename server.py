from flask import Flask, jsonify
import requests

app = Flask(__name__)

# API, к которому будем делать запросы
ZENQUOTES_API_URL = "https://zenquotes.io/api/quotes"

@app.route('/quotes', methods=['GET'])
def get_quotes():
    try:
        # Отправляем запрос к ZenQuotes API
        response = requests.get(ZENQUOTES_API_URL)

        # Проверяем, успешен ли запрос
        if response.status_code != 200:
            return jsonify({'error': 'Failed to fetch quotes'}), response.status_code

        # Данные от ZenQuotes API
        data = response.json()

        # Преобразуем данные в нужный формат
        quotes = [
            {'id': f"{quote['q']}-{index}", 'text': quote['q'], 'author': quote.get('a', 'Unknown')}
            for index, quote in enumerate(data)
        ]

        return jsonify(quotes)

    except Exception as e:
        # Обрабатываем ошибки
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
