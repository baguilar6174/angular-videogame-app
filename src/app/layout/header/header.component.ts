import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.searchForm = this.formBuilder.group({
      text: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['search', this.searchForm.get('text').value])
  }

}
