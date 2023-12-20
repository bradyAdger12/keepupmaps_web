import { makeAutoObservable } from 'mobx'
const localStorageModelName = 'territory'
export class Territory {
  territories: Territory[] = localStorage.getItem(localStorageModelName) ? JSON.parse(localStorage.getItem(localStorageModelName)!).map((item: unknown) => item as Territory) : []
  name: string = '';
  id: string = '';
  color: string = '#2385940';
  note: string | null = null
  constructor() {
    makeAutoObservable(this)
  }

  saveTerritories () {
    localStorage.setItem('territory', JSON.stringify(this.territories.map((territory) => { return { name: territory.name, color: territory.color, note: territory.note, id: territory.id }})))
  }

  clearTerritories () {
    localStorage.removeItem(localStorageModelName)
    this.territories = []
    console.log(this.territories)
  }

  addTerritory({ territory }: { territory: Territory }) {
    this.territories.push(territory);
    localStorage.setItem(localStorageModelName, JSON.stringify(this.territories.map((territory) => { return { name: territory.name, color: territory.color, id: territory.id }})))
  }
}
