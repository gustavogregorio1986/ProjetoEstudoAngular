import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-crescimentoento',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './crescimentoento.component.html',
  styleUrl: './crescimentoento.component.css'
})
export class CrescimentoentoComponent {

  crescimento = 'https://blog.finofaro.com.br/wp-content/uploads/2018/10/dicas-para-crescimento-profissional.jpg?is-pending-load=1'
  altCrescimento = 'crescimento pessoal e profissional'

  crescer = 'http://www.sbie.com.br/wp-content/uploads/2016/02/1-Crescimento.jpg'
  altCrescer = 'crescente no crescimento'
}
