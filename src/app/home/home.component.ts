import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularSearches = ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Lisinopril'];
  
  drugComparisons = [
    { name: 'Amoxilin', pharmacy: 'Pharmacy 1', price: '$5.99', discount:'50%' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 2', price: '$6.99' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 3', price: '$4.99' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 4', price: '$7.99' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 5', price: '$5.49' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 6', price: '$6.49' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 7', price: '$5.79' },
    { name: 'Amoxilin', pharmacy: 'Pharmacy 8', price: '$6.29' },
  ];

  howItWorks = [
    { step: 1, description: 'Duis molestata gravida feugiat. Sed pellentesque lorem vitae at. Etiam egestas tellus a. Nunc faucibus.' },
    { step: 2, description: 'Duis molestata gravida feugiat. Sed pellentesque lorem vitae at. Etiam egestas tellus a. Nunc faucibus.' },
    { step: 3, description: 'Duis molestata gravida feugiat. Sed pellentesque lorem vitae at. Etiam egestas tellus a. Nunc faucibus.' },
  ];

  facts = [
    { value: '75%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { value: '1000+', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { value: 'INR 100+', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  isTorchOn = false;
  mouseX = 0;
  mouseY = 0;

  constructor(private router:Router){

  }
  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  toggleTorch() {
    this.isTorchOn = !this.isTorchOn;
  }

  navigateTo(){
    this.router.navigate(['/discount']);
  }

  pharmacies = [
    { name: 'Pharmeasy', price: 254 },
    { name: 'Netmeds', price: 325 }
  ];
  
}
