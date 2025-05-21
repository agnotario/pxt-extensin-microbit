/**
 * Utilidades para el LED central del micro:bit
 */
//% weight=100 color=#0fbc11 icon="\uf0eb"
namespace centroLed {
    /**
     * Enciende el LED central
     */
    //% block
    export function encender(): void {
        led.plot(2, 2)
        console.log("LED central encendido")
    }

    /**
     * Apaga el LED central
     */
    //% block
    export function apagar(): void {
        led.unplot(2, 2)
        console.log("LED central apagado")
    }
}