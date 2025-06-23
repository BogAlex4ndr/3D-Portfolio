export const handleCamera = (e, buttonLock, setButtonLock, setTargetId) => {
  e.stopPropagation();
  if (buttonLock === false) {
    setButtonLock(true);
    audioClick.play();
    switch (e.target.id) {
      case 'about':
        setTargetId('about');
        setTimeout(() => {
          setTargetId('activeAbout');
          setButtonLock(false);
        }, 1200);
        break;
      case 'projects':
        setTargetId('projects');
        setTimeout(() => {
          setTargetId('activeProjects');
          setButtonLock(false);
        }, 1200);
        break;
      case 'resume':
        setTargetId('resume');
        setTimeout(() => {
          setTargetId('activeResume');
          setButtonLock(false);
        }, 1000);
        break;
      case 'buttonBack':
        setTargetId('default');
        setTimeout(() => {
          setTargetId('');
          setButtonLock(false);
        }, 1000);

        break;
      default:
        setButtonLock(false);
        break;
    }
  }
};
