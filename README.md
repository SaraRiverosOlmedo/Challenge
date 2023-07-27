# Luna Pets Developer Challenge V1.0

# English

  Table of Contents
  <ol>
    <li>
      <a href="#your-mission-should-you-choose-to-accept-it">The Mission</a>
      <ol>
        <li>
          <a href="#objectivegoal">Objective / Goal</a>
        </li>
        <li>
          <a href="#features">Features</a>
          <ol>
            <li>
              <a href="#application-features">Application Features</a>
            </li>
            <li>
              <a href="#api-features">API Features</a>
            </li> 
          </ol>
        </li>
      </ol>
      <li>
        <a href="#assumptions-constraints-and-dependencies">Assumptions, Constraints, and Dependencies</a>
      </li>
    </li>
  </ol>

## Your mission, should you choose to accept it.

### Objective/Goal:

Design an application that allows pet owners (customers) to see their pet's services (pet walking or pet sitting) and pay for it.

### Features: 

<!-- App Features -->
#### Application Features
<details>
  <summary>Autenticación de usuarios</summary>
  <ul>
  <li><b>Description</b>: A user should be able to enter their email as a username and log in to the application</li>
  <li><b>Goal</b>: Allow users to return to the application and view their data</li>
  <li><b>User Story</b>: As a user I would like to enter my email on a login page and then be redirected to a dashboard showing my services</li>
  </ul>
</details>
<details>
  <summary>Mostrar los servicios de un usuario</summary>
  <ul>
  <li><b>Description</b>: After a user has logged in, they should be presented with a list of their services.</li>
  <li><b>Goal</b>: Show the user their past services, as well as calling out any services that are pending payment.</li>
  <li><b>User Story</b>: As a user I should see all of my services as well as distinguished items letting me know that I have a pending payment for a service.</li>
  </ul>
</details>
<details>
  <summary>Permitir que un usuario pague por un servicio</summary>
  <ul>
  <li><b>Description</b>: If a service is flagged as payment required, the user should be able to pay for the service.</li>
  <li><b>Goal</b>: Allow the user to pay for a service using their debit or credit card.</li>
  <li><b>User Story</b>: As a user I would like the ability to pay for my past services with my credit or debit card of choice.</li>
  </ul>
</details>

<!-- API Features -->
#### API Features
<details>
  <summary>User Services</summary>
    <ul>
  <li><b>Method</b>: GET</li>
  <li><b>Parameters</b>: User Email</li>
  <li><b>Returns</b>: An array of services related to a user.</li>
  </ul>
</details>
<details>
  <summary>Pay for service</summary>
    <ul>
  <li><b>Method</b>: PATCH</li>
  <li><b>Parameters</b>: Service ID</li>
  <li><b>Returns</b>: The updated resource or an error.</li>
  </ul>
</details>

## Assumptions, Constraints, and Dependencies: 

- For authentication you can assume that a provider is in place. For the purpose of this challenge, you need to only accept an email to pass authentication.
- Data may be static at the time of server start. You are not required to stand up a persistence layer for the exercise.
- The management of the client application status is free to choose, however it will be appreciated if you use Bloc for flutter and Redux for react.
- You may use any other third party library you see fit for the challenge.
- Sensitive information during payments should be masked.
- You can assume that a third party payment processor is being used. In this exercise you need to only mark a service as paid when submitting the payment details.

You are encouraged to ask questions throughout your progress, we are all here to help and want you to be as successfull as possible.

# Español

  Índice
  <ol>
    <li>
      <a href="#tu-misión-si-decides-aceptarla">La misión</a>
      <ol>
        <li>
          <a href="#objetivo">Objetivo</a>
        </li>
        <li>
          <a href="#funciones">Funciones</a>
          <ol>
            <li>
              <a href="#funciones-de-la-aplicación">Funciones de la aplicación</a>
            </li>
            <li>
              <a href="#funciones-de-la-api">Funciones de la API</a>
            </li> 
          </ol>
        </li>
      </ol>
      <li>
        <a href="#supuestos-limitaciones-dependencias">Supuestos, limitaciones y dependencias</a>
      </li>
    </li>
  </ol>

## Tu misión, si decides aceptarla.

### Objetivo:

Diseñar una aplicación que permita a los dueños de mascotas (clientes) ver los servicios de su mascota (pasearla o cuidarla) y pagar por ellos.

### Funciones: 

#### Funciones de la aplicación
<details>
  <summary>User Authentication</summary>
  <ul>
  <li><b>Descripción</b>: Un usuario debe poder introducir su correo electrónico como nombre de usuario e iniciar sesión en la aplicación.</li>
  <li><b>Objetivo</b>:Permitir a los usuarios volver a la aplicación y ver sus datos</li>
  <li><b>Historia de usuario</b>: Como usuario, me gustaría introducir mi correo electrónico en una página de inicio de sesión y, a continuación, ser redirigido a un panel que muestre mis servicios.</li>
  </ul>
</details>
<details>
  <summary>Display a users services</summary>
  <ul>
  <li><b>Descripción</b>: Después de que un usuario haya iniciado sesión, se le presentará una lista de sus servicios.</li>
  <li><b>Objetivo</b>: Muestre al usuario sus servicios anteriores, así como los servicios pendientes de pago.</li>
  <li><b>Historia de usuario</b>: Como usuario debería ver todos mis servicios, así como los elementos distinguidos que me permiten saber que tengo un pago pendiente por un servicio.</li>
  </ul>
</details>
<details>
  <summary>Allow a user to pay for a service</summary>
  <ul>
  <li><b>Descripción</b>: Si un servicio está marcado como de pago, el usuario debe poder pagar por él.</li>
  <li><b>Objetivo</b>: Permitir al usuario pagar un servicio con su tarjeta de débito o crédito.</li>
  <li><b>Historia de usuario</b>: Como usuario, me gustaría poder pagar mis servicios anteriores con mi tarjeta de crédito o débito preferida.</li>
  </ul>
</details>

#### Funciones de la API
<details>
  <summary>Servicios del usuario</summary>
    <ul>
  <li><b>Método</b>: GET</li>
  <li><b>Parámetros</b>: User Email</li>
  <li><b>Retorna</b>: Una lista de servicios relacionados con un usuario.</li>
  </ul>
</details>
<details>
  <summary>Pago del servicio</summary>
    <ul>
  <li><b>Método</b>: PATCH</li>
  <li><b>Parámetros</b>: Service ID</li>
  <li><b>Retorna</b>: El recurso actualizado o un error.</li>
  </ul>
</details>

## Supuestos, limitaciones y dependencias:

- Para la autenticación se puede asumir que un proveedor está en su lugar. Para el propósito de este ejercicio, sólo necesita aceptar un correo electrónico para pasar la autenticación.
- Los datos pueden ser estáticos en el momento de iniciar el servidor. No es necesario montar una capa de persistencia para el ejercicio.
- La gestión del estado de la aplicación cliente es de libre elección, sin embargo se valorará que utilices Bloc para flutter y Redux para react.
- Puedes utilizar cualquier otra librería de terceros que consideres oportuna para el reto.
- La información sensible durante los pagos debe ser enmascarada.
- Puedes asumir que se está utilizando un procesador de pagos de terceros. En este ejercicio sólo debes marcar un servicio como pagado cuando envíe los detalles del pago.

Te animamos a hacer preguntas a lo largo de tu progreso, todos estamos aquí para ayudar y queremos que tengas el mayor éxito posible.