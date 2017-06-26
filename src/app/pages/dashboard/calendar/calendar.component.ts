import {Component} from '@angular/core';
import * as jQuery from 'jquery';

import { CalendarService } from './calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss'],
})
export class Calendar {

  calendarConfiguration: any;
  removeCalendarItem: any;
  private _calendar: Object;

  constructor(private _calendarService: CalendarService) {
    /* se setea 'calendarConfiguration' con los datos existentes en el servicio del calendario*/
    this.calendarConfiguration = this._calendarService.getData();
    // this.removeCalendarItem = this._calendarService.removeItem(this._calendar);
    /* de esta forma se configura el evento 'select' que de otra manera 
    debiera ir en el servicio del calendario */
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
    // de esta forma se maneja el evento 'dayClick' presente en fullCalendar
    this.calendarConfiguration.dayClick = (date, jsEvent, view) => this._onDayClick(date, jsEvent, view);
    // this.removeCalendarItem.select = (_calendar, view) => this._onClick(_calendar, view);
    // de esta forma se maneja el evento 'onEventRender', propio del calendario
     this.calendarConfiguration.eventRender = (event, element) => this._onEventRender(event, element);
  }

/**
 * 
 * @param calendar -
 * Carga el calendario cuando sus dependencias estén listas
 */
  onCalendarReady(calendar): void {
    this._calendar = calendar;
  }
/**
 * Metodo Listener de los eventos del calendario
 * @param start - la fecha en que va iniciar el evento
 * @param end - la fecha en que va finalizar el evento
 */
  private _onSelect(start, end): void {

    if (this._calendar != null) {
      const title = prompt('Título evento:');
      let eventData;
      if (title) { //   validación para saber si se ingresó un título
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
  /**
   * 
   * @param date - contiene los datos de la fecha
   * @param jsEvent - evento propio de JS, posee multiples funciones
   * @param view - muestra el tipo de fecha padre (mes, año, dia ..)
   */
  _onDayClick(date, jsEvent, view): void {
    // esto elimina un evento en el calendario
    jQuery(this._calendar).fullCalendar( 'removeEvents', 123 );
    // estas alertas muestran la fecha del dia que fue clickeado en un formato ya predeterminado
    /*alert('Clicked on: ' + date.format());

    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                  
    alert('Current view: ' + view.name);*/
  }

  _onEventRender(event, element): void {
   
  }

  /**
   * return this._calendar as Calendar
   * retorna el objeto '_calendar' casteado al tipo 'Calendar'
   * Nota: se debe recordar que inicialmente se asigno el tipo 'any' a _calendar
   */
  getCalendarInstance(): Calendar {
    return this._calendar as Calendar;
  }

}
