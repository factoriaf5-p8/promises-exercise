# PROMESAS

Trabajaremos las promesas con el siguiente ejercicio:
- Crear una función a la que se pasen dos números como argumentos. La función devolverá el cuadrado de la suma.
- Si uno de los números es 0 devolverá un error con el mensaje: "some number is zero"
- Si el resultado de la potencia es mayor que 100 devolverá un error con el mensaje: "power is greater than 100"

## Requisitos

- La suma debe generarse con un retardo de 2s.
- El cuadrado debe generarse con un retardo de 1s.

## Iteración 1
- Crea una función `asyncAddition()` que reciba como argumento dos números.
- Esta función debe devolver el resultado en una promesa.
- La promesa se resuelve con la suma de los parámetros.
- Si algún parámetro es cero la promesa se rechaza con el mensaje "some number is zero"

## Iteración 2
- Crea una función `asyncPower()` que reciba por argumento un número.
- Esta función debe devolver el resultado en una promesa.
- La promesa se resuelve con el cuadrado del número.
- Si el valor del cuadrado supera 100, la promesa se rechaza con el mensaje "power is greater than 100"

## Iteración 3
- Crea una función `powerAddition` que reciba como argumento dos números.
- Esta función debe llamar a la función `asyncAddition()` pasando los parámetros anteriores.
- El resultado de la función anterior debe pasarse a la función `asyncPower()`
- El resultado de la función `asyncPower` se imprimirá por consola.
- Si se genera algún error debe imprimirse también por consola.