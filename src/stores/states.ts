import { makeAutoObservable } from 'mobx' 
import { Map } from 'mapbox-gl';
export class State {
  states: State[] = localStorage.getItem('states') ? JSON.parse(localStorage.getItem('states')!).map((item: unknown) => item as State) : []
  name: string | null = null;
  id: string | number | undefined = undefined;
  userId: string | null = null
  constructor() {
    makeAutoObservable(this)
  }
  clearStates ({ map }: { map?: Map | null }) {
    for (const state of this.states) {
      map?.setFeatureState({
        source: 'states',
        id: state.id,
      }, {
        clicked: false
      });
    }
    localStorage.removeItem('states')
    this.states = []
  }

  addState({ state }: { state:  State }) {
    this.states.push(state);
    localStorage.setItem('states', JSON.stringify(this.states.map((item) => { return { name: item.name, id: item.id, userId: item.userId }})))
  }
}
