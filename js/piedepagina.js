function agregarPieDePagina() {
    // Crea un elemento div
    var div = document.createElement("div");
    div.className = "container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5";
    div.style.marginTop = "90px";

    // Contenido del pie de página
    div.innerHTML = `
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand">
                    <h1 class="text-primary"><span class="text-white">JJPLUS</span></h1>
                </a>
                <p>JJPLUS es una empresa dedicada al transporte especializado de pasajeros, comprometida con la
                    excelencia y la satisfacción del cliente. Nuestro servicio se distingue por precios competitivos,
                    magníficas experiencias y una cobertura municipal completa</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Nuestros Servicios</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Transporte especial
                        (pasajeros)</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Turismo</a>
                    <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Servicio de alquiler de
                        vehiculo</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px;">Contáctanos</h5>
                <p><i class="fa fa-map-marker-alt mr-2"></i>¿Dónde estamos ubicados?: <a
                        href="https://maps.app.goo.gl/HuKqhWsPzLX4pusT6" target="_blank">Ver en el mapa <i
                            class="fab fa-google"></i></a></p>
                <p><i class="fa fa-phone-alt mr-2"></i>+57 3106779073 / 3212055021</p>
                <p><i class="fa fa-envelope mr-2"></i>jjpluservices@gmail.com</p>
                <a href="https://wa.me/573106779073" class="btn btn-primary py-md-3 px-md-5 mt-2">Reservar
                    Ahora</a>
            </div>
        </div>
    `;

    // Agrega el pie de página al final del cuerpo del documento
    document.body.appendChild(div);
}

// Llama a la función para agregar el pie de página
agregarPieDePagina();
