import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Vlad',
      text: 'Prueba de notificación',
      time: '1 min ago'
    },
    {
      name: 'Kostya',
      text: 'Prueba de notificación',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'Prueba de notificación',
      time: '5 hrs ago'
    },
  ];

  private _messages = [
    {
      name: 'Nasta',
      text: 'Prueba de un mensaje privado',
      time: '1 min ago'
    },
    {
      name: 'Vlad',
      text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      time: '2 hrs ago'
    },
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
