import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-estudo',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './estudo.component.html',
  styleUrl: './estudo.component.css'
})
export class EstudoComponent {

  dedicacao = 'https://3.bp.blogspot.com/-R1DywVbau5U/T54Aj5aqlxI/AAAAAAAADvs/ys4hPkE2EQM/s1600/mensagem-dia-trabalho.jpg'
  altDedicacao = 'imagem mensagem'

  trabalhando = 'https://1.bp.blogspot.com/-GDynr2rZd6g/WP4yvGeTBAI/AAAAAAAAPVM/8rksCoe-PIUnj2AZRtT7kKXvTxRbmHBSACLcB/s1600/trabalho-frases-voltaire.jpg'
  altTrabalhando = 'trabalhaando trabalhar'
}
