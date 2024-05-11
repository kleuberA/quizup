import re
import json

# Abrir o arquivo e ler seu conteúdo
with open('C:\\Users\\kleub\\OneDrive\\Área de Trabalho\\quizup\\src\\components\\questions\\teste.json', 'r') as file:
    data = file.read()

# Usar expressão regular para encontrar todas as correspondências
matches = re.findall(r'"question"\s*:\s*"(.*?)",\s*"A"\s*:\s*"(.*?)",\s*"B"\s*:\s*"(.*?)",\s*"C"\s*:\s*"(.*?)",\s*"D"\s*:\s*"(.*?)",\s*"answer"\s*:\s*"(.*?)"', data)

# Extrair as perguntas, opções e respostas encontradas
questions = []
for match in matches:
    questions.append({
        'question': match[0],
        'options': {
            'A': match[1],
            'B': match[2],
            'C': match[3],
            'D': match[4]
        },
        'answer': match[5]
    })

# Imprimir o resultado
for question in questions:
    print(question)

with open('C:\\Users\\kleub\\OneDrive\\Área de Trabalho\\quizup\\src\\components\\questions\\teste.json', 'w') as file:
    json.dump(questions, file, indent=4)