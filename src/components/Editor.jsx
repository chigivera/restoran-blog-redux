import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.min.js'
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';

const Editor = ({ editorContent,setEditorContent }) => {
  const froalaOptions = {
  charCounterCount: true,
  height: 300,
  theme: 'dark',
  toolbarInline: false,
  toolbarSticky: false,
  toolbarButtonsXS: ['bold', 'italic', 'underline', 'insertLink', 'insertImage'],
  toolbarButtonsSM: ['undo', 'redo', 'clearFormatting'],
  toolbarButtonsMD: ['html', 'paragraphFormat'],
  paragraphFormat: {
    N: 'Normal',
    H1: 'Heading 1',
    H2: 'Heading 2',
    H3: 'Heading 3',
    H4: 'Heading 4',
    H5: 'Heading 5',
    H6: 'Heading 6',
    PRE: 'Code'
  },
  pluginsEnabled: [
    'charCounter',
    'emoticons',
    'entities',
    'file',
    'fontAwesome',
    'height',
    'image',
    'link',
    'magnify',
    'paragraph_format',
    'quickInsert',
    'save',
    'searchReplace',
    'spellChecker',
    'table',
    'tag',
    'toolbarInline',
    'unicodeBreakpoint',
    'wordPreset'
  ],
  // Ensure the paragraph_format plugin is loaded
  pluginsIncluded: [
    'paragraph_format'
  ]
};


  return (
    <div className="App">
      <FroalaEditor
        tag="textarea"
        config={froalaOptions}
        model={editorContent}
        onModelChange={(model) => setEditorContent(model)}
  
      />
    </div>
  );
};

export default Editor;
