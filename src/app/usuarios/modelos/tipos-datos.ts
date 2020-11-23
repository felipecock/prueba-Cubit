export interface HttpData {
    data: any;         // Información útil del API REST
    support: any;    // Anexos del API con sugerencia de apoyo económico
}

export interface InfoUsuario {
    id: number;         // Número de identificación del usuario
    email: string;      // Correo electrónico del usuario
    first_name: string; // Nombre(s) del usuario (Ej. 'Juan Manuel')
    last_name: string;  // Apellido(s) del usuario (Ej. 'Pérez', 'López Martínez')
    avatar: string;     // URL que contiene el ID y permite recuperar la frase
}

export interface ListaUsuarios {
    users: Array<InfoUsuario>; // Lista de usuarios con su respectiva información
}
