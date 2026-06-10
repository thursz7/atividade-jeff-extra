# Create project files and structure to generate a zip file with the scripts and README
os.makedirs("projeto-js-vetores", exist_ok=True)

readme_content = """# Projeto: Exercícios de Estruturas de Repetição e Vetores em JavaScript

Este repositório contém a resolução de três problemas de lógica de programação utilizando JavaScript. Em conformidade com os requisitos solicitados, as soluções foram implementadas utilizando **estruturas de repetição nativas (`for`, `while`)** e **manipulação manual de índices de vetores**, sem o uso de métodos utilitários da API de Arrays do JavaScript (como `push()`, `map()`, `filter()`, `reduce()`, `Math.max()`, etc.).

---

## 📋 Exercícios Desenvolvidos

### 1. Análise de Idades (`exercicio1.js`)
* **Descrição:** Lê a idade de 4 pessoas, armazena-as em um vetor e identifica a maior idade digitada, bem como a posição (índice) onde ela foi informada.
* **Técnica utilizada:** Laço de repetição `for` para varredura e preenchimento, e estruturas condicionais para rastreamento do maior valor e índice.

### 2. Filtro de Funcionários (`exercicio2.js`)
* **Descrição:** Coleta o nome, sexo e salário de 5 funcionários, distribuindo os dados em três vetores paralelos. No final, exibe uma listagem formatada apenas com os dados das funcionárias (mulheres) cujo salário é estritamente superior a R$ 5.000,00.
* **Técnica utilizada:** Sincronização de vetores por meio de um índice compartilhado e filtragem lógica condicional.

### 3. Registro Dinâmico de Alturas (`exercicio3.js`)
* **Descrição:** Permite a inserção contínua de nomes e alturas de pessoas até que o usuário decida encerrar o programa (utilizando o termo "parar"). Exibe a maior e a menor altura registrada, juntamente com o nome dos respectivos donos.
* **Técnica utilizada:** Estrutura `while` para entrada dinâmica, controle manual do tamanho do vetor usando uma variável contadora e busca simultânea de máximos e mínimos.

---

## 🚀 Como Executar os Arquivos

Os scripts utilizam a interface nativa `readline` do Node.js para interação via terminal. Certifique-se de ter o Node.js instalado em sua máquina.

1. Abra o terminal na pasta do projeto.
2. Execute o arquivo desejado utilizando o comando: