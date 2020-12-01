# Generar Build

Actualizar el build de _producción_ con _referencias vinculadas_ al dominio donde se hospedará el aplicativo.

    ng build --prod --base-href https://felipecock.github.io/prueba-Cubit/


# Publicar

Publicar el aplicativo automáticamente en la rama gh-pages del proyecto, directamente en el repositiorio remoto GitHub.

    ngh --dir=dist/prueba-Cubit
