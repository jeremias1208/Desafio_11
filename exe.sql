import sqlite3

# Conectando ao banco de dados (ou criando um novo se não existir)
conn = sqlite3.connect('exemplo.db')

# Criando um cursor para executar comandos SQL
cursor = conn.cursor()

# Criando uma tabela chamada "usuarios"
cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
    )
''')

# Inserindo alguns dados na tabela
cursor.execute('INSERT INTO usuarios (nome, email) VALUES (?, ?)', ('João', 'joao@example.com'))
cursor.execute('INSERT INTO usuarios (nome, email) VALUES (?, ?)', ('Maria', 'maria@example.com'))

# Commit das alterações e fechamento da conexão
conn.commit()
conn.close()
