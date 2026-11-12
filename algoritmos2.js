///saludar aprendises///
function saludaraprendises(){
    let aprendises=["Instructor felipe","camilo cedeño","pipito","santiago rojas"," juan tinoco"," juan amarillo","julian vargas","angeli gonzales","andres martinez","juan diego","yen montoya","paula triana"," juan montoya"," johan triviño","Erica escobar","eric gomez","daniel barbosa","danny robles","juanfer luna","richard arias","juan hoyos","leandro pulgar","jonathan gaitan"]
for (let i=0; i < aprendises.length; i++){
    console.log(" hola " + aprendises[i])
}
}

//lista de estudiantes///
function listadeestudiantes(){
    let estudiantes=["camilo","pipito","santiago","tinoco","juan"]
   console.log("lista de estudiantes:");
   console.log(estudiantes);
   //muestra el primer estudiante de la lista//
   console.log("primer estudiante:");
   console.log(estudiantes[0]);
//muestra el tercer estudiante//
console.log("tercer estudiante:");
console.log(estudiantes[2]);
//muestra el ultimo estudiante//
console.log("ultimo estudiante");
console.log(estudiantes[estudiantes.length-1]);
//muestra la cantidad total de estudiantes//
console.log("cantidad de estudiantes");
console.log(estudiantes.length);
//mostrar todos los estudiantes y posiciones//
console.log("estudiantes y posiciones:");
for(let i=0; i<estudiantes.length; i++){
    console.log("posicion"+i+":"+estudiantes[i]);
}
//solicita un nuevo estudiante//
let nuevoestudiante=prompt("ingrese el nombre del nuevo estudiante");
estudiantes.push(nuevoestudiante);
//muestra nuevamente la cantidad de estudiantes//
console.log("nueva cantidad de estudiantes");
console.log(estudiantes.length);
//verifica si el estudiante esta registrado//
let buscarestudiante=prompt("ingrese el nombre del estudiante que desea buscar");
if(estudiantes.includes(buscarestudiante)){
    console.log("el estudiante si se encuentra registrado");
}else{
    console.log("el estudiante no se encuentra registrado");
}

//mostrar el listado actualizado//
console.log("lista actualizada de estudiantes");
console.log(estudiantes);
   
}

//administracion de productos//
function administraciondeproductos(){
    //un arreglo con 5 productos
    let productos=["arroz","leche","pan","huevos","azucar"];
    console.log("1. productos registrados:");
    console.log(productos);
    //modifica el segundo producto//
    productos[1]="yogurt";
    console.log("2. segundo producto modificado:");
    console.log(productos);
    //agregar producto//
    productos.push("aceite");
    console.log("3. producto agregado al final:");
    console.log(productos);
    //agregar un producto al principio de la lista//
    productos.unshift("cafe");
    console.log("4.producto agregado al inicio:");
    console.log(productos);
    //muestra el arreglo actualizado//
    console.log("5. arreglo actualizado:");
    console.log(productos);
    //solicita un producto y verificar si esta registrado//
    let buscar=prompt("ingrese el nombre del producto:");
    let posicion=productos.index0f(buscar);
    if(posicion !==-1){
        console.log("6.el producto si esta registrado:");
        //posicion del producto//
        console.log("7.posicion del producto:",+posicion);
}else{
    console.log("6.el producto no esta registrado.");
}
//modificar otro producto indicando su posicion//
console.log("8.productos disponibles:");
console.log(productos);
let posicionmodificar=Number(prompt("ingrese la posicion del producto que desea modificar(0 a"+(productos.length-1)+"):"));
if (posicionmodificar >= 0 && posicionmodificar < productos.length&& Number.isInteger(posicionmodificar)){
    let nuevonombre =prompt("ingrese el nuevo nombre del producto");
    productos[posicionmodificar]=nuevonombre;
    console.log("8.producto modificado correctamente");
    console.log(productos);
}else{
    console.log("posicion no valida.");
}
//eliminar el ultimo producto//
let eliminado=productos.pop();
console.log("9. ultimo producto eliminado:"+eliminado);
console.log(productos);
//mostrar la cantidad de productos disponibles y el listado final//
console.log("10.cantidad de productos disponibles:"+productos.length);
console.log("listado final de productos:");
console.log(productos);
}

function eliminaciondeelementos(){
    //arreglo de seis ciudades de colombia//
    let ciudades =["bogota","medellin","cali","pereira","manizales","cartagena"];
    //eliminar la ultima ciudad//
    ciudades.pop();
    //mostarle el arreglo actualizado//
    console.log("ciudades:"+ciudades);
    //eliminamos la primer ciudad //
    ciudades.shift();
    //mostrar nuevamente el arreglo//
    console.log("arreglo final:"+ciudades);
}

