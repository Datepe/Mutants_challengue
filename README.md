# Instrucciones para uso de API

Metodo: POST\
Url: https://3ths5d6aok.execute-api.us-east-1.amazonaws.com/Prod/mutant \
Body: {
"dna": ["ATGCGA","CAGTGC","TTCTCT","AGAAGG","CTCCTA","TCACTG"]
}\
Descripcion: endpoint para verificar si el adn pertenece a un mutante o a un humano;

Metodo: GET\
Url: https://3ths5d6aok.execute-api.us-east-1.amazonaws.com/Prod/stats \
Descripcion: endpoint para ver las stats;

# Datos para conexion a la Base de datos en rds 

Host: mutansdb.cgdw3jx4fsqt.us-east-1.rds.amazonaws.com \
Password: mutantes123 \
User: root \
DB name: mutantes

