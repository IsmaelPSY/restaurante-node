# Restaurant

![https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy](https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy)


## Endpoints Customer (Sólo administradores)

- [ ]  /users/:uuid/customer (GET) Obtener los datos del cliente asociado (la dirección y su método de pago por defecto)
- [ ]  /users/:uuid/customer (POST) Agregar los datos del cliente para el usuario asociado.
- [ ]  /customer/:uuid (PUT) Actualizar los datos del cliente
- [ ]  /customer/:uuid/address (GET) Obtén todas las direcciones del cliente.
- [ ]  /customer/:uuid/address/:uuid (GET) Obtén una dirección del cliente por su uuid
- [ ]  /customer/:uuid/address (POST) Agregar direcciones para el cliente.
- [ ]  /customer/:uuid/address/:uuid (PUT) Actualiza una dirección para el cliente.
- [ ]  /customer/:uuid/address/:uuid (DELETE) Borra una dirección para el cliente.
