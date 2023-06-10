/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */


  fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  })
  .then(data => {
    const primerObjeto = data[3]; 

    // Imprimir el primer objeto en HTML
    const proyectoPrincipal = document.getElementById('proyectoPrincipal');
    proyectoPrincipal.innerHTML = proyectoHtml(primerObjeto);

    // imprimir los otros 3 objetos en HTML
    const segundoObjeto= data[2];
    const tercerObjeto=data[1]
    const proyectosSecundarios= document.getElementById('proyectosSecundarios');
    proyectosSecundarios.innerHTML=proyectoSecHtml(primerObjeto) + proyectoSecHtml(segundoObjeto) +proyectoSecHtml(tercerObjeto);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  const proyectoHtml = (proyecto) => {
    return `<h1>${proyecto.name}</h1>
            <div id="encabezadoProyecto">
                <h4>${proyecto.description}</h4>
                <h5>Completed on: ${proyecto.completed_on}</h5>
            </div>
            <div id="imagenProyecto">
            </div>
            <p>${proyecto.content}</p>`;
  };

  const proyectoSecHtml=(proyecto)=> {
    return `
            <div id= "otrosProyectos">
              <img src="${proyecto.image}" alt="dibujo">
              <h4>${proyecto.name}</h4>
              <h5>${proyecto.description}</h5>
              <a href="project.html">Learn more</a>
            </div>`
  
  }

 