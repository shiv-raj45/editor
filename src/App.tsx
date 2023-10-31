
import "./App.css";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/video.min.js"
import "froala-editor/js/plugins/video.min.js"
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/js/plugins/draggable.min.js"
import "froala-editor/js/plugins/colors.min.js"
import "froala-editor/js/plugins/files_manager.min.js"
import "froala-editor/js/plugins/quote.min.js"
import "froala-editor/js/plugins/word_paste.min.js"
import "froala-editor/js/plugins/print.min.js"
import "froala-editor/js/plugins/font_size.min.js"
import "froala-editor/js/plugins/code_view.min.js"
import "froala-editor/js/plugins/code_beautifier.min.js"












function App() {

  return (
    <>
      <div id="editor"></div>
      <FroalaEditor tag="textarea"
      key={'salidasdkjasd'}
      config={{
        key:"lasndjkasmasjkd"
        
      }} />
    </>
  );
}

export default App;
