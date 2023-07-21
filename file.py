from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def mostrar_tabela():
    # Conectar ao banco de dados
    conn = sqlite3.connect('exemplo.db')
    cursor = conn.cursor()

    # Obter os dados da tabela
    cursor.execute('SELECT * FROM usuarios')
    dados = cursor.fetchall()

    # Fechar a conexão com o banco de dados
    conn.close()

    # Renderizar a página HTML com os dados da tabela
    return render_template('tabela.html', dados=dados)

if __name__ == '__main__':
    app.run()
