//Funcion de botones
document.getElementById("lucBeb").addEventListener("click", () => {
  const section = document.getElementById("drinks");
  section.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("lucPla").addEventListener("click", () => {
  const section = document.getElementById("food");
  section.scrollIntoView({ behavior: "smooth" });
});

//Pop up de los platillos
const info = [
  {
    title: "SALMONE AL LIMONE",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugit unde inventore asperiores? Odit repudiandae alias quas nisi.",
    sizes: "Chico, Mediano, Grande",
    img: "/img/salmone.png",
  },
  {
    title: "INSALATA DI TONNO",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugit unde inventore asperiores? Odit repudiandae alias quas nisi.",
    sizes: "Chico, Mediano, Grande",
    img: "/img/salmone.png",
  },
  {
    title: "FETTUCCINE ALFREDO",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugit unde inventore asperiores? Odit repudiandae alias quas nisi.",
    sizes: "Chico, Mediano, Grande",
    img: "/img/salmone.png",
  },
];

function mealInfo(number) {
  // Crear el elemento <dialog>
  const dialog = document.createElement("dialog");

  // Establecer el contenido del diálogo
  dialog.innerHTML = `
        <div class="dialog-header">
            <h3>${info[number].title}</h3>
            <button class="close-dialog">&times;</button>
        </div>

        <div style="text-align: center; padding-top:2rem">
            <p><strong>Información general</strong></p>
            <p>${info[number].info}</p>
        </div>

        <div style="text-align: center; padding-top:2rem">
            <p><strong>Tamaño</strong></p>
            <p>${info[number].sizes}</p>
        </div>

        <div style="width:100%; display:flex; justify-content:center;">
            <img style="width:70%; padding:1rem;" src="${info[number].img}" alt="Photo"/>
        </div>
  `;

  // Agregar el diálogo al cuerpo del documento
  document.body.appendChild(dialog);

  // Mostrar el diálogo modal
  dialog.showModal();

  // Agregar el evento para cerrar el diálogo
  dialog.querySelector(".close-dialog").addEventListener("click", () => {
    dialog.close();
    dialog.remove(); // Eliminar el diálogo del DOM después de cerrarlo
  });
}
