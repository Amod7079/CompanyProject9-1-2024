import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {
name="Amod Kumar Sah"

convertToUpperCase(value:any)
{
return value.toUpperCase();
}
  constructor() { }

  ngOnInit(): void {
  }

}
