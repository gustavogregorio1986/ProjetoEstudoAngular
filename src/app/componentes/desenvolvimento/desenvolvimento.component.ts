import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-desenvolvimento',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './desenvolvimento.component.html',
  styleUrl: './desenvolvimento.component.css'
})
export class DesenvolvimentoComponent {

  desenvolvimento = 'https://1.bp.blogspot.com/-leJUurbL-D0/Wy6CsZCRJoI/AAAAAAAAKK4/qdS5-PF0ADIQyzzKYj9ixvv2YTt8ip_1ACLcBGAs/s1600/maxresdefault.jpg'
  altDesenvolvimeno = 'desnevolimento evolução'

  planoDesenvolvimento = 'https://www.impacta.com.br/blog/wp-content/uploads/2018/02/Desenvolvimento-pessoal-e-profissional.jpg'
  altDesenvolvimentoProfissional = 'desenvolvimento profissional'
}
