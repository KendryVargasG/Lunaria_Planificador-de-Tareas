// Elementos del Formulario

const formularioTarea  = document.querySelector("#formularioTarea");
const nombreTarea      = document.querySelector("#NombreTarea");
const descripcionTarea = document.querySelector("#DescripcionTarea");
const categoriaTarea   = document.querySelector("#CategoriaTarea");
const estadoTarea      = document.querySelector("#EstadoTarea");
const prioridadTarea   = document.querySelector("#PrioridadTarea");
const fechaTarea       = document.querySelector("#FechaTarea");
const alertaError      = document.querySelector("#alertaError");

// Función de Validación

function validFormFieldInput(data) {

    if (
        data.nombre === "" ||
        data.descripcion === "" ||
        data.estado === "" ||
        data.fecha === ""
    ) {

        return false;

       }

    return true;
}


// Evento 

formularioTarea.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();

        const datosFormulario = {

            nombre:
            nombreTarea.value.trim(),

            descripcion:
            descripcionTarea.value.trim(),

            categoria:
            categoriaTarea.value,

            estado:
            estadoTarea.value,

            prioridad:
            prioridadTarea.value,

            fecha:
            fechaTarea.value

        };

        console.log(datosFormulario);

        const datosValidos =
            validFormFieldInput(datosFormulario);

            if (!datosValidos) {

                alertaError.classList.remove(
                    "d-none"
                );

            } else {

                alertaError.classList.add(
                    "d-none"
                );

            }

        console.log(
            "¿El Formulario es Válido?",
            datosValidos
        );

    }
);
