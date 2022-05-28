
class Licuadora {
  encendida = false;
  licuadoraElement = document.querySelector("#licuadora");
  sonidoLicuadoraElement = document.querySelector("#licuadora-sonido");
  sonidoBotonElement = document.querySelector("#licuadora-boton-sonido");
  infoElement = document.querySelector("#licuadora-info");
  botonElement = document.querySelector("#licuadora-boton");

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.botonElement.addEventListener('click', () => {
      this.toggleLicuadora();
    });
  }

  toggleLicuadora = () => {
    this.encendida = !this.encendida;
    this.hacerRuido();
    if (this.encendida) {
      this.licuadoraElement.classList.add("activa");
      this.mostrarInformacion();
      return;
    }
    this.licuadoraElement.classList.remove("activa");
    this.borrarInfo();
  }

  borrarInfo = () => {
    return this.infoElement.innerHTML = "";
  };

  hacerRuido = () => {
    return this.sonidoLicuadoraElement.paused
      ? this.ejecutarSonido()
      : this.pararSonido();
  };

  ejecutarSonido = () => {
    this.sonidoBotonElement.play();
    this.sonidoLicuadoraElement.play();
  };

  pararSonido = () => {
    this.sonidoBotonElement.play();
    this.sonidoLicuadoraElement.pause();
    this.sonidoLicuadoraElement.currentTime = 0;
  };

  mostrarInformacion = () => {
    let info = `
      <p>Marca: <b>${this.marca}</b></p>
      <p>Modelo: <b>${this.modelo}</b></p>
    `;
    this.infoElement.innerHTML = info;
  };

}

let licuadora = new Licuadora("Phillips", "MGA-500");
