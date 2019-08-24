import { Component, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  startAt: Date;



  isImmediate = false;

  constructor(private renderer: Renderer2) {

    let today = new Date();

    let day = today.getDay();
    let month = today.getMonth() + 1;
    let year = today.getUTCFullYear();

    this.startAt = new Date(year, month, day);
  }

  monthSelected(date) {
    alert(`Selected: ${date}`);
  }

  onDateChanged(date) {
    alert(`Selected: ${date}`);
  }

  ngAfterViewInit() {
    // Find all arrow buttons in the calendar
    let previousButtons = document.querySelectorAll('.mat-calendar-previous-button');

    if (previousButtons) {
      // Listen for click event

      this.renderer.listen(previousButtons[0], "click", () => {
        if (!this.isImmediate) {
          this.isImmediate = true;
          previousButtons[1].dispatchEvent(new CustomEvent('click'));
        } else {
          this.isImmediate = false;
        }
      });

      this.renderer.listen(previousButtons[1], "click", () => {
        if (!this.isImmediate) {
          this.isImmediate = true;
          previousButtons[0].dispatchEvent(new CustomEvent('click'));
        } else {
          this.isImmediate = false;
        }
        //alert('Previous button clicked');

      });


    }

    let nextButtons = document.querySelectorAll('.mat-calendar-next-button');

    if (nextButtons) {
      // Listen for click event

      this.renderer.listen(nextButtons[0], "click", () => {

        if (!this.isImmediate) {
          this.isImmediate = true;
          nextButtons[1].dispatchEvent(new CustomEvent('click'));
        } else {
          this.isImmediate = false;
        }
        // alert('Next button clicked');

      });

      this.renderer.listen(nextButtons[1], "click", () => {

        if (!this.isImmediate) {
          this.isImmediate = true;
          nextButtons[0].dispatchEvent(new CustomEvent('click'));
        } else {
          this.isImmediate = false;
        }
        // alert('Next button clicked');

      });


    }
  }
}
