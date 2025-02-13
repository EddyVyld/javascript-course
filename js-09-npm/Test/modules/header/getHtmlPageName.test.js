


// test("descripción de la prueba", ()=>{})

import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName";



test("Deberia retornar el nombre de la pagina html", ()=>{
    
    const filePath = "src/pages/home.html"; // Ruta de un archivo
    const expected = "home.html"; // Lo que esperamos obtener
    
    const result = getHtmlPageName( filePath );
  
    expect( result ).toBe( expected ); // Comparamos el resultado con lo esperado

})