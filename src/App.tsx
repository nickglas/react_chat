import './App.css';
import Settingstray from './chat/settings-tray/settingsTray.component';
import Searchbar from './chat/searchBar/searchBar.component';
import Contactlist from './chat/contacts-list/contactList.component';
import Profiletray from './chat/profile-tray/profileTray.component';
import Chatlist from './chat/chat-list/chatList.component';
import Chatinput from './chat/chatInput/chatInput.component';

function App() {
  return (
    <div className="container">
      <div className="row no-gutters chat-wrapper">
        <div className="col-md-4 border-right chat-app-left">
          <Settingstray />
          <Searchbar />
          <Contactlist />
        </div>
        <div className="col-md-8 chat-app-right">
          <Profiletray />
          <Chatlist />
          <Chatinput />
        </div>
      </div>
    </div>
  );
}

export default App;
