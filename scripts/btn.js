//Funcion de botones
document.getElementById('lucBeb').addEventListener('click', ()=>{
    const section = document.getElementById('drinks');
    section.scrollIntoView({ behavior: 'smooth' });
});


//Pop up de los platillos
document.getElementById('meal').addEventListener('click', () => {
    const showMeals = document.getElementById('show-meal');
    showMeals.innerHTML = `
    <dialog id="meal-dialog">
        <div class = "dialog-header">
            <h3>SALMONE AL LIMONE</h3>
            <button id="close-dialog">&times;</button>
        </div>

        <div>
            <p><strong>Tamaño</strong></p>
            <p>Mediano</p>
        </div>

        <div>
            <img src="/img/salmone.png" alt="Photo"/>
        </div>
    </dialog>
    `;
    const dialog = document.getElementById('meal-dialog');
    dialog.showModal();

    document.getElementById('close-dialog').addEventListener('click', () => {
        dialog.close();
    });
});
