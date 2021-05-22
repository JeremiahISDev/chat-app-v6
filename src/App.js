import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import LogRocket from 'logrocket';
LogRocket.init('5i2sox/chat-app');

const projectID = 'f52a57ed-a401-422d-905c-07a1846e63af';
function showNotification(){
	var notification = new Notification('New Message!',{
		body: 'You Have A New Chat Message.'
	})

}
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
	  }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
