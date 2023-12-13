import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Root Component Class
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
