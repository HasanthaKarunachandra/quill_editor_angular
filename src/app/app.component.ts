import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '15rem',
      maxHeight: '5rem',
      placeholder: 'Enter text here...',
      translate:'no',
      defaultParagraphSeparator: 'p',
      defaultFontName:'Arial',
};
}
