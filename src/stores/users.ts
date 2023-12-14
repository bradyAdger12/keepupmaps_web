import { makeAutoObservable } from 'mobx'
export class User {
  users: User[] = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!).map((item: unknown) => item as User) : []
  name = '';
  color = '#2385940';
  constructor() {
    makeAutoObservable(this)
  }

  clearUsers () {
    localStorage.removeItem('users')
    this.users = []
    console.log(this.users)
  }

  addUser({ user }: { user: User }) {
    console.log(localStorage.getItem('users'))
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users.map((item) => { return { name: item.name, color: item.color }})))
  }
}
