import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from '../app/models/appointment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  ngOnInit() {
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  appointments: Appointment[] = [];

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  addAppointment() {
    console.log(this.newAppointmentTitle);
    console.log(this.newAppointmentDate);
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      this.appointments.push({
        id: 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      });
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    
  }
}
