import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  estudo = 'https://st.depositphotos.com/1507177/1318/i/600/depositphotos_13183243-stock-photo-study-time.jpg'
  altEstudar = 'estudo e dedicação'

  estudar = 'https://tse1.mm.bing.net/th?id=OIP.ws4fsFByYmTOEN7OzfZJrQHaCy&pid=Api&P=0&h=180'
  altEstudo = 'estudar dedicando'

  trabalhar = 'https://tse3.mm.bing.net/th?id=OIP.nU4BjSSDtGQ3jS1fE5qslwHaDt&pid=Api&P=0&h=180'
  altTrabalhar = 'trabalho digno'

  trabalho = 'https://www.bhs.com.br/wp-content/uploads/2020/05/BlogPost2020-05-2-como-gerenciar-projetos-e-engajar-equipes-no-trabalho-remoto.png'
  altTrabalho = 'trabalhar'
}
