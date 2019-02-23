import { Component } from '@angular/core';

@Component({
    selector: 'app-relax',
    templateUrl: './relax.component.html',
    styleUrls: ['./relax.component.scss'],
}
)

export class RelaxComponent {
    images = [1, 2, 3].map(() => `https://picsum.photos/1024/768?random&t=${Math.random()}`);
}
