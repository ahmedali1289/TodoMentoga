import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoMentoga';
  loaderShow: boolean = false;
  ngOnInit(): void {
    this.loader()
  }
  constructor(private cd: ChangeDetectorRef) { }
  async loader() {
    LoaderService.loader.subscribe((res: any) => {
      this.loaderShow = res;
      this.cd.detectChanges();
    });
  }
}
