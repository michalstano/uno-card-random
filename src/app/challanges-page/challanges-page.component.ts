import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-challanges-page',
  template: ` <div class="description">{{ challenges[number - 1] }}</div> `,
  styleUrls: ['./challanges-page.component.scss'],
})
export class ChallangesPageComponent implements OnInit {
  number = 0;
  challenges: string[] = [
    'Następny gracz musi ciągnąć karty do chwili wyciągniecia karty w określonym kolorze.',
    'Wszyscy poza Tobą muszą wyrzucić swoje karty specjalne.',
    'Jeśli następny gracz nie może wyłożyć karty, bierze 3 karty ze stosu losowania.',
    'Rozegraj dodatkową kolejkę.',
    'Następny gracz musi wziąć lub wyrzucić tyle kart, aby mieć 7 kart w ręku.',
    'Wszyscy gracze muszą wyrzucić lub wziąć tyle kart, aż będą mieli tylko po 3 karty.',
    'Wszyscy muszą grać z odkrytymi kartami, aż do następnej kolejki.',
    'Opowiedz dowcip. Jeśli nikt nie zaśmieje się weż 4 karty. Jeżeli ktoś się zaśmieje, wyrzuć tyle kart, by zostawić sobie tylko jedną. (pamiętaj aby krzyknąć UNO)',
    'Następny gracz nie może zgiąć łokci do chwili, aż ktoś krzyknie UNO.',
    'Następny gracz musi zaprezentować pianie koguta albo wziąć 4 karty.',
  ];

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  @HostListener('click') generateRandomNumber(): void {
    if (this.number === 0) {
      this.number = this.getRandomNumber();
    } else {
      let generatedNumber;
      do {
        generatedNumber = this.getRandomNumber();
      } while (generatedNumber === this.number);

      this.number = generatedNumber;
    }
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * this.challenges.length) + 1;
  }
}
