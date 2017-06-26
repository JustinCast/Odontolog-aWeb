import { Component, Output, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import * as jQuery from 'jquery';
import * as moment from 'moment';
import { Calendar } from './calendar/calendar.component';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
  providers: [Calendar],
})
export class Dashboard {
  // de esta manera se interactua con otro componente
  @ViewChild(Calendar) calendar: Calendar;
  name = 'World';
  
  Constructor(){}

  /**
   * Metodo que se ejecutara cuando el boton eliminar se presione
   */
  onDeleteBtnClick(): void {
    //  se crea una copia local de la unica instancia de objeto 'calendar'
    const proofCalendar = this.calendar.getCalendarInstance();
    jQuery(proofCalendar).fullCalendar( 'removeEvents', 123 );
    // jQuery(this.calendar).fullCalendar( 'removeEvents', 123 );
  }
} 
