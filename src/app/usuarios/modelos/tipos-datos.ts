export interface HttpData {
    page:number;        // Página actual
    per_page:number;    // Cantidad de Usuarios por página
    total:number;       // Cantidad total de Usuarios
    total_pages:number; // Cantidad total de páginas
    data: any;          // Información útil del API REST
    support: any;       // Anexos del API con sugerencia de apoyo económico
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

export interface tipoPYR {
    numero : number;
    titulo : string;
    pregunta : string;
    respuesta : string;
    verMas : string;
    etiquetas : string;
}
