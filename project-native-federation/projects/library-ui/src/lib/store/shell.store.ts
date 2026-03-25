import { Injectable, signal, computed, Signal, output, Directive } from '@angular/core';
export interface ShellState {
    textoCompartido: string;
    isLoading: boolean;
    topBarTitle: string;
    colorFondo: string;
}

@Injectable({
    providedIn: 'root'
})
//@Directive()
export class ShellStore {
    private state = signal<ShellState>({
        textoCompartido: "Esperando texto...",
        isLoading: false,
        topBarTitle: "Shell Principal",
        colorFondo: "transparent"
    });

    constructor(){
        console.log("ShellStore inicializado");
    }

    public readonly textoCompartido = computed(() => this.state().textoCompartido);
    public readonly isLoading = computed(() => this.state().isLoading);

    public readonly topBarTitle = computed(() => this.state().topBarTitle);
    // onDeModuloAShell = output<string>();
    // onDeShellAModulo = output<string>();

    // public deModuloAShelL(nuevoTexto: string): void{
    //     this.onDeModuloAShell.emit(nuevoTexto);
    // }

    // public deShellAModulo(nuevoTexto: string): void{
    //     this.onDeShellAModulo.emit(nuevoTexto);
    // }

    actualizarTopBarTitle(nuevoTitulo: string): void {
        this.state.update(currentState => ({
            ...currentState,
            topBarTitle: nuevoTitulo
        }));
    }

    public actualizarTexto(nuevoTexto: string): void{
        this.state.update(currentState => ({
            ...currentState,
            textoCompartido: nuevoTexto
        }));
    }

    public readonly colorFondo = computed(() => this.state().colorFondo);

    public actualizarColorFondo(nuevoColor: string): void{
        this.state.update(currentState => ({
            ...currentState,
            colorFondo: nuevoColor
        }));
    }

    public setLoading(status: boolean){
        this.state.update(currentState => ({
            ...currentState,
            isLoading: status
        }))
    }
}