function arreglodedieznumeros(){
    let numeros =[5,10,-3,8,0,15,-2,6,4,12];
    let suma =0, pares =0, impares=0;
    let positivos =0,negativos =0, ceros=0;
//recorer nueros//
    for(let n of numeros){
        console.log(n);
        suma += n;

        if (n%2===0)pares++;
        else impares++;
        if(n>0)positivos++;
        else if (n<0)negativos++;
        else ceros++; 
    }
        //mostrar resultados//
        let promedio=suma/numeros.length;

        console.log("suma:"+suma);
        console.log("promedio:"+promedio);
        console.log("pares:"+pares);
        console.log("impares:"+impares);
        console.log("mayor:",Math.max(...numeros));
        console.log("menor:",Math.min(...numeros));
        console.log("positivos:"+positivos);
        console.log("negativos:"+negativos);
        console.log("ceros:"+ceros);
        //numeros mayores que el promedio//
        console.log("mayores que el promedio");
        for(let n of numeros){
            if(n>promedio)console.log(n);
        }
        //busca el numero//
        let buscar =Number(prompt("ingrese un numero:"));
        console.log(numeros.incluides(buscar));
        //orden inverso//
        console.log("orden inverso:",[...numeros].reverse());
        console.log("ordenados:",[...numeros].sort((a,b)=>a-b));
        //mostrar el arreglo original//
        console.log("arreglo original",numeros);
      }
     
      function inventarioproductos(){
        
        let nombre="lenovo";
        let marca="lenovo pc";
        let precio="4000000";
        let cantidad="50";

        let nombre2="celular";
        let marca2="moto";
        let precio2="4000000";
        let cantidad2="50";

        const producto={
            nombre:"lenovo",
            marca:"lenovo pc",
            precio:4000000,
            cantidad:50,
        }
console.log(producto.nombre)
console.log(producto)
    }

    //algoritmos de objetos//
    function registroestudiante(){
        let estudiante={
            nombre:"juan",
            apellido:"cedeño",
            edad:18,
            tecnologo:"ADSO",
            ficha:3593362,
            correo:"juancac759@gmail.com",
        };
        console.log(estudiante);
        console.log("nombre:", estudiante.nombre);
        console.log("apellido:",estudiante.apellido);
        console.log("tecnologo:",estudiante["tecnologo"]);
        estudiante.edad=19;
        //agregar ciudad
        estudiante.ciudad="villeta";
        //elimina correo//
        delete estudiante.correo;
        //propiedades//
        for(let propiedad in estudiante){
            console.log("propiedad" + ":" +estudiante[propiedad]);
            //muestra la lista actualizada//
            console.log("estudiante actualizado:", estudiante);
        }

    }

    function gestionarpersona(){
        const persona={
        nombre:"camilo",
        edad:18,
        genero:"masculino",
saludar:function(){
    console.log("hola soy camilo y tengo 18 años:"+ this.nombre + this.edad )
        }
        }
        persona.saludar();
    }

    function gestionarproductos(){
        const producto={
            nombre:"teclado",
            precio:320000,
            cantidad:26,
            mostrarInfo:function(){
                console.log("El producto a gestionar es:" + this.nombre + "el precio del producto es: "+ this.precio + "la cantidad de unidades del producto selelcionado son:" + this.cantidad + "el valor total del inventario son:")
            }

        }
        producto.mostrarInfo();
        console.log("el valor total de inventario" + this.precio*this.cantidad);
    }

    function gestionarempleados(){
        const empleado={
            nombre:"camilo",
            cargo:"jefe",
            salariomensual:300000,
            diastrabajados:24,
            porcentajededescuento:5,
            calcularsalario:function(){
            let preciodeldia=this.salariomensual/30;
            let pagodesalario=preciodeldia*this.diastrabajados;
            return parseInt(pagodesalario);
            },
            calculareldescuento: function(){
                let descuento=this.calcularsalario()*this.porcentajededescuento;
                return parseInt(descuento);
            },
            calculareltotalapagar:function(){
                let total=this.calcularsalario()-this.calculareldescuento();
                console.log("el total a pagar sin el descuento es de:"+this.calcularsalario());
                console.log("erl total con descuento es de:"+this.calculareldescuento());
                console.log("el total neto a pagar con descuento es de:"+total);
            }
        }
        empleado.calculareltotalapagar();
    }

    //gestionar empleado 2//
    function gestionarempleado2(){
        const empleado={
            nombre:prompt("ingrese su nombre señor empleado"),
            cargo:prompt("ingrese el cargo que desempeña"),
            salariomensual:parseInt(prompt("ingrese cual es su salario mensual")),
            diastrabajados:parseInt(prompt("ingrese sus dias trabajado al mes")),
            porcentajedeescuento:0.04,
            calcularelsalario:function(){
                let valordiadetrabajo=this.salariomensual/30;
                let pagodesalario=valordiadetrabajo*this.diastrabajados;
                return parseInt(pagodesalario);
            },
            calculareldescuento:function(){
                let descuento=(this.calcularelsalario)()
                return parseInt(descuento);
            },
            calculareltotalapagar :function(){
                let total=this.calcularelsalario()-this.calculareldescuento();
                alert("el valor total a pagar sin descuento es de:"+this.calculareldescuento)();
                alert("el total del descuento a realizar es de:"+this.calculareldescuento());
                alert("el total neto a pagar con (el descuento):"+total);
            }
        }
        empleado.calculareltotalapagar();
    }
