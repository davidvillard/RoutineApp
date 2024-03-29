from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app= Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

@app.route('/')
def root():
    return "Ejercicios Gym"



''' 
GET -> obtener informacion
POST -> Crear informacion
PUT -> Actualizar informacion
DELETE -> Borrar informacion
'''

'''
De alguna manera tengo que almacenar las imagenes en una carpeta y trabajarlas desde esta misma, para no coger fotos de internet.
'''

ejercicios = [
    {'id': 1, 'nombre': 'Sentadillas', 'imagen': '../img/sentadillas.jpg'},
    {'id': 2, 'nombre': 'Flexiones','imagen': '../img/flexiones.jpg'},
    {'id': 3, 'nombre': 'Plancha','imagen': '../img/plancha.jpg'},
    {'id': 4, 'nombre': 'Jalon al Pecho Con Agarre Abierto','imagen': '../img/jalon-pecho-abierto.jpg'},
    {'id': 5, 'nombre': 'Press de Banca','imagen': '../img/press-banca.jpg'},
    {'id': 6, 'nombre': 'Pull-ups','imagen': '../img/pull-ups.jpg'},
    {'id': 7, 'nombre': 'Press Militar','imagen': '../img/press-militar.jpg'},
    {'id': 8, 'nombre': 'Zancadas','imagen': '../img/zancadas.jpg'},
    {'id': 9, 'nombre': 'Fondos en Paralelas','imagen': '../img/fondos-paralelos.jpg'},
    {'id': 10, 'nombre': 'Curl de Bíceps','imagen': '../img/curl-biceps.jpg'},
    {'id': 11, 'nombre': 'Extensiones de Tríceps','imagen': '../img/extension-triceps.jpg'},
    {'id': 12, 'nombre': 'Abdominales','imagen': '../img/abdominales.jpg'},
    {'id': 13, 'nombre': 'Burpees','imagen': '../img/burpees.jpg'},
    {'id': 14, 'nombre': 'Dorsales','imagen': '../img/dorsales.jpg'},
    {'id': 15, 'nombre': 'Aperturas de Pecho','imagen': '../img/aperturas-pecho.jpg'},
    {'id': 16, 'nombre': 'Elevaciones Laterales','imagen': '../img/elevaciones-laterales.jpg'},
    {'id': 17, 'nombre': 'Crunches','imagen': '../img/crunches.jpg'},
    {'id': 18, 'nombre': 'Deadlift','imagen': '../img/deadlift.jpg'},
    {'id': 19, 'nombre': 'Remo con Barra','imagen': '../img/remo-barra.jpg'},
    {'id': 20, 'nombre': 'Curl con Barra Z','imagen': '../img/curl-barra-z.jpg'}
]

#Ruta que obtiene los ejercicios, cuando hagamos una peticion http a /ejercicios nos dara los ejercicios almacenados en nuestra API
@app.route('/ejercicios', methods=['GET'])
def get_ejercicios():
   return jsonify({'ejercicios': ejercicios}) # Retorna una respuesta JSON

    

if __name__ == "__main__":
    app.run(debug=True)