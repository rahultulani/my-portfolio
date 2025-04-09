import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {
  readonly panelOpenState = signal(false);
}
